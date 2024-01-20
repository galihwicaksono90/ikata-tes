import { Container, Group, Text, Stack, Box } from "@mantine/core";
import { useGetFooterQuery } from "generated/graphql";
import { InfoRibbon } from "./InfoRibbon";

interface VacancySearchbarProps {
  title: string;
  placeholder?: string;
  infoMessage?: string;
}

export const VacancySearchbar = ({
  title,
  infoMessage,
}: VacancySearchbarProps) => {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        boxShadow: theme.shadows.md,
      })}
    >
      <Container size={1128} sx={{ height: 90, color: "dark", zIndex: 200 }}>
        <Group
          position="apart"
          align="center"
          sx={{
            height: "100%",
            color: "dark",
            width: "100%",
          }}
        >
          <Text color="dark" weight="bold" sx={{ fontSize: 22, width: "100%" }}>
            {title}
          </Text>
        </Group>
      </Container>
      {!!infoMessage ? <InfoRibbon message={infoMessage} /> : null}
    </Box>
  );
};
