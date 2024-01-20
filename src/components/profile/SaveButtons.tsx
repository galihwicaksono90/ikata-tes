import { Group, Button } from "@mantine/core";
import { IconX, IconCheck } from "@tabler/icons";

interface SaveButtonsProps {
  onCancel: () => Promise<void>;
  disabled: boolean;
}

export const SaveButtons = ({ onCancel, disabled }: SaveButtonsProps) => {
  return (
    <Group position="right">
      <Button
        size="md"
        leftIcon={<IconX />}
        onClick={onCancel}
        disabled={disabled}
        sx={(theme) => ({
          background: theme.other.errorRed,
          "&:hover": {
            background: theme.fn.darken(theme.other.errorRed, 0.1),
          },
        })}
      >
        Batal
      </Button>
      <Button
        leftIcon={<IconCheck />}
        variant="filled"
        size="md"
        type="submit"
        disabled={disabled}
      >
        Simpan
      </Button>
    </Group>
  );
};
