import { VacancyLayout } from "components/layouts";
import { Types, VacancyDescription, vacancyHrefs } from "components/vacancy";
import {
  OrderEnum,
  api,
  useGetScholarshipDetailQuery,
  useGetScholarshipsQuery,
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
    router.push(`${vacancyHrefs[Types.Scholarship]}?id=${id}`, undefined, {
      shallow: true,
    });
  }, [id]);

  const { data: detailData, isFetching: detailDataFetching } =
    useGetScholarshipDetailQuery({ id: currentId }, { skip: !currentId });

  const { data, isFetching } = useGetScholarshipsQuery({
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
      title="Lowongan Beasiswa"
      placeholder="Cari Beasiswa"
      currentId={currentId}
      setCurrentId={setCurrentId}
      setFilter={setFilter}
      page={page}
      setPage={setPage}
      isFetching={isFetching}
      data={data?.getScholarships.data}
      meta={data?.getScholarships.meta}
      href={`${vacancyHrefs[Types.Scholarship]}`}
      infoMessage="beasiswa"
    >
      <Head
        page="beasiswa"
        title={detailData?.getScholarshipDetail?.companyName ?? ""}
      />
      <VacancyDescription
        data={detailData?.getScholarshipDetail}
        isFetching={detailDataFetching}
      />
    </VacancyLayout>
  );
}

export const getServerSideProps: GetServerSideProps<LowonganPekerjaan> =
  wrapper.getServerSideProps((store) => async ({ query }) => {
    try {
      const scholarships = await store.dispatch(
        api.endpoints.GetScholarships.initiate({
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
        scholarships.data.getScholarships.data.length > 0
          ? scholarships.data.getScholarships.data[0].id
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
