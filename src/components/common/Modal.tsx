import {
  Modal as BaseModal,
  ModalProps as BaseModalProps,
} from "@mantine/core";

export interface ModalProps extends BaseModalProps {
  closable?: boolean;
}

export const Modal = ({
  closable = true,
  children,
  radius = "lg",
  ...rest
}: ModalProps) => {
  return (
    <BaseModal
      closeOnClickOutside={closable}
      withCloseButton={closable}
      radius={radius}
      styles={(theme) => ({
        close: {
          color: theme.colors.dark,
          "&:hover": {
            background: theme.colors.dark[4],
          },
        },
        modal: {
          background: theme.white,
        },
        body: {
          background: theme.white,
          color: theme.colors.dark,
          borderRadius: theme.radius.lg,
        },
        title: {
          color: theme.colors.dark[8],
          fontWeight: 600,
          fontSize: "1.375rem",
        },
        header: {
          height: 70,
          borderBottom: `1px solid ${theme.other.gray}`,
        },
      })}
      {...rest}
    >
      {children}
    </BaseModal>
  );
};
