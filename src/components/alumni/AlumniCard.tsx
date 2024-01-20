import { AlumniBusinessesType } from "generated/graphql";
import { Box, BoxProps, Text, Skeleton } from "@mantine/core";
import { NextLink } from "@mantine/next";
import Image from "next/image";

interface AlumniCardProps extends BoxProps<"div"> {
  data?: AlumniBusinessesType;
  href?: string;
  loading?: boolean;
}

export const AlumniCard = ({
  data,
  href,
  loading,
  ...rest
}: AlumniCardProps) => {
  if (loading) {
    return (
      <Box
        {...rest}
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Skeleton
          sx={{
            height: "100%",
            width: "100%",
            borderRadius: "0px",
          }}
          {...rest}
        >
          <Box
            sx={(theme) => ({
              position: "relative",
              ...theme.fn.cover(),
            })}
          ></Box>
          <Box
            sx={(theme) => ({
              height: 126,
              background: theme.other.darkGradient,
              zIndex: 41,
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "30px 20px",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            })}
          >
            <Skeleton height="20px" width="80%" />
          </Box>
        </Skeleton>
      </Box>
    );
  }
  return (
    <Box
      {...rest}
      sx={{
        position: "relative",
        height: "100%",
        width: "100%",
        "& img": {
          transition: "transform ease 300ms",
        },
        "&:hover": {
          "& img": {
            transform: "scale(1.08)",
          },
        },
      }}
    >
      <NextLink href={href}>
        <Box
          sx={(theme) => ({
            //height: 126,
            background: theme.other.darkGradient,
            zIndex: 41,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "30px 20px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          })}
        >
          <Text
            size="lg"
            sx={{ lineHeight: "32.4px" }}
            weight={600}
            lineClamp={2}
            color="white"
          >
            {data.title}
          </Text>
          {!!href ? (
            <Text sx={{ width: "100%" }} weight={600} color="orange" mt={5}>
              Lihat Profil
            </Text>
          ) : null}
        </Box>
        <Box
          sx={(theme) => ({
            position: "relative",
            ...theme.fn.cover(),
          })}
        >
          <Image
            src={data.thumbnailPath}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt=""
          />
        </Box>
      </NextLink>
    </Box>
  );
};
