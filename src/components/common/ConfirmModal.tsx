import {
  Stack,
  Modal as BaseModal,
  ModalProps as BaseModalProps,
  Button,
  Text,
  Group,
} from "@mantine/core";

interface ModalProps extends BaseModalProps {
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const ConfirmModal = ({
  children,
  onCancel,
  onConfirm,
  onClose,
  ...rest
}: ModalProps) => {
  return (
    <BaseModal
      {...rest}
      onClose={onClose}
      centered
      withCloseButton={false}
      styles={(theme) => ({
        modal: { background: theme.white, color: theme.colors.dark[8] },
      })}
    >
      <Stack align="center">
        {children}
        <Group>
          <Button
            onClick={onClose}
            sx={(theme) => ({
              backgroundColor: theme.other.errorRed,
              "&:hover": {
                background: theme.fn.darken(theme.other.errorRed, 0.1),
              },
            })}
          >
            Tidak
          </Button>
          <Button onClick={onConfirm}>Ya</Button>
        </Group>
      </Stack>
    </BaseModal>
  );
};
