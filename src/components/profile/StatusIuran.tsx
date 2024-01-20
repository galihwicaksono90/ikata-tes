import { Group, Text, Stack } from "@mantine/core";
import { IconCircleX, IconCircleCheck } from "@tabler/icons";
import { useAppSelector } from "redux/hooks";

export const StatusIuran = () => {
  const user = useAppSelector((state) => state.profileForm.user);
  return (
    <Stack spacing={20} pb={53}>
      <Text sx={{ fontSize: "1.5rem" }} color="dark" weight={600}>
        Status Iuran Tahunan
      </Text>
      <Group>
        <StatusIuranTag isPaid={user.subscription_2022_paid}>
          2022
        </StatusIuranTag>
        <StatusIuranTag isPaid={user.subscription_2023_paid}>
          2023
        </StatusIuranTag>
        <StatusIuranTag isPaid={user.subscription_2024_paid}>
          2024
        </StatusIuranTag>
        <StatusIuranTag isPaid={user.subscription_2025_paid}>
          2025
        </StatusIuranTag>
      </Group>
    </Stack>
  );
};

interface StatusIuranTagProps {
  children: string;
  isPaid?: boolean;
}
const StatusIuranTag = ({ children, isPaid }: StatusIuranTagProps) => {
  return (
    <Group
      sx={(theme) => ({
        background: isPaid
          ? theme.other.verifiedGreenBackground
          : theme.other.unVerifiedBlackBackground,
        color: isPaid
          ? theme.other.verifiedGreenForeground
          : theme.other.unVerifiedBlackForeground,
        borderRadius: 6,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
          padding: "8px 8px",
        },
      })}
      px={12}
      py={12}
      spacing={70}
    >
      <Text
        size="xl"
        weight={500}
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            fontSize: theme.fontSizes.md,
          },
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: theme.fontSizes.sm,
          },
        })}
      >
        {children}
      </Text>
      {isPaid ? <IconCircleCheck /> : <IconCircleX />}
    </Group>
  );
};
