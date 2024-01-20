import { Grid } from "@mantine/core";
import { MemberAvatar, NoData } from "components/common";
import { ManagementLayout } from "components/layouts";
import {
  api,
  useGetDewanPengawasQuery,
  ParamsInputType,
} from "generated/graphql";
import { GetServerSideProps } from "next";
import { wrapper } from "redux/store";
import Head from "head";

const defaultParams: ParamsInputType = {};

export default function DewanPengawas() {
  const { data } = useGetDewanPengawasQuery({
    params: defaultParams,
  });

  return (
    <ManagementLayout title="Dewan Pengawas">
      <Head page="dewanPengawas" />
      {!data ? (
        <NoData />
      ) : (
        <Grid>
          <Grid.Col sm={12} span={6}>
            <MemberAvatar
              data={data?.getDewanPengawas.data.find(
                (member) =>
                  member.jabatan?.name?.toLowerCase() === "ketua" ?? null
              )}
              withClassYear
              withTitle
            />
          </Grid.Col>
          {data?.getDewanPengawas.data
            .filter(
              (member) => member?.jabatan?.name?.toLowerCase() !== "ketua"
            )
            .map((member, index) => (
              <Grid.Col sm={3} span={6} key={index}>
                <MemberAvatar data={member} withEmail={false} />
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
      api.endpoints.GetDewanPengawas.initiate({
        params: defaultParams,
      })
    );

    return {
      props: {},
    };
  });
