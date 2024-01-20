import { createClassYears } from "utils/createClassYears";

export function divideArrayIntoChunks<T>(array: T[], chunkSize: number) {
  const newArray: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    newArray.push(chunk);
  }

  return newArray;
}

export const generateEightYears = () => {
  const years: number[] = createClassYears().reverse();
  const dividedYears = divideArrayIntoChunks(years, 8);

  const arr: {
    value: string;
    label: string;
    startYear: number;
    endYear: number;
  }[] = [];

  for (let i = 0; i < dividedYears.length; i++) {
    arr.push({
      value: i.toString(),
      startYear: dividedYears[i][dividedYears[i].length - 1],
      endYear: dividedYears[i][0],
      label: `${dividedYears[i][
        dividedYears[i].length - 1
      ].toString()} - ${dividedYears[i][0].toString()}`,
    });
  }

  return arr;
};
