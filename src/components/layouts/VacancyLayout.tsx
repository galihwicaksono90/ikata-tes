import {
  Box,
  Divider,
  Group,
  ScrollArea,
  Stack,
  UnstyledButton,
  Text,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons";
import {
  Container,
  NoData,
  Pagination,
  SearchInputSmall,
} from "components/common";
import { MainLayout } from "components/layouts";
import { VacancyListItem, VacancySearchbar } from "components/vacancy";
import {
  MetadataType,
  ScholarshipsType,
  FinalProjectsType,
  VacanciesType,
} from "generated/graphql";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useStyles } from "theme";

interface Props {
  meta: MetadataType;
  initialId?: string;
  limit: number;
  title: string;
  placeholder?: string;
  data?: ScholarshipsType[] | FinalProjectsType[] | VacanciesType[];
  isFetching?: boolean;
  setFilter?: (arg: string) => void;
  page: number;
  setPage: (arg: number) => void;
  href?: string;
  currentId?: string | null;
  setCurrentId: (arg: string | null) => void;
  children?: React.ReactNode;
  hideLowongan?: boolean;
  infoMessage?: string;
}

export function VacancyLayout({
  hideLowongan,
  children,
  limit,
  title,
  initialId = null,
  placeholder = "Cari Lowongan",
  data,
  setFilter,
  page,
  setPage,
  isFetching,
  currentId,
  setCurrentId,
  href,
  meta,
  infoMessage,
}: Props) {
  const { classes } = useStyles();
  const [visible, setVisible] = useState(!initialId);
  const router = useRouter();

  const onSelect = useCallback(
    (id: string) => {
      setVisible(false);
      setCurrentId(id);
      router.push(href + `?id=${id}`, undefined, { shallow: true });
    },
    [setVisible, setCurrentId, router, href]
  );

  const onSetFilter = useCallback(
    (value: string) => {
      setPage(1);
      setFilter(value);
    },
    [setPage, setFilter]
  );

  return (
    <MainLayout>
      {!data ? (
        <Box sx={(theme) => ({ background: "white" })}>
          <NoData light />
        </Box>
      ) : (
        <Box sx={(theme) => ({ width: "100%", background: theme.white })}>
          <VacancySearchbar
            title={title}
            placeholder={placeholder}
            infoMessage={infoMessage}
          />
          <Container pb={80}>
            <Group noWrap align="flex-start" sx={{ position: "relative" }}>
              <Stack
                sx={(theme) => ({
                  flex: "0 0 456px",
                  height: "100vh",
                  position: "sticky",
                  top: 0,
                  padding: "10px 0px",

                  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                    flex: "0 0 300px",
                  },
                  [`@media (max-width: 1000px)`]: {
                    flex: "0 0 100%",
                    display: visible ? "flex" : "none",
                  },
                })}
                spacing={0}
              >
                <SearchInputSmall
                  placeholder={placeholder}
                  mb={30}
                  onSubmit={(value) => onSetFilter(value)}
                />
                <ScrollArea
                  classNames={{
                    scrollbar: classes.scrollbar,
                    thumb: classes.thumb,
                  }}
                  sx={{ height: "inherit" }}
                  mb={20}
                >
                  {isFetching
                    ? [...Array(6).fill(0)].map((_item, index) => (
                      <VacancyListItem loading key={index} />
                    ))
                    : data.map((d) => (
                      <VacancyListItem
                        data={d}
                        onClick={() => onSelect(d.id)}
                        active={currentId === d.id}
                        key={d.id}
                        hideLowongan={hideLowongan}
                      />
                    ))}
                </ScrollArea>

                <Pagination
                  totalData={meta?.totalCount}
                  perPage={limit}
                  position="center"
                  light
                  page={page}
                  onChange={setPage}
                />
              </Stack>
              <Divider
                orientation={"vertical"}
                sx={{
                  height: "auto",
                  [`@media (max-width: 1000px)`]: {
                    display: "none",
                  },
                }}
                color="#eaeaea"
              />
              <Box
                sx={(theme) => ({
                  width: "60%",
                  paddingTop: 20,
                  [`@media (max-width: 1000px)`]: {
                    width: "100%",
                    display: visible ? "none" : "block",
                  },
                })}
              >
                <UnstyledButton
                  onClick={() => setVisible(true)}
                  sx={(theme) => ({
                    display: "none",
                    "&:hover": {
                      background: theme.white,
                    },
                    [`@media (max-width: 1000px)`]: {
                      display: "block",
                    },
                  })}
                  mb={30}
                >
                  <Group align="center">
                    <IconArrowLeft color="#1d1d1d" size={20} />
                    <Text color="dark" weight={600}>
                      Kembali
                    </Text>
                  </Group>
                </UnstyledButton>
                {children}
              </Box>
            </Group>
          </Container>
        </Box>
      )}
    </MainLayout>
  );
}
