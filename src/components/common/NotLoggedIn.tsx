import { Box, AspectRatio, Text, Group, Stack } from "@mantine/core";
import Image from "next/image";
import { GradientButton } from "components/common";
import Link from "next/link";
import { IconArrowAutofitWidth } from "@tabler/icons";

interface NotLoggedInProps {
  light?: boolean;
  unverified?: boolean;
}

export const NotLoggedIn = ({ light, unverified }: NotLoggedInProps) => {
  return (
    <Box sx={{ width: "100%", textAlign: "center" }} py={40}>
      <AspectRatio
        ratio={268 / 247}
        sx={(theme) => ({
          position: "relative",
          maxWidth: 268,
          width: "100%",
          [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            maxWidth: 200,
          },
        })}
        mx="auto"
      >
        <Image src="/unverified.svg" layout="fill" alt="" />
      </AspectRatio>
      <Text
        mt={18}
        align="center"
        weight={600}
        sx={(theme) => ({
          fontSize: "2rem",
          color: light ? theme.colors.dark[8] : theme.white,
          [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            fontSize: "1.5rem",
          },
        })}
      >
        {unverified ? "Akun Anda Belum Terverifikasi" : "Anda Belum Login"}
      </Text>
      <Text
        weight={600}
        size="lg"
        color="dimmed"
        sx={(theme) => ({
          maxWidth: 542,
          [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            fontSize: theme.fontSizes.xs,
          },
        })}
        mx="auto"
        mt={20}
      >
        {unverified
          ? "Silakan tunggu verifikasi akun anda untuk melihat konten ini, atau hubungi admin kami"
          : "Silakan login terlebih dahulu untuk melihat konten ini"}
      </Text>
      {unverified ? null : (
        <Link passHref href="/login">
          <Group position="center" mt={40}>
            <GradientButton sx={{ maxWidth: 359, width: "100%" }}>
              Login
            </GradientButton>
          </Group>
        </Link>
      )}
    </Box>
  );
};
