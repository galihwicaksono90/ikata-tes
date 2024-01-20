import { MainLayout } from "components/layouts";
import { Container } from "components/common";
import { Text } from "@mantine/core";
import "@fontsource/playfair-display/500.css";

interface ArticleLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const ArticleLayout = ({ children, title }: ArticleLayoutProps) => {
  return (
    <MainLayout>
      <Container
        primary
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            paddingTop: "5rem",
            paddingBottom: "5rem",
          },
          [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            paddingTop: "4rem",
            paddingBottom: "4rem",
          },
        })}
      >
        <Text
          sx={(theme) => ({
            fontFamily: "Playfair Display, serif",
            fontSize: "4.6875rem",
            lineHeight: "136px",

            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              fontSize: "3.3rem",
              lineHeight: "100px",
            },
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
              fontSize: "2.5rem",
              lineHeight: "0px",
            },
          })}
          weight={500}
        >
          {title}
        </Text>
      </Container>
      <Container>{children}</Container>
    </MainLayout>
  );
};
