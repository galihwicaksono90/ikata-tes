import {
  Pagination as BasePagination,
  PaginationProps as BasePaginationProps,
} from "@mantine/core";

interface PaginationProps extends Omit<BasePaginationProps, "total"> {
  light?: boolean;
  totalData: number;
  perPage: number;
}

export const Pagination = ({
  light,
  totalData,
  perPage,
  ...rest
}: PaginationProps) => {
  return (
    <BasePagination
      total={Math.ceil(totalData / perPage)}
      styles={(theme) => ({
        item: {
          borderRadius: theme.radius.xl,
          fontWeight: 600,
          fontSize: "0.8125rem",
          backgroundColor: light ? theme.white : theme.colors.dark[8],
          color: light ? "#c4c4c4" : theme.colors.dark[2],
          border: light ? "1px solid #eaeaea" : "0px",
          width: 27,
        },
        active: {
          color: theme.colors.dark[8],
        },
      })}
      {...rest}
    />
  );
};
