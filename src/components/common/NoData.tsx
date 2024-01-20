import { Box, AspectRatio, Text } from "@mantine/core";
import Image from "next/image";

interface NoDataProps {
  light?: boolean;
  title?: string;
}

export const NoData = ({
  light,
  title = "Belum ada data ditampilkan",
}: NoDataProps) => {
  return (
    <Box sx={{ width: "100%" }} py={40} px={40}>
      <AspectRatio
        ratio={467 / 456}
        sx={(theme) => ({
          position: "relative",
          maxWidth: 467,
          width: "100%",
          display: "flex",
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            maxWidth: 300,
          },
        })}
        mx="auto"
      >
        <Image src="/noData.svg" layout="fill" alt="" />
      </AspectRatio>
      <Text
        mt={80}
        align="center"
        size="xl"
        weight={500}
        sx={(theme) => ({
          color: light ? theme.colors.dark[8] : theme.white,
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: theme.fontSizes.sm,
          },
        })}
      >
        {title}
      </Text>
    </Box>
  );
};
