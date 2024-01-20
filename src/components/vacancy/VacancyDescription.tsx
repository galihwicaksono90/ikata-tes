import { Divider, Skeleton, Stack, Text, Title } from "@mantine/core";
import { NoData, Typography, VerifiedChecker } from "components/common";
import {
  FinalProjectsType,
  ScholarshipsType,
  VacanciesType,
} from "generated/graphql";
import { Time } from "utils/time";

interface VacancyDescriptionProps {
  data?: FinalProjectsType | VacanciesType | ScholarshipsType;
  isFetching?: boolean;
}

export function VacancyDescription({
  data,
  isFetching,
}: VacancyDescriptionProps) {
  if (isFetching) {
    return (
      <Stack>
        <Skeleton width="50%" height={16} mb={11} />
        <Skeleton width="25%" height={14} mb={20} />
        <Skeleton width="100%" height={210} mb={40} />
        <Skeleton width="50%" height={16} mb={11} />
        <Skeleton width="25%" height={14} mb={20} />
        <Skeleton width="100%" height={210} mb={40} />
        <Skeleton width="50%" height={16} mb={11} />
        <Skeleton width="25%" height={14} mb={20} />
      </Stack>
    );
  }

  if (!data) {
    return <NoData light />;
  }

  return (
    <VerifiedChecker rules={data.rules} light>
      <Stack>
        <Title order={3} sx={(theme) => ({ color: theme.colors.dark })}>
          {data.companyName}
        </Title>
        <Text color="gray" size="sm" pb={20}>
          Posting Date: {Time.formatTime(data.publishedDate)} - Expiry Date:{" "}
          {Time.formatTime(data.expiredDate)}
        </Text>
        <Divider mb={30} color="gray" />

        <Typography light>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </Typography>
        <Divider mb={30} color="gray" />
        <Text color="dimmed" align="center" size="sm" weight="bold">
          {data.notes}
        </Text>
        <Text
          color="orange"
          align="center"
          variant="link"
          size="sm"
          weight="bold"
        >
          {data.companyEmail}
        </Text>
      </Stack>
    </VerifiedChecker>
  );
}
