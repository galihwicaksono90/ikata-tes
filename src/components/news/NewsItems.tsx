import { Box, Group, Text, Skeleton, Stack } from "@mantine/core";
import { useGetNewsQuery, NewsType } from "generated/graphql";
import Image from "next/image";
import { getNewsInDetailDefaultParams } from "utils/defaultParams";
import { NextLink } from "@mantine/next";

export const NewsItems = () => {
  const { data, isFetching } = useGetNewsQuery({
    params: getNewsInDetailDefaultParams,
  });

  return (
    <Stack spacing={20}>
      {isFetching
        ? [...Array(6).fill(0)].map((_item, index) => (
            <NewsItem loading key={index} />
          ))
        : data.getNews.data.map((news) => (
            <NewsItem data={news} key={news.id} />
          ))}
    </Stack>
  );
};

const NewsItem = ({
  data,
  loading,
}: {
  data?: NewsType;
  loading?: boolean;
}) => {
  if (loading) {
    return (
      <Box
        sx={(theme) => ({
          color: theme.white,
          textDecoration: "none",
          "&:hover": {
            color: theme.colors.orange[0],
          },
        })}
      >
        <Group noWrap>
          <Box
            sx={(theme) => ({
              position: "relative",
              overflow: "hidden",
              borderRadius: theme.radius.lg,
              height: 72,
              minWidth: 72,
            })}
          >
            <Skeleton height="100%" width="100%" />
          </Box>
          <Stack
            sx={(theme) => ({
              width: "100%",
              [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                maxWidth: "500px",
                width: "100%",
              },
            })}
          >
            <Skeleton height={16} width="100%" />
            <Skeleton height={16} width="25%" />
          </Stack>
        </Group>
      </Box>
    );
  }
  return (
    <Box
      sx={(theme) => ({
        color: theme.white,
        textDecoration: "none",
        "&:hover": {
          color: theme.colors.orange[0],
        },
      })}
      component={NextLink}
      href={`/berita/${data.id}`}
    >
      <Group noWrap>
        <Box
          sx={(theme) => ({
            position: "relative",
            overflow: "hidden",
            borderRadius: theme.radius.lg,
            height: 72,
            minWidth: 72,
          })}
        >
          <Image
            src={data.thumbnailPath}
            layout="fill"
            objectFit="cover"
            alt={data.title}
          />
        </Box>
        <Text lineClamp={2} weight={500}>
          {data.title}
        </Text>
      </Group>
    </Box>
  );
};
