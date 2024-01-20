import {
  Box,
  Center,
  Grid,
  Group,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@mantine/core";
import {
  Container,
  NoData,
  Pagination,
  SearchInputSmall,
} from "components/common";
import { MainLayout } from "components/layouts";
import { CategoryButton, MerchCard, MerchModal } from "components/merch";
import {
  api,
  OrderEnum,
  StatusMerchandises,
  useGetMerchandiseAdvanceQuery,
  useGetMerchandiseCategoriesQuery,
  useGetMerchandiseDetailQuery,
} from "generated/graphql";
import Head from "head";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { wrapper } from "redux/store";

const limit = 12;

const sort = {
  default: {
    value: "default",
    obj: {},
    label: "Default Sort",
  },
  low: {
    value: "low",
    obj: { sort: { field: "price", order: OrderEnum.Asc } },
    label: "Harga Terendah",
  },
  high: {
    value: "high",
    obj: { sort: { field: "price", order: OrderEnum.Desc } },
    label: "Harga Tertinggi",
  },
};

interface MerchandisePageProps {
  id: string | null;
}

export default function MerchandisePage({ id }: MerchandisePageProps) {
  const router = useRouter();
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentSort, setCurrentSort] = useState("default");
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [currentMerch, setCurrentMerch] = useState(!!id ? id : "");
  const [showModal, setShowModal] = useState<boolean>(!!currentMerch);

  const { data: categories, isFetching: isFetchingCategories } =
    useGetMerchandiseCategoriesQuery({ params: {} });

  const { data: merch } = useGetMerchandiseDetailQuery(
    { id: currentMerch },
    { skip: !id }
  );

  const { data, isFetching } = useGetMerchandiseAdvanceQuery({
    params: {
      ...sort[currentSort].obj,
      where: {
        or: [
          {
            field: "status",
            value: "Out Of Stock",
          },
          {
            field: "status",
            value: StatusMerchandises.Published,
          },
        ],
        and: [
          {
            field: "categoryId",
            value: currentCategory,
          },
          {
            field: "name",
            value: filter,
          },
        ],
      },
      pagination: {
        limit: limit,
        offset: (page - 1) * limit,
      },
    },
  });

  const onSelect = (id: string) => {
    setCurrentMerch(id);
    router.push(`/merchandise?id=${id}`, null, { shallow: true });
    setShowModal(true);
  };

  return (
    <MainLayout>
      <Head page="merchandise" title={merch?.getMerchandiseDetail?.name} />
      <Container light>
        <Text weight={700} size="lg" mb={30}>
          Kategori Produk
        </Text>
        <Group
          noWrap
          align="flex-start"
          spacing={25}
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
              flexDirection: "column",
            },
          })}
        >
          <Stack
            spacing={40}
            sx={(theme) => ({
              flex: "0 0 264px",
              maxWidth: 264,
              [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                maxWidth: 200,
              },
              [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                maxWidth: "initial",
                width: "100%",
              },
            })}
          >
            <SearchInputSmall
              onSubmit={(value) => setFilter(value)}
              placeholder="Cari Produk"
            />
            <Group
              direction="column"
              sx={(theme) => ({
                [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: 50,
                },
              })}
            >
              <Stack spacing={20}>
                <CategoryButton
                  active={currentCategory === ""}
                  setCurrentCategory={() => setCurrentCategory("")}
                  label="Tampilkan Semua"
                />
                {categories?.getMerchandiseCategory?.data?.map((category) => (
                  <CategoryButton
                    active={currentCategory === category?.id}
                    setCurrentCategory={() => setCurrentCategory(category?.id)}
                    label={category?.name}
                    key={category?.id}
                  />
                ))}
              </Stack>
              <Stack>
                <Text weight={700} size="lg">
                  Urutkan
                </Text>
                <Text weight={700} size="lg">
                  <RadioGroup
                    value={currentSort}
                    onChange={(value) => setCurrentSort(value)}
                    styles={(theme) => ({
                      label: {
                        color: theme.colors.dark[8],
                        fontWeight: 500,
                        fontSize: theme.fontSizes.sm,
                      },
                    })}
                    orientation="vertical"
                    spacing={20}
                  >
                    {Object.keys(sort).map((key) => (
                      <Radio
                        value={sort[key].value}
                        label={sort[key].label}
                        key={key}
                      />
                    ))}
                  </RadioGroup>
                </Text>
              </Stack>
            </Group>
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <Grid gutter={30}>
              {isFetching ? (
                [...Array(6).fill(0)].map((_item, index) => (
                  <Grid.Col span={12} sm={6} md={4} key={index}>
                    <MerchCard loading key={index} light />
                  </Grid.Col>
                ))
              ) : !data?.getMerchandiseAdvance?.data.length ? (
                <Center sx={{ width: "100%" }}>
                  <Box sx={{ maxWidth: 400 }}>
                    <NoData light title="Pencarian tidak ditemukan." />
                  </Box>
                </Center>
              ) : (
                data?.getMerchandiseAdvance?.data.map((merch) => (
                  <Grid.Col span={12} sm={6} md={4} key={merch.id}>
                    <MerchCard data={merch} light onClick={onSelect} />
                  </Grid.Col>
                ))
              )}
            </Grid>
            {!!data?.getMerchandiseAdvance?.data.length ? (
              <Pagination
                light
                perPage={limit}
                totalData={data?.getMerchandiseAdvance?.meta.totalCount}
                position="center"
                onChange={setPage}
                page={page}
              />
            ) : null}
          </Stack>
        </Group>
      </Container>
      <MerchModal
        onClose={() => setShowModal(false)}
        opened={showModal}
        id={currentMerch}
      />
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ query }) => {
    await store.dispatch(
      api.endpoints.GetMerchandiseAdvance.initiate({
        params: {
          where: {
            or: [
              {
                field: "status",
                value: "Out Of Stock",
              },
              {
                field: "status",
                value: StatusMerchandises.Published,
              },
            ],
            and: [
              {
                field: "categoryId",
                value: "",
              },
              {
                field: "name",
                value: "",
              },
            ],
          },
          pagination: {
            limit,
            offset: 0,
          },
        },
      })
    );

    await store.dispatch(
      api.endpoints.GetMerchandiseCategories.initiate({ params: {} })
    );

    await store.dispatch(api.endpoints.GetMerchandiseContact.initiate());

    if (!!query?.id) {
      try {
        const merch = await store.dispatch(
          api.endpoints.GetMerchandiseDetail.initiate({
            id: query.id as string,
          })
        );
        if (!!merch.data.getMerchandiseDetail) {
          return {
            props: {
              id: merch.data.getMerchandiseDetail.id,
            },
          };
        }
        return {
          notFound: true,
        };
      } catch (error) {
        return {
          props: { id: null },
        };
      }
    }

    return {
      props: { id: null },
    };
  });
