import { Group } from "@mantine/core";
import { IconSquareCheck, IconSquareX } from "@tabler/icons";

interface VerifiedTagProps {
  isVerified?: boolean;
}

export const VerifiedTag = ({ isVerified }: VerifiedTagProps) => {
  return (
    <Group
      px={20}
      sx={(theme) => ({
        height: 34,
        minWidth: 183,
        background: isVerified
          ? theme.other.verifiedGreenBackground
          : theme.other.profileOrange,
        lineHeight: 1,
        color: isVerified
          ? theme.other.verifiedGreenForeground
          : theme.colors.orange[0],
        borderRadius: "6px",
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,
      })}
      align="center"
      position="center"
    >
      {isVerified ? (
        <>
          <IconSquareCheck />
          Terverifikasi
        </>
      ) : (
        <>
          <IconSquareX />
          Belum Terverifikasi
        </>
      )}
    </Group>
  );
};
