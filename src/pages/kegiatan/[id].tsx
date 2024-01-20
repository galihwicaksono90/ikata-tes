import { Stack, Text } from "@mantine/core";
import { Container, VerifiedChecker, Typography } from "components/common";
import { MainLayout } from "components/layouts";
import { ActivitiesType, api } from "generated/graphql";
import { GetStaticPaths, GetStaticProps } from "next";
import { makeStore, wrapper } from "redux/store";
import { Time } from "utils";
import Head from "head";

interface ActivityDetailProps {
  data: ActivitiesType;
  testing?: string;
}

export default function ActivityDetail({ data }: ActivityDetailProps) {
  return (
    <MainLayout>
      <Head page="kegiatan" title={data?.title} />
      <Container>
        <Stack mb={36}>
          {/* <Text weight={500}>{news.author}</Text> */}
          <Text weight={700} sx={{ fontSize: "2rem" }} mb={6}>
            {data.title}
          </Text>
          <Text color="dimmed" weight={500}>
            {Time.formatTimeWithHours(data.publishedDate)}
          </Text>
        </Stack>

        <VerifiedChecker rules={data.rules}>
          <Typography>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </Typography>
        </VerifiedChecker>
      </Container>
    </MainLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const store = makeStore();
  const result = await store.dispatch(
    api.endpoints.GetActivities.initiate({
      params: {
        pagination: {
          limit: 1,
          offset: 0,
        },
        where: [
          {
            field: "status",
            value: "published",
          },
        ],
      },
    })
  );

  return {
    paths: result.data?.getActivities.data.map((activity) => ({
      params: {
        id: activity.id,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<ActivityDetailProps> =
  wrapper.getStaticProps((store) => async ({ params }) => {
    const result = await store.dispatch(
      api.endpoints.GetActivityDetail.initiate({ id: params.id as string })
    );

    if (!result.data?.getActivityDetail) {
      return {
        notFound: true,
      };
    }

    return {
      props: { data: result.data.getActivityDetail },
      revalidate: 20,
    };
  });
