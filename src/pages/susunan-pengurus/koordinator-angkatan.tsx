import { Grid, Group, MediaQuery, Select, Stack, Text } from "@mantine/core";
import { MemberAvatar } from "components/common";
import { ManagementLayout } from "components/layouts";
import { api, useGetKoordinatorAngkatanQuery } from "generated/graphql";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { wrapper } from "redux/store";
import { generateEightYears } from "utils";
import Head from "head";

const years = generateEightYears();

export default function KoordinatorAngkatan() {
  const [value, setValue] = useState(years[0]);

  const { data: members, isFetching } = useGetKoordinatorAngkatanQuery({
    params: {
      startYear: value.startYear,
      endYear: value.endYear,
    },
  });

  const onSelect = (newValue: string) => {
    setValue(years.find((year) => year.value === newValue));
  };

  return (
    <ManagementLayout
      title="Koordinator Angkatan"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis "
    >
      <Head page="koordinatorAngkatan" />
      <Stack>
        <Group position="center" mb={40}>
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Text weight={600}>List Angkatan: </Text>
          </MediaQuery>
          <Select
            size="lg"
            data={years}
            value={value.value}
            onChange={(value) => onSelect(value)}
            styles={{
              item: {
                fontSize: 12,
              },
            }}
            sx={(theme) => ({
              width: 140,
              "& input": {
                color: theme.colors.orange[0],
                fontWeight: 700,
                fontSize: 12,
              },
              [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                width: "100%",
                fontSize: 14,
              },
            })}
          />
        </Group>
        <Grid gutter={10}>
          {isFetching
            ? [...Array(8).fill(0)].map((_item, index) => (
                <Grid.Col md={3} sm={4} span={6} key={index}>
                  <MemberAvatar key={index} loading />
                </Grid.Col>
              ))
            : members?.getKoordinatorAngkatan.map((member) => (
                <Grid.Col md={3} sm={4} span={6} key={member.id}>
                  <MemberAvatar key={member.id} data={member} withClassYear />
                </Grid.Col>
              ))}
        </Grid>
      </Stack>
    </ManagementLayout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({}) => {
    await store.dispatch(
      api.endpoints.GetKoordinatorAngkatan.initiate({
        params: {
          startYear: years[0].startYear,
          endYear: years[0].endYear,
        },
      })
    );

    return {
      props: {},
    };
  });
