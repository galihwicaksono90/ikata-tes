import { Box, BoxProps, Text, Skeleton } from "@mantine/core";
import { Badge } from "components/common";
import { NextLink } from "@mantine/next";
import { NewsType } from "generated/graphql";
import Image from "next/image";

interface NewsCardProps extends BoxProps<"div"> {
  small?: boolean;
  loading?: boolean;
  height?: number | string;
  withTags?: boolean;
  tagAlign?: "center" | "right" | "left";
  data?: NewsType;
  bigTag?: boolean;
  textAlign?: "left" | "center" | "right" | "justify";
}

export function NewsCard({
  small,
  bigTag,
  height = "392px",
  data,
  withTags,
  tagAlign,
  textAlign,
  loading,
  ...rest
}: NewsCardProps) {
  if (loading) {
    return <Skeleton height={height} />;
  }

  return (
    <Box
      sx={(theme) => ({
        height,
        position: "relative",
        "& img": {
          transition: "transform ease 300ms",
        },
        "& .mantine-Text-root": {
          transition: "color ease 300ms",
        },
        "&:hover": {
          "& .mantine-Text-root": {
            color: theme.colors.orange[0],
          },
          "& img": {
            transform: "scale(1.08)",
          },
        },
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
          height: small ? 200 : 500,
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
          height: small ? 200 : 400,
        },
      })}
      {...rest}
    >
      <NextLink href={`/berita/${data.id}`}>
        <Box
          sx={(theme) => ({
            //height: 129,
            background: theme.other.darkGradient,
            zIndex: 40,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "16px 16px 28px 16px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: bigTag ? "column-reverse" : "column",
            pointerEvents: "none",
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
              //height: 100,
            },
          })}
        >
          <Text
            size="lg"
            sx={(theme) => ({
              lineHeight: "32.4px",
              color: theme.white,
              "&:hover": {
                color: theme.colors.orange[0],
              },
            })}
            weight={600}
            lineClamp={2}
            align={textAlign}
          >
            {data.title}
          </Text>
          {withTags && data?.tags ? (
            bigTag ? (
              <Badge mb={20}>{data.tags}</Badge>
            ) : (
              <Text
                sx={{ fontSize: "0.625rem", width: "100%" }}
                color="orange"
                weight={500}
                align={tagAlign}
              >
                &#9679; Berita
              </Text>
            )
          ) : null}
        </Box>
        <Box
          sx={(theme) => ({
            position: "relative",
            ...theme.fn.cover(),
          })}
        >
          <Image
            alt=""
            src={data.thumbnailPath}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      </NextLink>
    </Box>
  );
}
