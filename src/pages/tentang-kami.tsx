import { Tabs } from "@mantine/core";
import { AboutCarousel, AboutDescription } from "components/about";
import { Container } from "components/common";
import { MainLayout } from "components/layouts";
import {
  api,
  OrderEnum,
  useGetTentangJurusanQuery,
  useGetTentangKamiQuery,
} from "generated/graphql";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { wrapper } from "redux/store";
import { useStyles } from "theme";
import Head from "head";

interface AboutProps {
  initialTab: number;
}

const tabObject = ["ikata", "jurusan", "ketua-ikata"];

export default function AboutPage({ initialTab }: AboutProps) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const { classes } = useStyles();
  const router = useRouter();

  const { data: tentangKami, isFetching: tentangKamiLoading } =
    useGetTentangKamiQuery();

  const { data: tentangJurusan, isFetching: tentangJurusanLoading } =
    useGetTentangJurusanQuery();

  useEffect(() => {
    if (!router.isReady) return;
    if (!!router.query?.tab) {
      const tab = tabObject.findIndex((t) => t === router.query.tab);
      if (tab < 0) return;
      setActiveTab(tab);
    }
  }, [router.isReady, router.query.tab]);

  useEffect(() => {
    const query = router.query;
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (!router.isReady && !!router.query?.tab) return;

    const tab = tabObject.findIndex((t) => t === router.query.tab);

    if (tab < 0) return;

    setActiveTab(tab);
  }, [router.query.tab, router.isReady]);

  const onTabChange = (active: number, tabKey: string) => {
    router.push(`/tentang-kami?tab=${tabKey}`, undefined, { shallow: true });
    setActiveTab(active);
  };

  return (
    <MainLayout>
      <Head page="about" />
      <Container pt={40}>
        <Tabs
          active={activeTab}
          onTabChange={onTabChange}
          variant="pills"
          tabPadding={40}
          className={classes.tab}
          styles={(theme) => ({
            tabLabel: {
              fontSize: theme.fontSizes.md,
            },
            tabsList: {
              [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                flexDirection: "column",
                alignItems: "stretch",
              },
            },
            tabControl: {
              [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                maxHeight: 40,
              },
            },
          })}
        >
          <Tabs.Tab label="Tentang IKATA" tabKey="ikata">
            <AboutDescription
              title="Tentang IKATA"
              data={tentangKami?.getTentangKami}
              loading={tentangKamiLoading}
            />
          </Tabs.Tab>
          <Tabs.Tab
            label="Tentang Jurusan Teknik Pertambangan"
            tabKey="jurusan"
          >
            <AboutDescription
              title={`Tentang Jurusan Teknik Pertambangan UPN "Veteran" Yogyakarta`}
              data={tentangJurusan?.getTentangJurusan}
              loading={tentangJurusanLoading}
            />
          </Tabs.Tab>
          <Tabs.Tab label="Ketua Ikata" tabKey="ketua-ikata">
            <AboutCarousel />
          </Tabs.Tab>
        </Tabs>
      </Container>
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    let initialTab = 0;

    await store.dispatch(api.endpoints.GetTentangKami.initiate());
    await store.dispatch(api.endpoints.GetTentangJurusan.initiate());
    await store.dispatch(
      api.endpoints.GetKetuaIkata.initiate({
        params: {
          sort: {
            field: "sort",
            order: OrderEnum.Asc,
          },
        },
      })
    );

    return {
      props: {
        initialTab,
      },
      revalidate: 30,
    };
  }
);
