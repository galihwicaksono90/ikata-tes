import { Box, Stack, Text } from "@mantine/core";
import { GradientButton, Modal, ModalProps } from "components/common";
import Image from "next/image";

interface Props extends ModalProps {
  title: string;
  message: React.ReactNode;
  href?: string;
  onClick?: () => void;
  buttonLabel: string;
  image?: string;
  spacing?: number;
}

export const SuccessModal = ({
  spacing,
  onClick,
  href,
  buttonLabel,
  message,
  title,
  children,
  onClose,
  image = "/success.svg",
  ...rest
}: Props) => {
  return (
    <Modal
      {...rest}
      onClose={onClose}
      centered
      size={552}
      radius="lg"
      closable={false}
    >
      <Stack align="center" spacing={spacing}>
        <Box
          sx={{
            position: "relative",
            width: 192,
            height: 150,
            marginBottom: "36.11px",
          }}
        >
          <Image src={image} layout="fill" alt="" />
        </Box>
        <Text sx={{ fontSize: "1.5rem" }} align="center" mb={20} weight={600}>
          {title}
        </Text>
        <Text
          align="center"
          sx={(theme) => ({
            color: theme.colors.dark[4],
            lineHeight: "28.8px",
          })}
          mb={40}
        >
          {message}
        </Text>
        <GradientButton
          href={href ?? null}
          sx={{ maxWidth: 360 }}
          fullWidth
          onClick={onClick}
        >
          {buttonLabel}
        </GradientButton>
      </Stack>
    </Modal>
  );
};
