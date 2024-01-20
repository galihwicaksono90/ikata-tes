import {
  AspectRatio,
  Box,
  Burger,
  Group,
  MediaQuery,
  Stack,
  Text,
} from "@mantine/core";
import { Container, UserAvatar } from "components/common";
import { MainLayoutProps } from "components/layouts";
import Image from "next/image";
import { NextLink } from "@mantine/next";
import { useAppSelector } from "redux/hooks";

export function HeaderTop({ opened, setOpened }: MainLayoutProps) {
  const data = useAppSelector((state) => state.general.footerData);

  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        background: theme.colors.dark[8],
        color: theme.white,
      })}
    >
      <Container
        style={{
          height: "102px",
        }}
        noPadding
      >
        <Group
          position="apart"
          align="center"
          style={{ height: "100%" }}
          noWrap
        >
          <Group
            noWrap
            align="center"
            sx={(theme) => ({
              gap: 45,
              [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                gap: 15,
              },
            })}
          >
            {!data ? (
              <div></div>
            ) : (
              <>
                <NextLink href="/">
                  <AspectRatio
                    ratio={1}
                    sx={(theme) => ({
                      maxWidth: 72,
                      position: "relative",
                      width: 72,
                      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                        width: 50,
                      },
                    })}
                  >
                    <Image alt="" src={data.logo} layout="fill" />
                  </AspectRatio>
                </NextLink>
                <Stack spacing={5}>
                  <Text
                    size="xl"
                    weight="bold"
                    sx={(theme) => ({
                      lineHeight: "20px",
                      textOverflow: "fade",
                      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                        fontSize: 12,
                      },
                    })}
                  >
                    {data.appName}
                  </Text>
                  <Text
                    sx={(theme) => ({
                      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                        fontSize: 10,
                      },
                    })}
                  >
                    UPN &quot;VETERAN&quot; YOGYAKARTA
                  </Text>
                </Stack>
              </>
            )}
          </Group>
          <UserAvatar />
          <MediaQuery largerThan="md" styles={{ display: "none" }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              color="white"
            />
          </MediaQuery>
        </Group>
      </Container>
    </Box>
  );
}
