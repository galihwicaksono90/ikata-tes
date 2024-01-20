import {
  Box,
  Card,
  Group,
  Text,
  UnstyledButton,
  Skeleton,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import { MerchandisesType } from "generated/graphql";
import Image from "next/image";
import { numberToCurrency } from "utils";

export interface MerchCardProps {
  data?: MerchandisesType;
  loading?: boolean;
  light?: boolean;
  onClick?: (id: string) => void;
}

export function MerchCard({ data, loading, light, onClick }: MerchCardProps) {
  if (loading) {
    return (
      <Card
        sx={(theme) => ({
          height: 414,
          display: "flex",
          flexDirection: "column",
          backgroundColor: light ? theme.white : theme.colors.dark[8],
        })}
        shadow="lg"
      >
        <Card.Section>
          <Skeleton height={263} />
        </Card.Section>
        <Group
          mt={22}
          direction="column"
          position="apart"
          pb={16}
          sx={{ height: "100%" }}
        >
          <Skeleton height={18} width="100%" />
          <Skeleton height={14} width="40%" mt="auto" />
        </Group>
      </Card>
    );
  }

  return (
    <Card
      sx={(theme) => ({
        height: 414,
        display: "flex",
        flexDirection: "column",
        backgroundColor: light ? theme.white : theme.colors.dark[8],
        color: light ? theme.colors.dark[8] : theme.white,
        width: "100%",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: light
            ? theme.fn.darken(theme.white, 0.05)
            : theme.fn.lighten(theme.colors.dark[8], 0.1),
        },
      })}
      component={!!onClick ? "div" : NextLink}
      href={!!onClick ? null : `/merchandise?id=${data.id}`}
      onClick={() => onClick?.(data.id)}
      shadow="lg"
    >
      <Card.Section>
        <Box
          sx={{
            position: "relative",
            height: 263,
          }}
        >
          {data?.photos[0]?.thumbnailPath ? (
            <Image
              alt=""
              src={data?.photos[0]?.thumbnailPath ?? undefined}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          ) : (
            <Box
              sx={(theme) => ({ ...theme.fn.cover(), background: "gray" })}
            />
          )}
        </Box>
      </Card.Section>
      <Group
        mt={22}
        direction="column"
        position="apart"
        pb={16}
        sx={{ height: "100%" }}
      >
        <Text weight={600} sx={{ lineHeight: "28.8px" }} lineClamp={2}>
          {data.name}
        </Text>
        <Text color="dimmed" weight="bold" mt="auto">
          {numberToCurrency(data.price)}{" "}
        </Text>
      </Group>
    </Card>
  );
}
