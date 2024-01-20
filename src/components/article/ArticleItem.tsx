import { Group, Box, Stack, Text, Skeleton } from "@mantine/core";
import Image from "next/image";
import { TextLink } from "components/common";
import { Time } from "utils";
import { NextLink } from "@mantine/next";
import { ActivitiesType, ArticlesType } from "generated/graphql";

type DataType = ActivitiesType | ArticlesType;

export type ArticleItemProps =
  | { loading: true; data?: DataType; href?: string }
  | { loading: boolean; data: DataType; href: string }
  | { loading?: never; data: DataType; href: string };

export function ArticleItem({ data, href, loading }: ArticleItemProps) {
  if (loading) {
    return (
      <Group
        align="flex-start"
        spacing={24}
        noWrap
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: "column",
          },
        })}
      >
        <Skeleton
          sx={(theme) => ({
            width: 393,
            height: 241,
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
              width: "100%",
            },
          })}
        ></Skeleton>
        <Group
          spacing={10}
          direction="column"
          position="apart"
          sx={{ width: "100%", height: "100%" }}
        >
          <Skeleton height={22} width="80%" mb={10} />
          <Skeleton height={16} width="25%" mb={15} />
          <Skeleton height={150} width="100%" />
        </Group>
      </Group>
    );
  }

  return (
    <Group
      align="flex-start"
      spacing={24}
      noWrap
      sx={(theme) => ({
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
          flexDirection: "column",
        },
      })}
    >
      <Box
        sx={(theme) => ({
          position: "relative",
          minWidth: "35%",
          height: 241,
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: "100%",
          },
        })}
        component={NextLink}
        href={href}
      >
        <Image
          src={data.thumbnailPath}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </Box>
      <Stack spacing={10}>
        <TextLink
          size="xl"
          weight={600}
          lineClamp={1}
          transform="capitalize"
          href={href}
          type="white"
        >
          {data.title}
        </TextLink>
        <Text size="sm" weight={500} color="dimmed">
          {Time.formatTime(data.publishedDate)}
        </Text>
        <Box>
          <Text>
            <Text
              weight={500}
              lineClamp={5}
              sx={{ lineHeight: 1.8 }}
              transform="capitalize"
            >
              {data.description}
            </Text>
            <TextLink href={href}>Selengkapnya</TextLink>
          </Text>
        </Box>
      </Stack>
    </Group>
  );
}
