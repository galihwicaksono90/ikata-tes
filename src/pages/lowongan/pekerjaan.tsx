import { VacancyLayout } from "components/layouts";
import { Types, VacancyDescription, vacancyHrefs } from "components/vacancy";
import {
  OrderEnum,
  api,
  useGetVacanciesQuery,
  useGetVacancyDetailQuery,
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
    router.push(`${vacancyHrefs[Types.Vacancy]}?id=${id}`, undefined, {
      shallow: true,
    });
  }, [id]);

  const { data: detailData, isFetching: detailDataFetching } =
    useGetVacancyDetailQuery({ id: currentId }, { skip: !currentId });

  const { data, isFetching } = useGetVacanciesQuery({
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
      meta={data?.getVacancies.meta}
      limit={limit}
      title="Lowongan Pekerjaan"
      placeholder="Cari Perushaaan / Instantsi"
      currentId={currentId}
      setCurrentId={setCurrentId}
      setFilter={setFilter}
      page={page}
      setPage={setPage}
      isFetching={isFetching}
      data={data?.getVacancies.data}
      href={`${vacancyHrefs[Types.Vacancy]}`}
      infoMessage="pekerjaan perusahaan"
    >
      <Head
        page="pekerjaan"
        title={detailData?.getVacancyDetail?.companyName}
      />
      <VacancyDescription
        data={detailData?.getVacancyDetail}
        isFetching={detailDataFetching}
      />
    </VacancyLayout>
  );
}

export const getServerSideProps: GetServerSideProps<LowonganPekerjaan> =
  wrapper.getServerSideProps((store) => async ({ query }) => {
    try {
      const vacancies = await store.dispatch(
        api.endpoints.GetVacancies.initiate({
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
        vacancies?.data?.getVacancies?.data?.length > 0
          ? vacancies.data.getVacancies.data[0].id
          : null;

      return {
        props: { id },
      };
    } catch (error) {
      console.log({ error });
      return {
        props: { id: null },
      };
    }
  });
