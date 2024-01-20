import { Box } from "@mantine/core";
import { AvatarGrid, Pagination } from "components/common";
import { useMemo } from "react";
import { divideArrayIntoChunks } from "utils";

interface AvatarPaginationProps {
  data?: any[];
  loading?: boolean;
  perPage?: number;
  page: number;
  setPage: (page: number) => void;
}

export const AvatarPagination = ({
  data,
  loading,
  perPage = 6,
  page,
  setPage,
}: AvatarPaginationProps) => {
  const getData = useMemo(
    () =>
      <T,>(data: T[]) => {
        if (!data?.length) return [];
        return divideArrayIntoChunks(data, perPage);
      },
    [perPage]
  );

  return (
    <Box>
      <AvatarGrid data={getData(data)[page - 1]} loading={loading} />
      <Pagination
        totalData={data?.length}
        perPage={6}
        page={page}
        onChange={(p) => {
          setPage(p);
        }}
        position="center"
        //mb={30}
        mt={getData(data)[page - 1]?.length < 4 ? 370 : 20}
      />
    </Box>
  );
};
