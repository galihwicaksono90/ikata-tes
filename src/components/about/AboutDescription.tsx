import {
  Title,
  TypographyStylesProvider,
  Skeleton,
  Stack,
} from "@mantine/core";
import { NoData } from "components/common";
import { TentangJurusanType, TentangKamiType } from "generated/graphql";

interface AboutDescriptionProps {
  title: string;
  data?: TentangJurusanType | TentangKamiType;
  loading?: boolean;
}

export const AboutDescription = ({
  data,
  title,
  loading,
}: AboutDescriptionProps) => {
  if (loading) {
    return (
      <Stack>
        <Skeleton height={60} width="80%" mb={40} />
        <Skeleton height={500} width="100%" mb={30} />
      </Stack>
    );
  }

  if (!data) {
    return <NoData />;
  }

  return (
    <div>
      <Title mb={21}>{title}</Title>
      <TypographyStylesProvider
        sx={{
          fontSize: 14,
          "& img": {
            height: "inherit",
          },
          "& iframe": {
            aspectRatio: "16/9",
            width: "100%",
            height: "auto",
          },
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </TypographyStylesProvider>
    </div>
  );
};
