import { AspectRatio, Text } from "@mantine/core";
import { Container } from "components/common";
import { MainLayout } from "components/layouts";
import Image from "next/image";

export const ComingSoon = ({ children }: { children?: React.ReactNode }) => {
  return (
    <MainLayout>
      <Container
        sx={(theme) => ({
          height: 845,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            height: 600,
          },
        })}
        light
      >
        {children}
        <AspectRatio
          sx={(theme) => ({
            position: "relative",
            maxWidth: 415,
            width: "100%",
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              maxWidth: 300,
            },
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
              maxWidth: 200,
            },
          })}
          ratio={415 / 276}
          mb={12}
        >
          <Image
            src="/comingSoon.svg"
            layout="fill"
            objectFit="cover"
            alt="coming soon"
          />
        </AspectRatio>
        <Text
          color="#c4c4c4"
          weight={700}
          sx={(theme) => ({
            fontSize: "2rem",
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
              fontSize: "1.5rem",
            },
          })}
          mb={10}
        >
          Coming Soon
        </Text>
        <Text
          color="#c4c4c4"
          weight={600}
          size="lg"
          sx={(theme) => ({
            fontSize: theme.fontSizes.sm,
          })}
        >
          Halaman ini sedang dalam tahap pengembangan
        </Text>
      </Container>
    </MainLayout>
  );
};
