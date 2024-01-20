import { createStyles } from "@mantine/core";

export const useProfileFormStyles = createStyles((theme) => ({
  form: {
    "& input, textarea": {
      color: theme.colors.dark[8],
      fontWeight: 500,
      fontSize: theme.fontSizes.sm,
      borderRadius: "6px",
      background: theme.white,
      border: `1px solid ${theme.other.grayDark}`,
      "&:disabled": {
        background: theme.other.unVerifiedBlackBackground,
        color: theme.other.unVerifiedBlackForeground,
        "&::placeholder": {
          color: theme.other.unVerifiedBlackForeground,
        },
      },
    },
    "& label": {
      color: theme.colors.dark[8],
      fontWeight: 500,
      fontSize: theme.fontSizes.sm,
      maxWidth: "100%",
      marginBottom: 16,
    },
    "& .mantine-ScrollArea-root.antine-Select-dropdown": {
      backgroundColor: "red",
      color: "teal",
    },
    "& .mantine-TextInput-error, .mantine-Select-error, .mantine-Textarea-error, .mantine-DatePicker-error":
      {
        color: theme.other.errorRed,
        fontSize: theme.fontSizes.xs,
        textAlign: "right",
        fontWeight: 500,
      },
    "& .mantine-Textarea-invalid, .mantine-TextInput-invalid": {
      borderColor: theme.other.errorRed,
    },
    "& .mantine-Textarea-description, .mantine-TextInput-description": {
      marginLeft: 10,
      display: "inline",
      fontSize: theme.fontSizes.sm,
      "&:before": {
        content: '"("',
      },
      "&:after": {
        content: '")"',
      },
    },
    "& button:disabled": {
      background: "tomato",
    },
  },
}));
