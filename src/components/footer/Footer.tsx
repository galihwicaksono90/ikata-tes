import {
  Box,
  Button,
  Footer as BaseFooter,
  Group,
  Text,
  Stack,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconMail,
  IconBrandWhatsapp,
} from "@tabler/icons";
import { Container } from "components/common";
import Image from "next/image";
import { useGetFooterQuery } from "generated/graphql";
import { useAppSelector } from "redux/hooks";
import Link from "next/link";

export function Footer() {
  const data = useAppSelector((state) => state.general.footerData);
  const { isFetching } = useGetFooterQuery(null, {
    skip: !!data,
  });

  if (isFetching || !data) {
    return (
      <BaseFooter
        height="317px"
        sx={(theme) => ({
          backgroundColor: theme.colors.dark[8],
          display: "flex",
          flexDirection: "column",
        })}
      >
        <Box sx={{ height: 46, background: "#262626" }} mt="auto"></Box>
      </BaseFooter>
    );
  }

  return (
    <BaseFooter
      height="auto"
      sx={(theme) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: theme.colors.dark[8],
        color: theme.white,
      })}
    >
      <Container sx={{ width: "100%" }} pt={40} pb={30}>
        <Group
          align="flex-start"
          position="apart"
          //mb={60}
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
              flexDirection: "column",
              gap: 80,
              alignItems: "center",
            },
          })}
        >
          <div>
            <Group
              spacing={30}
              align="flex-start"
              sx={(theme) => ({
                [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                  justifyContent: "center",
                  textAlign: "center",
                },
              })}
              mb={20}
            >
              <NextLink href="/">
                <Box sx={{ position: "relative", height: 99, width: 99 }}>
                  <Image src={data.logo} layout="fill" alt="" />
                </Box>
              </NextLink>
              <Box>
                <Text sx={{ fontSize: "1.25rem" }} weight={500} mb={14.85}>
                  {data.name}
                </Text>
                <Group
                  spacing={18.85}
                  sx={(theme) => ({
                    width: "100%",
                    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                      justifyContent: "center",
                    },
                  })}
                >
                  <Box
                    href={data?.youtubeUrl}
                    component="a"
                    target="_blank"
                    sx={{ color: "white" }}
                  >
                    <IconBrandYoutube />
                  </Box>
                  <Box
                    href={data?.instagramUrl}
                    component="a"
                    target="_blank"
                    sx={{ color: "white" }}
                  >
                    <IconBrandInstagram />
                  </Box>
                </Group>
              </Box>
            </Group>
            <Text
              sx={(theme) => ({
                maxWidth: 480,
                [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                  textAlign: "center",
                  maxWidth: "100%",
                },
              })}
            >
              {data?.address}
            </Text>
          </div>
          <Group
            direction="column"
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              },
              [`@media (max-width: 432px)`]: {
                flexDirection: "column",
                alignItems: "center",
              },
            })}
          >
            <Stack>
              <Text weight={700}>KONTAK</Text>
              <Group spacing={17.5}>
                <IconMail />
                <Text size="sm" weight={400}>
                  {data?.emailAddress}
                </Text>
              </Group>
              <Group spacing={17.5} mb={30}>
                <IconBrandWhatsapp />
                <Text size="sm" weight={400}>
                  {data?.phoneNumber}
                </Text>
              </Group>
            </Stack>
            <Link href="/kontak-kami" passHref>
              <Button
                variant="outline"
                size="lg"
                sx={{ width: 215 }}
                component="a"
              >
                Kontak kami
              </Button>
            </Link>
          </Group>
        </Group>
      </Container>
      <Text
        sx={(theme) => ({
          width: "100%",
          textAlign: "center",
          height: 46,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: theme.fontSizes.sm,
          fontWeight: 400,
          background: theme.colors.dark[7],
        })}
      >
        &copy; {new Date().getFullYear()} Copyright
      </Text>
    </BaseFooter>
  );
}
