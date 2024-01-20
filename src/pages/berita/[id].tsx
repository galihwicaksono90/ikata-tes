import { Box, Group, Stack, Text } from "@mantine/core";
import {
  Badge,
  Container,
  Typography,
  VerifiedChecker,
} from "components/common";
import { MainLayout } from "components/layouts";
import { NewsItems } from "components/news";
import { api, NewsType } from "generated/graphql";
import { GetStaticPaths, GetStaticProps } from "next";
import { makeStore, wrapper } from "redux/store";
import { Time } from "utils";
import Head from "head";

interface NewsContentProps {
  news: NewsType;
}

export default function NewsContent({ news }: NewsContentProps) {
  return (
    <MainLayout>
      <Head title={news.title} page="berita" />
      <Container>
        <Group mb={20}>
          <Stack
            sx={(theme) => ({
              textAlign: "center",
              flex: "0 0 744px",
              [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                flex: "0 0 100%",
              },
            })}
            spacing={7}
          >
            <Text sx={{ fontSize: "1.5rem" }} weight={600}>
              {news.title}
            </Text>
            <Text size="sm" color="dimmed">
              {news.author}
            </Text>
            <Text size="sm" color="dimmed">
              {Time.formatTimeWithHours(news.publishedDate)}
            </Text>
          </Stack>
        </Group>
        <Group
          noWrap
          align="flex-start"
          spacing={24}
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              flexDirection: "column",
            },
          })}
        >
          <Box
            sx={(theme) => ({
              flex: "0 0 744px",
              [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                width: "100%",
                flex: "initial",
              },
            })}
          >
            <VerifiedChecker rules={news.rules}>
              <>
                {news?.tags ? <Badge mb={20}>{news.tags}</Badge> : null}
                <Typography>
                  <div dangerouslySetInnerHTML={{ __html: news.content }}></div>
                </Typography>
              </>
            </VerifiedChecker>
          </Box>
          <Box
            sx={(theme) => ({
              width: "100%",
              [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                flex: "0 0 30%",
              },
            })}
          >
            <Text sx={{ fontSize: "1.375rem" }} weight={700} mb={20}>
              Berita Lain
            </Text>
            <NewsItems />
          </Box>
        </Group>
      </Container>
    </MainLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const store = makeStore();
  const result = await store.dispatch(
    api.endpoints.GetNews.initiate({
      params: {
        pagination: {
          limit: 10,
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
    paths: result.data.getNews?.data.map((news) => ({
      params: { id: news.id },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<NewsContentProps> =
  wrapper.getStaticProps((store) => async ({ params }) => {
    try {
      const news = await store.dispatch(
        api.endpoints.GetNewsDetail.initiate({ id: params.id as string })
      );

      if (!news.data.getNewsDetail) {
        return {
          notFound: true,
        };
      }

      return {
        props: {
          news: news.data.getNewsDetail,
        },
        revalidate: 30,
      };
    } catch (e) {
      console.log("Berita", e)
      return {
        notFound: true,
      };
    }
  });
