import { AlumniDescription } from "components/alumni";
import { VacancyLayout } from "components/layouts";
import {
  AlumniBusinessesType,
  api,
  useGetAlumniBusinessDetailQuery,
  useGetAlumniBusinessesQuery,
  OrderEnum,
  WhereOperatorEnum,
} from "generated/graphql";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { wrapper } from "redux/store";
import { capitalize } from "utils";
import Head from "head";

const limit = 10;

interface BisnisAlumniProps {
  id?: string;
}

export default function BisnisAlumni({ id }: BisnisAlumniProps) {
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [currentId, setCurrentId] = useState<string | null>(id);
  const router = useRouter();

  useEffect(() => {
    if (!id) return;
    router.push(`/bisnis-alumni?id=${id}`, undefined, {
      shallow: true,
    });
  }, [id]);

  const { data: detailData, isFetching: detailDataFetching } =
    useGetAlumniBusinessDetailQuery({ id: currentId }, { skip: !currentId });

  const { data, isFetching } = useGetAlumniBusinessesQuery({
    params: {
      sort: {
        field: "updatedAt",
        order: OrderEnum.Desc,
      },
      pagination: {
        limit,
        offset: (page - 1) * limit,
      },
      whereOperator: WhereOperatorEnum.And,
      where: [
        {
          field: "status",
          value: "published",
        },
        {
          field: "title",
          value: filter,
        },
      ],
    },
  });

  const convertData = (data: AlumniBusinessesType[]) => {
    return data?.map((d) => ({
      companyLogoPath: d.thumbnailPath,
      companyName: d.title,
      amount: d.ownerName,
      publishedDate: d.publishedDate,
      companyCity: capitalize(d?.provinsi?.nama_provinsi.toLowerCase()),
      id: d.id,
    }));
  };

  return (
    <VacancyLayout
      limit={limit}
      title="Bisnis Alumni"
      currentId={currentId}
      setCurrentId={setCurrentId}
      setFilter={setFilter}
      page={page}
      setPage={setPage}
      isFetching={isFetching}
      data={convertData(data?.getAlumniBusinesses?.data) as any}
      meta={data?.getAlumniBusinesses?.meta}
      href="/bisnis-alumni"
      hideLowongan
      placeholder="Cari Bisnis"
    >
      <Head page="bisnis" title={detailData?.getAlumniBusinessDetail?.title} />
      <AlumniDescription
        loading={detailDataFetching}
        data={detailData?.getAlumniBusinessDetail}
      />
    </VacancyLayout>
  );
}

export const getServerSideProps: GetServerSideProps<BisnisAlumniProps> =
  wrapper.getServerSideProps((store) => async ({ query }) => {
    try {
      const businesses = await store.dispatch(
        api.endpoints.GetAlumniBusinesses.initiate({
          params: {
            sort: {
              field: "updatedAt",
              order: OrderEnum.Desc,
            },
            pagination: {
              limit,
              offset: 0,
            },
            whereOperator: WhereOperatorEnum.And,
            where: [
              {
                field: "status",
                value: "published",
              },
              {
                field: "title",
                value: "",
              },
            ],
          },
        })
      );

      if (!!query?.id) {
        return {
          props: { id: query.id as string },
        };
      }
      return {
        props: {
          id:
            businesses.data.getAlumniBusinesses.data.length > 0
              ? businesses.data.getAlumniBusinesses.data[0].id
              : null,
        },
      };
    } catch (error) {
      return {
        props: { id: null },
      };
    }
  });
