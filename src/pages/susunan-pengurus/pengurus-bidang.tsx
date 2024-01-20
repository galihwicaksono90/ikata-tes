import {
  Box,
  Divider,
  Grid,
  Group,
  MediaQuery,
  Select,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { MemberAvatar, NoData } from "components/common";
import { ManagementLayout } from "components/layouts";
import {
  api,
  OrderEnum,
  ParamsInputType,
  useGetBidangDetailQuery,
  useGetBidangQuery,
} from "generated/graphql";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { wrapper } from "redux/store";
import Head from "head";

const defaultParams: ParamsInputType = {
  sort: {
    field: "urutan",
    order: OrderEnum.Asc,
  },
};

interface Props {
  initialBidang: string;
}

export default function PengurusBidang({ initialBidang }: Props) {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const [currentBidang, setCurrentBidang] = useState<string | null>(
    initialBidang ?? null
  );

  const { data } = useGetBidangQuery({
    params: defaultParams,
  });

  const onTabChange = (id: string) => {
    setCurrentBidang(id);
    setPage(1);
    setUrl(data.getBidang.data.find((bidang) => bidang.id === id).id);
  };

  const setUrl = (text: string) => {
    router.push(`/susunan-pengurus/pengurus-bidang?id=${text}`, undefined, {
      shallow: true,
    });
  };

  return (
    <ManagementLayout
      title="Pengurus Bidang"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis "
    >
      <Head page="pengurusBidang" />
      {!data ? (
        <NoData />
      ) : (
        <>
          <MediaQuery largerThan="md" styles={{ display: "none" }}>
            <Box
              sx={{
                position: "sticky",
                top: 10,
                zIndex: 20,
              }}
            >
              <Select
                size="lg"
                mb={40}
                data={data?.getBidang.data.map((b) => ({
                  value: b.id,
                  label: b.name,
                }))}
                value={currentBidang}
                onChange={onTabChange}
                searchable
                sx={(theme) => ({
                  "& input": {
                    color: theme.colors.orange[0],
                    fontSize: 14,
                    fontWeight: 700,
                    boxShadow: "0px 4px 7px 0px #00000026",
                  },
                })}
              />
            </Box>
          </MediaQuery>
          <Grid>
            <MediaQuery smallerThan="md" styles={{ display: "none" }}>
              <Grid.Col span={3}>
                <Stack sx={{ position: "sticky", top: 20 }}>
                  {data?.getBidang.data.map((bidang) => (
                    <TabButton
                      key={bidang.id}
                      active={currentBidang === bidang.id}
                      onClick={() => onTabChange(bidang.id)}
                    >
                      {bidang.name}
                    </TabButton>
                  ))}
                </Stack>
              </Grid.Col>
            </MediaQuery>
            <Grid.Col md={9} span={12}>
              {!currentBidang ? (
                <NoData />
              ) : (
                <Content id={currentBidang} page={page} setPage={setPage} />
              )}
            </Grid.Col>
          </Grid>
        </>
      )}
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
  const { data, isFetching } = useGetBidangDetailQuery({ id });

  if (isFetching) {
    return (
      <Box>
        <Group sx={{ justifyContent: "space-around" }}>
          <MemberAvatar loading />
          <MemberAvatar loading />
        </Group>
        <Divider
          labelPosition="center"
          label={<Skeleton height={20} width={200} />}
          size="md"
          my={20}
        />
        <Grid>
          {[...Array(6).fill(0)].map((item, index) => (
            <Grid.Col span={4} key={index}>
              <MemberAvatar loading />
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    );
  }
  return (
    <Box>
      <SimpleGrid sx={{ justifyContent: "space-around" }} cols={2}>
        {data?.getBidangDetail?.pengurus.map((pengurus, index) => (
          <MemberAvatar withClassYear withTitle data={pengurus} key={index} />
        ))}
      </SimpleGrid>
      {!!data?.getBidangDetail?.subBidang ? (
        data?.getBidangDetail?.subBidang.map((subBidang, index) => (
          <Stack mt={50} key={index}>
            <Divider
              labelPosition="center"
              label={
                <Text size="lg" weight={600} color="orange">
                  Sub-Bidang {subBidang.name}
                </Text>
              }
              size="md"
              my={20}
            />
            {subBidang.pengurus.length <= 0 ? (
              <Group position="center">
                <Text weight="bold">Belum ada pengurus terdaftar</Text>
              </Group>
            ) : (
              <Grid>
                {!!subBidang.pengurus.find(
                  (p) => p.title.toLowerCase() === "ketua"
                ) ? (
                  <Grid.Col span={6} xs={4}>
                    <MemberAvatar
                      withTitle
                      withClassYear
                      data={subBidang.pengurus.find(
                        (p) => p.title.toLowerCase() === "ketua"
                      )}
                    />
                  </Grid.Col>
                ) : null}
                {subBidang.pengurus
                  .filter((p) => p.title.toLowerCase() !== "ketua")
                  .map((pengurus) => (
                    <Grid.Col span={6} xs={4} key={pengurus.id}>
                      <MemberAvatar
                        data={pengurus}
                        withTitle
                        withClassYear
                      ></MemberAvatar>
                    </Grid.Col>
                  ))}
              </Grid>
            )}
          </Stack>
        ))
      ) : (
        <NoData />
      )}
    </Box>
  );
};

const TabButton = ({
  children,
  onClick,
  active,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}) => {
  return (
    <UnstyledButton
      className={active ? "active" : ""}
      onClick={onClick}
      sx={(theme) => ({
        width: 264,
        minHeight: 60,
        background: theme.colors.dark[5],
        boxShadow: theme.shadows.xl,
        borderRadius: theme.radius.md,
        padding: "17px 20px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        fontWeight: 700,
        fontSize: "14px",
        "&:hover": {
          background: theme.fn.lighten(theme.colors.dark[5], 0.1),
        },
        "&.active": {
          color: theme.colors.orange[0],
        },
      })}
    >
      {children}
    </UnstyledButton>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ query }) => {
    try {
      const response = await store.dispatch(
        api.endpoints.GetBidang.initiate({ params: defaultParams })
      );

      if (!query?.id && Array.isArray(response?.data?.getBidang?.data) && response?.data?.getBidang?.data?.length > 0) {
        return {
          props: { initialBidang: response.data.getBidang.data[0].id },
        };
      }

      const initialBidang = response.data.getBidang.data.find((bidang) => {
        return bidang.id.toString() === query.id;
      });

      if (!initialBidang) {
        return {
          props: { initialBidang: null },
        };
      }

      return {
        props: { initialBidang: initialBidang.id },
      };
    } catch (e) {
      console.log(e);
      return {
        props: { initialBidang: null },
      };
    }
  });
