import { ActivityLandingPage } from "components/activity";
import { AlumniLandingPage } from "components/alumni";
import { ArticleLandingPage } from "components/article";
import { AdBanner, BackToTop, HeroImage } from "components/common";
import { MainLayout } from "components/layouts";
import { MerchLandingPage } from "components/merch";
import { NewsLandingPage } from "components/news";
import { VacancyLandingPage } from "components/vacancy";
import { api, Category, OrderEnum, ComparatorEnum } from "generated/graphql";
import { GetStaticProps } from "next";
import { wrapper } from "redux/store";
import * as params from "utils/defaultParams";
import Head from "head";

export default function Home() {
  return (
    <MainLayout>
      <Head page="landingPage" />
      <HeroImage />
      <NewsLandingPage />
      <ActivityLandingPage />
      {/* <AdBanner src="/banner1.png" /> */}
      <ArticleLandingPage />
      <VacancyLandingPage />
      <AlumniLandingPage />
      <MerchLandingPage />
      {/* <AdBanner src="/banner2.png" /> */}
      <BackToTop />
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(
      api.endpoints.GetSliders.initiate({
        params: params.getSlidersDefaultParams,
      })
    );

    await store.dispatch(
      api.endpoints.GetNews.initiate({
        params: params.getNewsDefaultParams,
      })
    );

    await store.dispatch(
      api.endpoints.GetArticles.initiate({
        params: {
          pagination: {
            limit: 5,
          },
          where: [
            {
              field: "status",
              value: "published",
            },
            {
              field: "category",
              value: Category.Ilmiah,
              comparator: ComparatorEnum.Equal,
            },
          ],
        },
      })
    );

    await store.dispatch(
      api.endpoints.GetActivities.initiate({
        params: params.getActivitiesDefaultParams,
      })
    );

    await store.dispatch(
      api.endpoints.GetActivities.initiate({
        params: params.getActivitiesDefaultParams,
      })
    );

    await store.dispatch(
      api.endpoints.GetVacancies.initiate({
        params: {
          pagination: {
            limit: 6,
            offset: 0,
          },
          sort: {
            field: "publishedDate",
            order: OrderEnum.Asc,
          },
          where: [
            {
              field: "status",
              value: "Published",
            },
          ],
        },
      })
    );

    await store.dispatch(
      api.endpoints.GetAlumniBusinesses.initiate({
        params: params.getAlumniBusinessesDefaultParams,
      })
    );

    await store.dispatch(
      api.endpoints.GetMerchandises.initiate({
        params: params.getMerchandisesDefaultParams,
      })
    );

    return {
      props: {},
      revalidate: 30,
    };
  }
);
