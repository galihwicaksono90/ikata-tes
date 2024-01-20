import { Stack, TextInput, Textarea, Box } from "@mantine/core";
import { useForm } from "react-hook-form";
import {
  GradientButton,
  SuccessModal,
  showNotification,
} from "components/common";
import { useState } from "react";
import {
  useSentKontakKamiMutation,
  KontakKamiInputType,
} from "generated/graphql";
import { validateContactForm, errorMessage } from "./formResolver";

export const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [send, { isLoading }] = useSentKontakKamiMutation();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    setFocus,
    formState: { errors },
  } = useForm<KontakKamiInputType>();

  const onSubmit = async (values: KontakKamiInputType) => {
    if (!validateContactForm(values, setError, setFocus)) return;

    try {
      await send({ kontakKamiInput: values });
      reset();
      setShowModal(true);
    } catch (e) {
      showNotification({
        message: e.message,
        id: "send-message-error",
      });
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={(theme) => ({
          "& label": {
            fontWeight: 600,
            color: theme.colors.dark[8],
          },
          "& input, textarea": {
            borderBottom: `1px solid ${theme.other.gray}`,
            color: theme.colors.dark[8],
            fontSize: theme.fontSizes.sm,
            "&:focus": {
              borderBottom: `1px solid ${theme.other.gray}`,
            },
          },
          "& textarea": {
            height: 150,
          },
          "& .mantine-TextInput-error, .mantine-Textarea-error": {
            textAlign: "right",
            fontSize: theme.fontSizes.xs,
          },
        })}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing={30}>
          <TextInput
            {...register("name", { required: errorMessage.required })}
            label="Nama"
            variant="unstyled"
            error={errors.name?.message}
          />
          <TextInput
            {...register("email", { required: errorMessage.required })}
            label="Email"
            variant="unstyled"
            error={errors.email?.message}
          />
          <TextInput
            {...register("phone", { required: errorMessage.required })}
            label="No. Telepon"
            variant="unstyled"
            error={errors.phone?.message}
            type="number"
          />
          <Textarea
            {...register("message", { required: errorMessage.required })}
            label="Pesan"
            variant="unstyled"
            error={errors.message?.message}
          />
        </Stack>
        <GradientButton
          mt={70}
          fullWidth
          size="lg"
          lightText
          type="submit"
          loading={isLoading}
        >
          Kirim Pesan
        </GradientButton>
      </Box>
      <SuccessModal
        opened={showModal}
        onClose={() => setShowModal(false)}
        onClick={() => setShowModal(false)}
        buttonLabel="Tutup"
        message="Terimakasih telah mengirimkan kami pesan. Admin kami akan segera membalas pesan melalui email anda."
        title="Pesan Terkirim"
        image="/mail.svg"
        spacing={0}
      />
    </>
  );
};
