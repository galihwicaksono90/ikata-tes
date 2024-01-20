import { Button, Group, Stack } from "@mantine/core";
import { NoData, Pagination } from "components/common";
import { ArticleLayout } from "components/layouts";
import {
  api,
  Category,
  ComparatorEnum,
  OrderEnum,
  useGetArticlesQuery,
  WhereOperatorEnum,
} from "generated/graphql";
import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import { wrapper } from "redux/store";
import { useStyles } from "theme";
import { ArticleMainListItem } from "components/article";
import { useRouter } from "next/router";
import Head from "head";

const categories = [
  {
    title: "Artikel Ilmiah",
    queryName: "ilmiah",
    category: Category.Ilmiah,
  },
  {
    title: "Artikel Non Ilmiah",
    queryName: "non-ilmiah",
    category: Category.NonIlmiah,
  },
];

const limit = 5;

interface ArtikelProps {
  category: Category;
}

export default function Artikel({ category }: ArtikelProps) {
  const router = useRouter();
  const [currentCategory, setCurrentCategory] = useState(category);
  const [page, setPage] = useState(1);
  const { classes } = useStyles();
  const { data, isFetching } = useGetArticlesQuery({
    params: {
      pagination: {
        limit,
        offset: (page - 1) * limit,
      },
      where: [
        {
          field: "category",
          value:
            currentCategory === Category.NonIlmiah ? "Non Ilmiah" : "Ilmiah",
          comparator: ComparatorEnum.Equal,
        },
        {
          field: "status",
          value: "published",
        },
      ],
      sort: {
        field: "publishedDate",
        order: OrderEnum.Desc,
      },
      whereOperator: WhereOperatorEnum.And,
    },
  });

  useEffect(() => {
    setCurrentCategory(category);
  }, [category]);

  const onChangeCategory = (category: Category) => {
    router.push(
      `/artikel/${categories.find((c) => c.category === category).queryName}`,
      undefined,
      { shallow: true }
    );
    setPage(1);
    setCurrentCategory(category);
  };

  return (
    <ArticleLayout
      title="Artikel Ikata"
    >
      <Head page="artikel" />
      <Group mb={40}>
        {categories.map((category, index) => (
          <Button
            variant={
              currentCategory === category.category ? "filled" : "outline"
            }
            onClick={() => onChangeCategory(category.category)}
            className={classes.pillButton}
            key={index}
          >
            {category.title}
          </Button>
        ))}
      </Group>
      <Stack>
        <Stack spacing={30} mb={40}>
          {isFetching ? (
            [...Array(limit).fill(0)].map((_item, index) => (
              <ArticleMainListItem loading key={index} />
            ))
          ) : !data?.getArticles.data.length ? (
            <NoData />
          ) : (
            data?.getArticles.data.map((article) => (
              <ArticleMainListItem
                key={article.id}
                data={article}
                href={`/artikel/${categories.find((c) => c.category === currentCategory)
                    .queryName
                  }/${article.id}`}
              />
            ))
          )}
        </Stack>
        <Pagination
          perPage={limit}
          totalData={data?.getArticles.meta.totalCount}
          position="right"
          onChange={setPage}
          page={page}
        />
      </Stack>
    </ArticleLayout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ query }) => {
    const category = categories.find(
      (category) => category.queryName === query.category
    );
    if (!category) {
      return {
        notFound: true,
      };
    }

    await store.dispatch(
      api.endpoints.GetArticles.initiate({
        params: {
          pagination: {
            limit,
            offset: 0,
          },
          where: [
            {
              field: "category",
              value:
                category.category === Category.NonIlmiah
                  ? "Non Ilmiah"
                  : "Ilmiah",
              comparator: ComparatorEnum.Equal,
            },
            {
              field: "status",
              value: "Published",
            },
          ],
          sort: {
            field: "publishedDate",
            order: OrderEnum.Asc,
          },
          whereOperator: WhereOperatorEnum.And,
        },
      })
    );
    return {
      props: { category: category.category },
    };
  });
