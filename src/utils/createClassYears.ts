export const createClassYears = () => {
  const fromYear = 1960;
  const untilYear = new Date().getFullYear() - 4;
  const years: number[] = [];
  for (let i = fromYear; i <= untilYear; i++) {
    years.push(i);
  }
  return years;
};

export const createClassYearsAsString = () => {
  const fromYear = 1960;
  const untilYear = new Date().getFullYear() - 4;
  const years: string[] = [];
  for (let i = fromYear; i <= untilYear; i++) {
    years.push(i.toString());
  }
  return years;
};
