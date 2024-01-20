import { Box } from "@mantine/core";
import { AlumniCard } from "components/alumni";
import { SectionContainer, TextLink } from "components/common";
import { useGetAlumniBusinessesQuery } from "generated/graphql";
import { useMemo } from "react";
import { getAlumniBusinessesDefaultParams } from "utils/defaultParams";

export function AlumniLandingPage() {
  const { data, isFetching } = useGetAlumniBusinessesQuery({
    params: getAlumniBusinessesDefaultParams,
  });

  const gridDictionary = useMemo(() => ["one", "two", "three", "four"], []);
  const gridTemplates = useMemo(
    () => ({
      lg: [
        '"one one" "one one"',
        '"one one two two" "one one two two"',
        '"one one two two" "one one three three"',
        '"one one two two" "one one three four"',
      ],
      md: [
        '"one one"',
        '"one one two two"',
        '"one one two two" "one one three three"',
        '"one one two two" "one one three three" "one one four four"',
      ],
      sm: [
        '"one one"',
        '"one one" "one one" "two two" "two two"',
        '"one one" "one one" "two two" "three three"',
        '"one one" "one one" "two two" "three four"',
      ],
      xs: [
        '"one one"',
        '"one one" "one one" "two two" "two two"',
        '"one one" "one one" "two two" "three three"',
        '"one one" "one one" "two two" "three three" "four four"',
      ],
    }),
    []
  );

  return (
    <SectionContainer
      title="BISNIS ALUMNI TAMBANG"
      noData={!data?.getAlumniBusinesses.data.length}
      loading={isFetching}
      rightItem={
        <TextLink href="/bisnis-alumni" weight={600}>
          Lihat Semua
        </TextLink>
      }
      lightBackground
    >
      <Box
        sx={(theme) => ({
          display: "grid",
          height: 612,
          gridTemplateAreas:
            gridTemplates["lg"][data?.getAlumniBusinesses.data.length - 1],
          [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            gridTemplateAreas:
              gridTemplates["md"][data?.getAlumniBusinesses.data.length - 1],
          },
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            gridTemplateAreas:
              gridTemplates["sm"][data?.getAlumniBusinesses.data.length - 1],
            height: "850px",
          },
          [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
            gridTemplateAreas:
              gridTemplates["xs"][data?.getAlumniBusinesses.data.length - 1],
          },
        })}
      >
        {isFetching
          ? [...Array(4).fill(0)].map((_item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    gridArea: gridDictionary[index],
                    background: "tomato",
                  }}
                >
                  <AlumniCard loading />
                </Box>
              );
            })
          : data?.getAlumniBusinesses.data.map((alumni, index) => (
              <AlumniCard
                data={alumni}
                key={alumni.id}
                style={{
                  gridArea: gridDictionary[index],
                }}
                href={`/bisnis-alumni?id=${alumni.id}`}
              />
            ))}
      </Box>
    </SectionContainer>
  );
}
