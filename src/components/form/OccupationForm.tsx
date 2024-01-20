import {
  Box,
  Button,
  Group,
  LoadingOverlay,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import { IconEdit } from "@tabler/icons";
import { ConfirmModal, showNotification } from "components/common";
import { errorMessage } from "components/form/formResolver";
import { SaveButtons, Select, TextInput } from "components/profile";
import {
  ProfilePekerjaanInputType,
  useGetOccupationQuery,
  useLazyGetOccupationQuery,
  useSetOccupationMutation,
} from "generated/graphql";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useAppSelector, useAppDispatch } from "redux/hooks";
import { setOccupation } from "redux/profileForm/profileFormSlice";
import { OccupationEnum } from "redux/profileForm/profileFormSlice";
import { useProfileFormStyles } from "theme";
import { IconCheck, IconAlertCircle } from "@tabler/icons";

const occupations = Object.entries(OccupationEnum).map((o) => ({
  label: o[1],
  value: o[0],
}));

export const OccupationForm = () => {
  const { classes } = useProfileFormStyles();
  const occupation = useAppSelector((state) => state.profileForm.occupation);
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    watch,
    reset,
    clearErrors,
  } = useForm<ProfilePekerjaanInputType>({ mode: "onSubmit" });
  const { isFetching } = useGetOccupationQuery();
  const [refetchOccupation] = useLazyGetOccupationQuery();
  const [editOccupation, { isLoading: isSubmitting }] =
    useSetOccupationMutation();

  useEffect(() => {
    reset({ ...occupation });
  }, [occupation, reset]);

  useEffect(() => {
    return () => {
      dispatch(setOccupation(getValues()));
    };
  }, [dispatch, getValues]);

  const onSubmit = () => {
    setModalVisible(true);
  };

  const onConfirm = async () => {
    const values = getValues();
    setModalVisible(false);
    try {
      const occupation = await editOccupation({
        ProfilePekerjaanInput: values,
      }).unwrap();
      setIsEditing(false);
      showNotification({
        message: "Pekerjaan berhasil diubah",
        icon: <IconCheck />,
        id: "occupation-form",
      });
      refetchOccupation();
    } catch (e) {
      showNotification({
        message: "Pekerjaan gagal diubah",
        icon: <IconAlertCircle />,
        id: "occupation-form",
      });
    }
  };

  const handleCancel = async () => {
    setIsEditing(false);
    refetchOccupation();
  };

  const occupationType = watch("jenis_pekerjaan");

  const isRequired = (): boolean => {
    if (occupationType === "BelumBekerja") return false;
    if (occupationType === "Wiraswasta") return false;
    if (occupationType === "PurnaTugas") return false;
    return true;
  };

  return (
    <Box
      sx={{
        position: "relative",
        border: "1px solid #eaeaea",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box py={40} px={22}>
          <LoadingOverlay visible={isFetching || isSubmitting} />
          <Group position="right">
            <Button
              leftIcon={<IconEdit />}
              size="md"
              onClick={() => {
                setIsEditing(true);
              }}
              disabled={isEditing}
            >
              Ubah Pekerjaan
            </Button>
          </Group>
          <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <SimpleGrid
              mb={60}
              cols={1}
              breakpoints={[
                {
                  minWidth: "sm",
                  cols: 2,
                },
              ]}
            >
              <Stack>
                <Controller
                  name="jenis_pekerjaan"
                  control={control}
                  rules={{ required: errorMessage.required }}
                  render={({ field: { onChange, ...field } }) => (
                    <Select
                      onChange={(value) => {
                        onChange(value);
                        clearErrors();
                      }}
                      {...field}
                      label="Jenis Pekerjaan"
                      data={occupations}
                      placeholder="Jenis Pekerjaan"
                      error={errors.jenis_pekerjaan?.message}
                      disabled={!isEditing}
                    />
                  )}
                />
                <TextInput
                  optional={!isRequired()}
                  register={register("nama_instansi_perusahaan", {
                    required: isRequired() ? errorMessage.required : false,
                  })}
                  label="Nama Instansi / Perusahaan"
                  placeholder="Nama Instansi / Perusahaan"
                  error={errors.nama_instansi_perusahaan}
                  disabled={!isEditing}
                />
                <TextInput
                  optional={!isRequired()}
                  register={register("jabatan_pekerjaan", {
                    required: isRequired() ? errorMessage.required : false,
                  })}
                  label="Jabatan"
                  placeholder="Jabatan"
                  error={errors.jabatan_pekerjaan}
                  disabled={!isEditing}
                />
              </Stack>
              <Textarea
                description={!isRequired() ? "Optional" : null}
                label="Alamat Instansi / Perusahaan"
                placeholder="Alamat Instansi / Perusahaan"
                {...register("alamat_instansi_perusahaan", {
                  required: isRequired() ? errorMessage.required : false,
                })}
                sx={{ height: "100%" }}
                styles={{
                  root: {
                    alignSelf: "stretch",
                  },
                  wrapper: {
                    height: "87%",
                    "& textarea": {
                      height: "100%",
                    },
                  },
                }}
                error={errors.alamat_instansi_perusahaan?.message}
                disabled={!isEditing}
              />
            </SimpleGrid>
            <SaveButtons onCancel={handleCancel} disabled={!isEditing} />
          </form>
          <ConfirmModal
            onClose={() => setModalVisible(false)}
            opened={modalVisible}
            onConfirm={onConfirm}
          >
            <Text size="lg" weight={600} align="center">
              Apakah anda yakin untuk mengubah data pekerjaan?
            </Text>
          </ConfirmModal>
        </Box>
      </Box>
    </Box>
  );
};
