import { useState } from "react";
import { ArticleLayout } from "components/layouts";
import { NoData, Pagination } from "components/common";
import { ArticleMainListItem } from "components/article";
import { api, useGetActivitiesQuery, OrderEnum } from "generated/graphql";
import { GetServerSideProps } from "next";
import { wrapper } from "redux/store";
import { Stack } from "@mantine/core";
import Head from "head";

const limit = 5;

export default function Kegiatan() {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetActivitiesQuery({
    params: {
      pagination: {
        limit,
        offset: (page - 1) * limit,
      },
      where: [
        {
          field: "status",
          value: "published",
        },
      ],
      sort: {
        field: "publishedDate",
        order: OrderEnum.Desc,
      },
    },
  });

  return (
    <ArticleLayout title="Kegiatan IKATA">
      <Head page="kegiatan" />
      {!data?.getActivities.data.length ? (
        <NoData />
      ) : (
        <Stack>
          <Stack spacing={30} mb={40}>
            {isFetching
              ? [...Array(limit).fill(0)].map((_item, index) => (
                <ArticleMainListItem loading key={index} />
              ))
              : data?.getActivities.data.map((activity) => (
                <ArticleMainListItem
                  key={activity.id}
                  data={activity}
                  href={`/kegiatan/${activity.id}`}
                />
              ))}
          </Stack>
          <Pagination
            perPage={limit}
            totalData={data.getActivities.meta.totalCount}
            position="right"
            onChange={setPage}
            page={page}
          />
        </Stack>
      )}
    </ArticleLayout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ }) => {
    await store.dispatch(
      api.endpoints.GetActivities.initiate({
        params: {
          pagination: {
            limit,
            offset: 0,
          },
          where: [
            {
              field: "status",
              value: "published",
            },
          ],
          sort: {
            field: "publishedDate",
            order: OrderEnum.Desc,
          },
        },
      })
    );

    return { props: {} };
  });
