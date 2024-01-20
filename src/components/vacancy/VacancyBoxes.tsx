import {
  Grid,
  Group,
  Skeleton,
  Box,
  UnstyledButton,
  Avatar,
  Text,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import {
  VacanciesType,
  ScholarshipsType,
  FinalProjectsType,
  useGetScholarshipsQuery,
  useGetVacanciesQuery,
  useGetFinalProjectsQuery,
  ParamsInputType,
  OrderEnum,
} from "generated/graphql";
import { Types, vacancyHrefs } from "components/vacancy";
import { NoData } from "components/common";

interface VacancyBoxesProps {
  currentType: Types;
}

const params: ParamsInputType = {
  pagination: {
    limit: 6,
    offset: 0,
  },
  sort: {
    field: "updatedAt",
    order: OrderEnum.Desc,
  },
  where: [
    {
      field: "status",
      value: "Published",
    },
  ],
};

export const VacancyBoxes = ({ currentType }: VacancyBoxesProps) => {
  const renderComponent = () => {
    switch (currentType) {
      case Types.Vacancy:
        return <Vacancy />;
      case Types.FinalProject:
        return <FinalProject />;
      case Types.Scholarship:
        return <Scholarship />;
      default:
        return null;
    }
  };

  return <Grid gutter={24}>{renderComponent()}</Grid>;
};

const IsFetching = () => {
  return (
    <>
      {[...Array(6).fill(0)].map((_, index) => (
        <Grid.Col span={12} md={4} sm={6} key={index}>
          <VacancyBox loading />
        </Grid.Col>
      ))}
    </>
  );
};

const Vacancy = () => {
  const { data, isFetching } = useGetVacanciesQuery({ params });

  if (isFetching) {
    return <IsFetching />;
  }

  if (!data?.getVacancies?.data.length) {
    return <NoData />;
  }

  return (
    <>
      {data.getVacancies.data.map((d) => (
        <Grid.Col span={12} md={4} sm={6} key={d.id}>
          <VacancyBox
            data={d}
            href={`${vacancyHrefs[Types.Vacancy]}?id=${d.id}`}
          />
        </Grid.Col>
      ))}
    </>
  );
};

const FinalProject = () => {
  const { data, isFetching } = useGetFinalProjectsQuery({ params });

  if (isFetching) {
    return <IsFetching />;
  }

  if (!data.getFinalProjects?.data.length) {
    return <NoData />;
  }

  return (
    <>
      {data.getFinalProjects.data.map((d) => (
        <Grid.Col span={12} md={4} sm={6} key={d.id}>
          <VacancyBox
            data={d}
            href={`${vacancyHrefs[Types.FinalProject]}?id=${d.id}`}
          />
        </Grid.Col>
      ))}
    </>
  );
};

const Scholarship = () => {
  const { data, isFetching } = useGetScholarshipsQuery({ params });

  if (isFetching) {
    return <IsFetching />;
  }

  if (!data.getScholarships?.data.length) {
    return <NoData />;
  }

  return (
    <>
      {data.getScholarships.data.map((d) => (
        <Grid.Col span={12} md={4} sm={6} key={d.id}>
          <VacancyBox
            data={d}
            href={`${vacancyHrefs[Types.Scholarship]}?id=${d.id}`}
          />
        </Grid.Col>
      ))}
    </>
  );
};

function VacancyBox({
  data,
  href,
  loading,
}: {
  data?: VacanciesType | FinalProjectsType | ScholarshipsType;
  href?: string;
  loading?: boolean;
}) {
  if (loading) {
    return (
      <Group
        p={20}
        sx={(theme) => ({
          backgroundColor: theme.colors.dark[5],
          width: "100%",
        })}
        noWrap
        spacing={20}
      >
        <Skeleton circle height={60} width={60} />
        <Box sx={{ width: "80%" }}>
          <Skeleton height={14} width="70%" mb={10} />
          <Skeleton height={14} width="30%" />
        </Box>
      </Group>
    );
  }

  return (
    <UnstyledButton component={NextLink} href={href}>
      <Group
        p={20}
        sx={(theme) => ({
          backgroundColor: theme.colors.dark[5],
          width: "100%",
          "&:hover": {
            backgroundColor: theme.fn.lighten(theme.colors.dark[5], 0.1),
          },
        })}
        noWrap
        spacing={20}
      >
        <Avatar
          //alt={data.companyName}
          src={data.companyLogoPath}
          sx={{ minWidth: 60, height: 60 }}
          radius="xl"
        />
        <Box>
          <Text size="lg" weight={700} lineClamp={1}>
            {data.companyName}
          </Text>
          <Text size="sm" weight={400} color="dimmed" lineClamp={1}>
            {data.amount} lowongan
          </Text>
        </Box>
      </Group>
    </UnstyledButton>
  );
}
