import { Button, Group, Stack } from "@mantine/core";
import { ArticleItem } from "components/article";
import { SectionContainer } from "components/common";
import {
  Category,
  ComparatorEnum,
  OrderEnum,
  useGetArticlesQuery,
  WhereOperatorEnum,
} from "generated/graphql";
import { useState } from "react";
import { useStyles } from "theme";

const hrefs: { [key in Category]: string } = {
  Ilmiah: "/artikel/ilmiah",
  NonIlmiah: "/artikel/non-ilmiah",
};

export const ArticleLandingPage = () => {
  const { classes } = useStyles();
  const [currentCategory, setCurrentCategory] = useState(Category.Ilmiah);

  const { data, isFetching } = useGetArticlesQuery({
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
          value:
            currentCategory === Category.NonIlmiah ? "Non Ilmiah" : "Ilmiah",
          comparator: ComparatorEnum.Equal,
        },
      ],

      sort: {
        field: "publishedDate",
        order: OrderEnum.Desc,
      },
      whereOperator: WhereOperatorEnum.And,
    },
  });

  return (
    <SectionContainer
      title="ARTIKEL"
      seeAllHref={hrefs[currentCategory]}
      noData={!data?.getArticles?.data?.length}
      loading={isFetching}
      rightItem={
        <Group spacing={20}>
          <Button
            variant={currentCategory === Category.Ilmiah ? "filled" : "outline"}
            onClick={() => setCurrentCategory(Category.Ilmiah)}
            className={classes.pillButton}
          >
            ILMIAH
          </Button>
          <Button
            variant={
              currentCategory === Category.NonIlmiah ? "filled" : "outline"
            }
            onClick={() => setCurrentCategory(Category.NonIlmiah)}
            className={classes.pillButton}
          >
            NON ILMIAH
          </Button>
        </Group>
      }
    >
      <Stack spacing={24}>
        {isFetching
          ? [...Array(5).fill(0)].map((_item, index) => (
              <ArticleItem key={index} loading={isFetching} />
            ))
          : data?.getArticles.data.map((article) => {
              return (
                <ArticleItem
                  data={article}
                  key={article.id}
                  href={`${hrefs[currentCategory]}/${article.id}`}
                />
              );
            })}
      </Stack>
    </SectionContainer>
  );
};
