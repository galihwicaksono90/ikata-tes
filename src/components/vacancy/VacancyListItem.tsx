import {
  VacanciesType,
  ScholarshipsType,
  FinalProjectsType,
} from "generated/graphql";
import {
  Box,
  UnstyledButton,
  Avatar,
  Divider,
  Group,
  Text,
  Skeleton,
} from "@mantine/core";
import { Time } from "utils/time";

export function VacancyListItem({
  loading,
  data,
  onClick,
  active,
  hideLowongan,
}: {
  loading?: boolean;
  data?: VacanciesType | ScholarshipsType | FinalProjectsType;
  onClick?: () => void;
  active?: boolean;
  hideLowongan?: boolean;
}) {
  if (loading) {
    return (
      <Group
        align="flex-start"
        spacing={20}
        p={20}
        sx={(theme) => ({
          cursor: "pointer",
          backgroundColor: active ? theme.colors.gray[1] : null,
          "&:hover": {
            backgroundColor: theme.colors.gray[2],
          },
        })}
        noWrap
      >
        <Skeleton
          height={76}
          width={76}
          radius="md"
          sx={{ flex: "0 0 76px" }}
        />
        <Box sx={{ flex: "0 0 auto", width: "90%" }}>
          <Skeleton height={16} width="80%" mb={10} />
          <Skeleton height={14} width="40%" mb={20} />
          <Skeleton height={14} width="50%" />
        </Box>
      </Group>
    );
  }

  return (
    <UnstyledButton onClick={onClick} sx={{ width: "100%" }}>
      <Group
        align="flex-start"
        spacing={20}
        p={20}
        sx={(theme) => ({
          cursor: "pointer",
          backgroundColor: active ? theme.colors.gray[1] : null,
          "&:hover": {
            backgroundColor: theme.colors.gray[2],
          },
        })}
        noWrap
      >
        <Avatar
          sx={{ height: 76, width: 76, minWidth: 76 }}
          src={data.companyLogoPath}
          radius="md"
        />
        <div>
          <Text color="dark" weight="bold">
            {data.companyName}
          </Text>
          <Text size="sm" color="gray" mb={22}>
            {!!data.amount
              ? `${data.amount} ${hideLowongan ? "" : "lowongan"}`
              : ""}
          </Text>
          <Text size="sm" color="gray">
            {Time.formatTime(data.publishedDate)}{" "}
            {!!data.companyCity ? `- ${data.companyCity}` : null}
          </Text>
        </div>
      </Group>
      <Divider color="#eaeaea" />
    </UnstyledButton>
  );
}
