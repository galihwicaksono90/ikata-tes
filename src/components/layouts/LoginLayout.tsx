import {
  Box,
  BoxProps,
  Container,
  Paper,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import { IconArrowLeft } from "@tabler/icons";
import Image from "next/image";

interface LoginLayoutProps extends BoxProps<"div"> {
  containerSize: number;
  headerTitle: string;
  center?: boolean;
}

export function LoginLayout({
  containerSize,
  headerTitle,
  children,
  center,
}: LoginLayoutProps) {
  return (
    <Box
      sx={{
        height: "100vh",
        minHeight: "100vh",
        maxWidth: "100vw",
        position: "relative",
        display: "flex",
        alignItems: center ? "center" : null,
        //overflow: "hidden",
        paddingBottom: 40,
        paddingTop: 30,
      }}
    >
      <Box
        style={{
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          position: "fixed",
          filter: "blur(8px)",
          background: `url("/loginBackground.svg") no-repeat`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "rgb(0,0,0,0.5)",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2,
          }}
        />
        {/* <Image
          priority
          alt="login-gackground"
          src="/loginBackground.svg"
          layout="fill"
          objectFit="cover"
        /> */}
      </Box>

      <Container
        style={{ zIndex: 2, width: "100%", height: "min-content" }}
        size={containerSize}
        py={40}
      >
        <Paper
          sx={{
            background: "rgba(0,0,0,0.45)",
            padding: "29px 24px 41px 24px",
            width: "100%",
          }}
        >
          <Box sx={{ marginBottom: 60, position: "relative", width: "100%" }}>
            <NextLink href="/">
              <UnstyledButton
                sx={(theme) => ({
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  "&:hover": {
                    color: theme.colors.orange[0],
                  },
                })}
              >
                <IconArrowLeft />
              </UnstyledButton>
            </NextLink>
            <Text align="center" sx={{ fontSize: "1.375rem", fontWeight: 600 }}>
              {headerTitle}
            </Text>
          </Box>
          {children}
        </Paper>
      </Container>
    </Box>
  );
}
