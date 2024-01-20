import { Grid } from "@mantine/core";
import { MemberAvatar, NoData } from "components/common";
import { ManagementLayout } from "components/layouts";
import {
  api,
  ParamsInputType,
  useGetPengurusHarianQuery,
} from "generated/graphql";
import { GetServerSideProps } from "next";
import { wrapper } from "redux/store";
import Head from "head";

const defaultParams: ParamsInputType = {};

export default function PengurusPusat() {
  const { data } = useGetPengurusHarianQuery({
    params: defaultParams,
  });

  return (
    <ManagementLayout title="Pengurus Pusat">
      <Head page="pengurusPusat" />
      {!data ? (
        <NoData />
      ) : (
        <Grid>
          <Grid.Col sm={12} span={6}>
            <MemberAvatar
              data={data?.getPengurusHarian.data.find(
                (member) => member?.jabatan?.name?.toLowerCase() === "ketua"
              )}
              withClassYear
              withTitle
            />
          </Grid.Col>
          {data?.getPengurusHarian.data
            .filter(
              (member) => member?.jabatan?.name?.toLowerCase() !== "ketua"
            )
            .map((member, index) => (
              <Grid.Col sm={3} span={6} key={index}>
                <MemberAvatar data={member} withClassYear withTitle />
              </Grid.Col>
            ))}
        </Grid>
      )}
    </ManagementLayout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    await store.dispatch(
      api.endpoints.GetPengurusHarian.initiate({
        params: defaultParams,
      })
    );

    return {
      props: {},
    };
  });
