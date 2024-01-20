import { Stack, Text } from "@mantine/core";
import {
  Container,
  NoData,
  Typography,
  VerifiedChecker,
} from "components/common";
import { MainLayout } from "components/layouts";
import { api, ArticlesType, Category, ComparatorEnum } from "generated/graphql";
import { GetStaticPaths, GetStaticProps } from "next";
import { wrapper, makeStore } from "redux/store";
import { Time } from "utils";
import Head from "head";

interface ArticleContentProps {
  data: ArticlesType;
}

export default function ArticleContent({ data }: ArticleContentProps) {
  if (!data) {
    return <NoData />;
  }

  return (
    <MainLayout>
      <Head page="artikelNonIlmiah" title={data?.title} />
      <Container>
        <Stack mb={36}>
          <Text weight={500}>{data.author}</Text>
          <Text weight={700} sx={{ fontSize: "2rem" }} mb={6}>
            {data.title}
          </Text>{" "}
          <Text color="dimmed" weight={500}>
            {" "}
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

export const getStaticPaths: GetStaticPaths = async ({ }) => {
  const store = makeStore();
  const result = await store.dispatch(
    api.endpoints.GetArticles.initiate({
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
          {
            field: "category",
            value: Category.NonIlmiah,
            comparator: ComparatorEnum.Equal,
          },
        ],
      },
    })
  );

  return {
    paths: result.data?.getArticles.data.map((article) => ({
      params: {
        id: article.id,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<ArticleContentProps> =
  wrapper.getStaticProps((store) => async ({ params }) => {
    const result = await store.dispatch(
      api.endpoints.GetArticleDetail.initiate({ id: params.id as string })
    );

    if (!result.data?.getArticleDetail) {
      return {
        notFound: true,
      };
    }

    return {
      props: { data: result.data.getArticleDetail },
      revalidate: 30,
    };
  });
