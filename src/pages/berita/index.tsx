import { Grid, Text } from "@mantine/core";
import { Container, Pagination, NoData } from "components/common";
import { NewsCard } from "components/news";
import { MainLayout } from "components/layouts";
import { api, useGetNewsQuery, OrderEnum } from "generated/graphql";
import { wrapper } from "redux/store";
import { useState } from "react";
import Head from "head";

const limit = 7;

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isFetching } = useGetNewsQuery({
    params: {
      pagination: {
        limit,
        offset: (currentPage - 1) * limit,
      },
      where: [
        {
          field: "status",
          value: "Published",
        },
      ],
      sort: {
        field: "publishedDate",
        order: OrderEnum.Desc,
      },
    },
  });

  return (
    <MainLayout>
      <Head page="berita" />
      <Container>
        <Text sx={{ fontSize: "2rem" }} weight={700} mb={30}>
          Berita
        </Text>
        {!data?.getNews.data.length ? (
          <NoData />
        ) : (
          <>
            <NewsCard
              data={data?.getNews.data[0]}
              mb={30}
              height={592}
              withTags
              bigTag
              loading={isFetching}
            />
            <Text sx={{ fontSize: "2rem" }} weight={700} mb={30}>
              Berita Terkini
            </Text>
            {data?.getNews.data.length <= 1 ? (
              <NoData />
            ) : (
              <>
                <Grid mb={45} gutter={10}>
                  {isFetching
                    ? [...Array(6).fill(0)].map((item, index) => (
                      <Grid.Col span={4} key={index}>
                        <NewsCard loading />
                      </Grid.Col>
                    ))
                    : data?.getNews.data.map((news, index) => {
                      if (index === 0) return;
                      return (
                        <Grid.Col sm={4} xs={6} span={12} key={news.id}>
                          <NewsCard
                            data={news}
                            height={"300px"}
                            textAlign="center"
                            small
                          />
                        </Grid.Col>
                      );
                    })}
                </Grid>
              </>
            )}
          </>
        )}
        <Pagination
          perPage={limit}
          totalData={data?.getNews?.meta.totalCount}
          position="right"
          onChange={setCurrentPage}
          page={currentPage}
        />
      </Container>
    </MainLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(
      api.endpoints.GetNews.initiate({
        params: {
          pagination: {
            limit,
            offset: 0,
          },
          where: [
            {
              field: "status",
              value: "Published",
            },
          ],
          sort: {
            field: "publishedDate",
            order: OrderEnum.Desc,
          },
        },
      })
    );

    return {
      props: {},
    };
  }
);
