import { Paper, Text, Stack, Group, Avatar, Skeleton } from "@mantine/core";
import { KetuaIkataType } from "generated/graphql";

interface Props {
  data?: KetuaIkataType;
  loading?: boolean;
}

export function AboutTestimonyCard({ data, loading }: Props) {
  if (loading) {
    return (
      <Paper
        sx={() => ({
          padding: "62px 32px",
          background: "rgba(0,0,0,0.6)",
        })}
        mx={10}
      >
        <Group
          noWrap
          align="stretch"
          sx={(theme) => ({
            color: "#F1F1F1",
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
              flexDirection: "column-reverse",
              alignItems: "center",
              textAlign: "center",
              "& .mantine-Avatar-root": {
                transform: "scale(0.9)",
              },
            },
            [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
              "& .mantine-Avatar-root": {
                transform: "scale(0.7)",
              },
            },
          })}
        >
          <Stack sx={{ width: "100%" }}>
            <Skeleton height={20} width="40%" mb={20} />
            <Skeleton height={16} width="20%" mb={20} />
            <Skeleton height="100%" width="100%" />
          </Stack>
          <Skeleton circle height={250} width={250} sx={{ minWidth: 250 }} />
        </Group>
      </Paper>
    );
  }

  if (!data) {
    return <></>;
  }

  return (
    <Paper
      sx={() => ({
        padding: "62px 32px",
        background: "rgba(0,0,0,0.6)",
      })}
      mx={10}
    >
      <Group
        noWrap
        align="stretch"
        sx={(theme) => ({
          color: "#F1F1F1",
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: "column-reverse",
            alignItems: "center",
            textAlign: "center",
            "& .mantine-Avatar-root": {
              transform: "scale(0.9)",
            },
          },
          [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
            "& .mantine-Avatar-root": {
              transform: "scale(0.7)",
            },
          },
        })}
      >
        <Stack align="center">
          <Avatar size={250} radius="xl" src={data.photoPath} />
          <Text size="xl" mb={0} weight={500}>
            {data.fullName} | {data.classYear}
          </Text>
          <Text mb={30} size="sm" weight={400}>
            {data.period}
          </Text>
          <Text
            size="sm"
            sx={{ lineHeight: "25.2px" }}
            weight={400}
            align="center"
          >
            {data.description}
          </Text>
        </Stack>
      </Group>
    </Paper>
  );
}
