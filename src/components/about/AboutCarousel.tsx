import { Stack, Title, Box } from "@mantine/core";
import { TestimonyCard } from "components/about";
import {
  OrderEnum,
  useGetKetuaIkataQuery,
  useGetSambutanKetuaQuery,
} from "generated/graphql";

export const AboutCarousel = () => {
  const { data, isFetching } = useGetSambutanKetuaQuery();

  return (
    <Stack>
      <Box sx={{ textAlign: "center", marginBottom: 40 }}>
        <Title mb={14}>Ketua IKATA</Title>
      </Box>
      {isFetching ? (
        <TestimonyCard loading />
      ) : (
        <TestimonyCard data={data?.getSambutanKetua ?? null} />
      )}
    </Stack>
  );
};
