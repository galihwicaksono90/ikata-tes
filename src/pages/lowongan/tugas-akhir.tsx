import { VacancyLayout } from "components/layouts";
import { Types, VacancyDescription, vacancyHrefs } from "components/vacancy";
import {
  OrderEnum,
  api,
  useGetFinalProjectDetailQuery,
  useGetFinalProjectsQuery,
  WhereOperatorEnum,
} from "generated/graphql";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { wrapper } from "redux/store";
import Head from "head";

const limit = 10;

interface LowonganPekerjaan {
  id?: string;
}

export default function LowonganPekerjaan({ id }) {
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [currentId, setCurrentId] = useState<string | null>(id);
  const router = useRouter();

  useEffect(() => {
    if (!id) return;
    router.push(`${vacancyHrefs[Types.FinalProject]}?id=${id}`, undefined, {
      shallow: true,
    });
  }, [id]);

  const { data: detailData, isFetching: detailDataFetching } =
    useGetFinalProjectDetailQuery({ id: currentId }, { skip: !currentId });

  const { data, isFetching } = useGetFinalProjectsQuery({
    params: {
      sort: {
        field: "updatedAt",
        order: OrderEnum.Desc,
      },
      pagination: {
        limit,
        offset: (page - 1) * limit,
      },
      where: [
        {
          field: "status",
          value: "published",
        },
        {
          field: "companyName",
          value: filter,
        },
      ],
      whereOperator: WhereOperatorEnum.And,
    },
  });

  return (
    <VacancyLayout
      limit={limit}
      title="Lowongan Tugas Akhir"
      placeholder="Cari Tugas Akhir"
      currentId={currentId}
      setCurrentId={setCurrentId}
      setFilter={setFilter}
      page={page}
      setPage={setPage}
      isFetching={isFetching}
      data={data?.getFinalProjects?.data}
      meta={data?.getFinalProjects?.meta}
      href={`${vacancyHrefs[Types.FinalProject]}`}
      infoMessage="tugas akhir"
    >
      <Head
        page="tugasAkhir"
        title={detailData?.getFinalProjectDetail?.companyName}
      />
      <VacancyDescription
        data={detailData?.getFinalProjectDetail}
        isFetching={detailDataFetching}
      />
    </VacancyLayout>
  );
}

export const getServerSideProps: GetServerSideProps<LowonganPekerjaan> =
  wrapper.getServerSideProps((store) => async ({ query }) => {
    try {
      const vacancies = await store.dispatch(
        api.endpoints.GetFinalProjects.initiate({
          params: {
            sort: {
              field: "updatedAt",
              order: OrderEnum.Desc,
            },
            pagination: {
              limit,
              offset: 0,
            },
            where: [
              {
                field: "status",
                value: "published",
              },
              {
                field: "companyName",
                value: "",
              },
            ],
            whereOperator: WhereOperatorEnum.And,
          },
        })
      );

      if (!!query?.id) {
        return {
          props: { id: query.id as string },
        };
      }

      const id =
        vacancies.data.getFinalProjects.data.length > 0
          ? vacancies.data.getFinalProjects.data[0].id
          : null;

      return {
        props: { id },
      };
    } catch (error) {
      return {
        props: { id: null },
      };
    }
  });
