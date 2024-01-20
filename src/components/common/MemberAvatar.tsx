import { Avatar, Box, Skeleton, Stack, Text } from "@mantine/core";
import { IconMail } from "@tabler/icons";
import { JabatanType } from "generated/graphql";

export type MemberAvatarProps = {
  useTitle?: boolean;
  loading?: boolean;
  data?: {
    id?: string;
    fullName?: string;
    email?: string;
    classYear?: number;
    photoPath?: string;
    title?: string;
    jabatan?: JabatanType;
  };
  withTitle?: boolean;
  withClassYear?: boolean;
  withEmail?: boolean;
};

const MemberAvatarSkeleton = () => {
  return (
    <>
      <Box
        sx={(theme) => ({
          height: 170,
          width: 170,
          [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
            height: 130,
            width: 130,
          },
        })}
        mb={20}
      >
        <Skeleton
          circle
          sx={{
            height: "100%",
            width: "100%",
            borderRadius: "50%",
          }}
        />
      </Box>
      <Skeleton height={16} mb={20} />
      <Skeleton height={14} width="60%" mb={20} />
      {/* <Skeleton height={14} width="75%" /> */}
    </>
  );
};

export function MemberAvatar({
  data,
  loading,
  withTitle = true,
  withClassYear = true,
  withEmail = false,
  useTitle,
}: MemberAvatarProps) {
  return (
    <Stack
      align="center"
      //mb={35}
      sx={{
        "& .mantine-Text-root": {
          lineHeight: "32.4px",
        },
      }}
      spacing={3}
      mx={5}
    >
      {loading ? (
        <MemberAvatarSkeleton />
      ) : !!data ? (
        <>
          <Avatar
            radius="xl"
            sx={(theme) => ({
              height: 170,
              width: 170,
              marginBottom: 20,
              [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
                height: 130,
                width: 130,
              },
            })}
            src={data.photoPath}
          />
          <Text
            size="lg"
            weight={600}
            align="center"
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
                fontSize: theme.fontSizes.md,
              },
            })}
          >
            {data.fullName}
          </Text>

          <Text
            color="dimmed"
            size="sm"
            weight={500}
            align="center"
            lineClamp={1}
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
                fontSize: theme.fontSizes.md,
              },
            })}
          >
            {/* @ts-ignore */}
            {withTitle && useTitle && !!data?.title ? data?.title : ""}
            {withTitle && !!data?.jabatan?.name
              ? useTitle
                ? data?.title
                : data.jabatan?.name
              : ""}{" "}
            {withTitle && withClassYear ? "|" : null}{" "}
            {withClassYear && !!data?.classYear ? data.classYear : null}
          </Text>
          {data.email && withEmail ? (
            <>
              <Text size="sm" weight={500} sx={{ textAlign: "center" }}>
                <Box>{data.email.split("@")[0]}</Box>
                <Box>{"@" + data.email.split("@")[1]}</Box>
              </Text>
              <Box
                component={IconMail}
                sx={(theme) => ({ color: theme.colors.dark[3] })}
              />
            </>
          ) : null}
        </>
      ) : null}
    </Stack>
  );
}
