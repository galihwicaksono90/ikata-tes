import { Group, Text, Box, Skeleton } from "@mantine/core";
import { ArticlesType, ActivitiesType } from "generated/graphql";
import { TextLink } from "components/common";
import { Time } from "utils";
import { NextLink } from "@mantine/next";
import Image from "next/image";

export const ArticleMainListItem = ({
  data,
  href,
  loading,
}: {
  data?: ArticlesType | ActivitiesType;
  href?: string;
  loading?: boolean;
}) => {
  if (loading) {
    return (
      <Group
        noWrap
        align="flex-start"
        position="apart"
        spacing={24}
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: "column-reverse",
          },
        })}
      >
        <Box
          sx={{
            "& > * + *": {
              marginTop: 20,
            },
            width: "100%",
          }}
        >
          <Skeleton height={20} width="50%" />
          <Skeleton height={100} width="100%" />
          <Skeleton height={14} width="25%" />
        </Box>
        <Box
          sx={(theme) => ({
            flex: "0 0 360px",
            width: "100%",
            height: "207px",
          })}
        >
          <Skeleton height="100%" width="100%" />
        </Box>
      </Group>
    );
  }

  return (
    <Group
      noWrap
      align="flex-start"
      position="apart"
      spacing={24}
      sx={(theme) => ({
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
          flexDirection: "column-reverse",
        },
      })}
    >
      <Box
        sx={{
          "& > * + *": {
            marginTop: 20,
          },
        }}
      >
        <TextLink
          href={href}
          type="white"
          style={{ fontSize: "1.25rem", marginBottom: 10 }}
        >
          {data.title}
        </TextLink>
        <Text lineClamp={3} size="sm" weight={500}>
          {data.description}
        </Text>
        <TextLink href={href} size="sm">
          Baca Selengkapnya
        </TextLink>
        <Text color="dimmed" size="sm" weight={500}>
          {Time.formatTime(data.publishedDate)}
        </Text>
      </Box>
      <Box
        sx={(theme) => ({
          position: "relative",
          flex: "0 0 360px",
          width: "100%",
          height: "207px",
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            maxHeight: "170px",
          },
        })}
        component={NextLink}
        href={href}
      >
        <Image
          src={data.thumbnailPath}
          alt={data.title}
          layout="fill"
          objectFit="cover"
        />
      </Box>
    </Group>
  );
};
