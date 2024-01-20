import { Skeleton, Stack, Title, Divider, Text, Box } from "@mantine/core";
import { AlumniBusinessesType } from "generated/graphql";
import { NoData, Typography, NotLoggedIn } from "components/common";
import { useAppSelector } from "redux/hooks";

interface AlumniDescriptionProps {
  data?: AlumniBusinessesType;
  loading?: boolean;
}

export const AlumniDescription = ({
  loading,
  data,
}: AlumniDescriptionProps) => {
  if (loading) {
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
    <Stack>
      <Title order={3} sx={(theme) => ({ color: theme.colors.dark })}>
        {data.title}
      </Title>
      <Text color="dimmed" size="sm">
        {data.ownerName} - Angkatan {data.ownerClassYear}
      </Text>
      <Divider mb={30} color="#eaeaea" />

      <Typography light>
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </Typography>

      <Divider mb={30} color="#eaeaea" />

      <Stack spacing={8}>
        <Text size="sm" weight="bold" color="dark">
          Alamat
        </Text>
        <Text color="dimmed" size="sm">
          {data.alamat}
        </Text>
      </Stack>
      <Stack spacing={8}>
        <Text size="sm" weight="bold" color="dark">
          Kontak
        </Text>
        <Text color="dimmed" size="sm">
          Whatsapp: {data.kontak_whatsapp}
        </Text>
        <Text color="dimmed" size="sm">
          Email: {data.kontak_email}
        </Text>
      </Stack>
    </Stack>
  );
};
