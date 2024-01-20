import { Stack } from "@mantine/core";
import { ArticleItem } from "components/article";
import { SectionContainer } from "components/common";
import { useGetActivitiesQuery } from "generated/graphql";
import { getActivitiesDefaultParams } from "utils/defaultParams";

export const ActivityLandingPage = () => {
  const { data, isFetching } = useGetActivitiesQuery({
    params: getActivitiesDefaultParams,
  });

  return (
    <SectionContainer
      title="KEGIATAN IKATA"
      noData={!data?.getActivities.data.length}
      seeAllHref="/kegiatan"
      loading={isFetching}
    >
      <Stack spacing={24}>
        {isFetching
          ? [...Array(6).fill(0)].map((_item, index) => (
              <ArticleItem loading key={index} data={{}} />
            ))
          : data?.getActivities.data.map((activity) => {
              return (
                <ArticleItem
                  data={activity}
                  key={activity.id}
                  href={`/kegiatan/${activity.id}`}
                />
              );
            })}
      </Stack>
    </SectionContainer>
  );
};
