import { SectionContainer, TextLink } from "components/common";
import { MerchCarousel } from "components/merch";
import { useGetMerchandisesQuery } from "generated/graphql";
import { getMerchandisesDefaultParams } from "utils/defaultParams";

export const MerchLandingPage = () => {
  const { data, isFetching } = useGetMerchandisesQuery({
    params: getMerchandisesDefaultParams,
  });
  return (
    <SectionContainer
      title="MERCHANDISE"
      noData={!isFetching && !data?.getMerchandises.data.length}
      rightItem={
        <TextLink href="/merchandise" weight={600}>
          Lihat Semua
        </TextLink>
      }
      lightBackground
      containerSize={1315}
    >
      <MerchCarousel data={data?.getMerchandises.data} loading={isFetching} />
    </SectionContainer>
  );
};
