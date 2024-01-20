import { Button, Group } from "@mantine/core";
import { SectionContainer } from "components/common";
import { VacancyBoxes } from "components/vacancy";
import { useState } from "react";
import { useStyles } from "theme";

export enum Types {
  Vacancy = "vacancy",
  Scholarship = "scholarship",
  FinalProject = "finalProject",
}

export const vacancyHrefs: { [key in Types] } = {
  finalProject: "/lowongan/tugas-akhir",
  vacancy: "/lowongan/pekerjaan",
  scholarship: "/lowongan/beasiswa",
};

export function VacancyLandingPage() {
  const { classes } = useStyles();
  const [currentType, setCurrentType] = useState<Types>(Types.Vacancy);

  return (
    <SectionContainer
      title="LOWONGAN"
      seeAllHref={vacancyHrefs[currentType]}
      rightItem={
        <Group spacing={20}>
          <Button
            variant={currentType === Types.Vacancy ? "filled" : "outline"}
            onClick={() => setCurrentType(Types.Vacancy)}
            className={classes.pillButton}
          >
            Pekerjaaan
          </Button>
          <Button
            variant={currentType === Types.FinalProject ? "filled" : "outline"}
            onClick={() => setCurrentType(Types.FinalProject)}
            className={classes.pillButton}
          >
            Tugas Akhir
          </Button>
          <Button
            variant={currentType === Types.Scholarship ? "filled" : "outline"}
            onClick={() => setCurrentType(Types.Scholarship)}
            className={classes.pillButton}
          >
            Beasiswa
          </Button>
        </Group>
      }
    >
      <VacancyBoxes currentType={currentType} />
    </SectionContainer>
  );
}
