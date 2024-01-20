import { Grid, Group, Input, MediaQuery, Select, Text } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons";
import { AvatarCarousel, NoData, AvatarPagination } from "components/common";
import { ManagementLayout } from "components/layouts";
import {
  api,
  useGetWilayahQuery,
  useGetWilayahDetailQuery,
  ParamsInputType,
  OrderEnum,
} from "generated/graphql";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { wrapper } from "redux/store";
import Head from "head";

const defaultParams: ParamsInputType = {
  sort: {
    field: "name",
    order: OrderEnum.Asc,
  },
};

interface Props {
  initialArea: string;
}

export default function KoordinatorWilayah({ initialArea }: Props) {
  const router = useRouter();
  const [currentArea, setCurrentArea] = useState(initialArea);
  const [filter, setFilter] = useState("");
  const [debouncedFilter] = useDebouncedValue(filter, 500);
  const [page, setPage] = useState(1);

  const { data: areas } = useGetWilayahQuery({
    params: defaultParams,
  });

  const onSelectArea = (id: string) => {
    setCurrentArea(id);
    setUrl(id);
    setPage(1);
  };

  const setUrl = (id: string) => {
    router.push(
      `/susunan-pengurus/koordinator-wilayah?id=${areas.getWilayah.data.find((area) => area.id === id).id
      }`,
      undefined,
      { shallow: true }
    );
  };

  return (
    <ManagementLayout
      title="Koordinator Wilayah"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis "
    >
      <Head page="pengurusWilayah" />
      <MediaQuery largerThan="md" styles={{ display: "none" }}>
        <Select
          data={areas.getWilayah.data.map((area) => ({
            value: area.id,
            label: area.name,
          }))}
          value={currentArea}
          onChange={onSelectArea}
          mb={40}
          size="lg"
          searchable
          icon={<IconSearch color="#abaaaa" />}
          sx={(theme) => ({
            "& input": {
              color: theme.colors.orange[0],
              fontWeight: 700,
              border: "1px solid #EAEAEA",
              fontSize: 14,
            },
          })}
        />
      </MediaQuery>
      <Grid>
        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
          <Grid.Col span={3}>
            <Group
              p={20}
              sx={(theme) => ({
                borderRadius: theme.radius.md,
                background: theme.colors.dark[5],
              })}
            >
              <Text weight="bold">List Wilayah</Text>
              <Input
                placeholder="Cari Wilayah"
                icon={<IconSearch />}
                sx={(theme) => ({
                  border: `1px solid`,
                  borderColor: "#eaeaea",
                  borderRadius: theme.radius.md,
                  input: {
                    color: theme.other.gray,
                  },
                })}
                rightSection={
                  <Text
                    size="xs"
                    onClick={() => setFilter("")}
                    sx={(theme) => ({
                      cursor: "pointer",
                      color: theme.other.gray,
                    })}
                  >
                    X
                  </Text>
                }
                variant="unstyled"
                value={filter}
                onChange={(e: any) => setFilter(e.target.value)}
                mb={20}
              />
              <Group direction="column">
                {areas?.getWilayah.data
                  .filter((i) => i.name.toLowerCase().includes(debouncedFilter))
                  .map((area) => (
                    <Text
                      color={currentArea === area.id ? "orange" : "gray"}
                      weight={currentArea === area.id ? "bold" : "normal"}
                      transform="capitalize"
                      onClick={() => onSelectArea(area.id)}
                      key={area.id}
                      sx={{ cursor: "pointer" }}
                      component="a"
                    >
                      {area.name}
                    </Text>
                  ))}
              </Group>
            </Group>
          </Grid.Col>
        </MediaQuery>
        <Grid.Col md={9} span={12}>
          {!currentArea ? (
            <NoData />
          ) : (
            <Content id={currentArea} page={page} setPage={setPage} />
          )}
        </Grid.Col>
      </Grid>
    </ManagementLayout>
  );
}

const Content = ({
  id,
  page,
  setPage,
}: {
  id: string;
  page: number;
  setPage(page: number): void;
}) => {
  const { data, isFetching } = useGetWilayahDetailQuery({ id: id });
  return (
    <AvatarPagination
      data={data?.getWilayahDetail?.koordinator}
      loading={isFetching}
      page={page}
      setPage={setPage}
    />
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ query }) => {
    try {
      const response = await store.dispatch(
        api.endpoints.GetWilayah.initiate({ params: defaultParams })
      );

      if (!query?.id && Array.isArray(response?.data?.getWilayah?.data) && response?.data?.getWilayah?.data?.length > 0) {
        return {
          props: {
            initialArea: response.data.getWilayah.data[0].id,
          },
        };
      }

      const initialArea = response.data.getWilayah.data.find(
        (wilayah) => wilayah.id === query.id
      )?.id;

      if (!initialArea) {
        return {
          props: {
            initialArea: null,
          },
        };
      }

      return {
        props: {
          initialArea,
        },
      };
    } catch (error) {
      console.log({ error });
      return {
        props: {
          initialArea: null,
        },
      };
    }
  });
