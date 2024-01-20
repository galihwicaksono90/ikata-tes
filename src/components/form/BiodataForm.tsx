import {
  Box,
  Button,
  Group,
  LoadingOverlay,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { IconEdit } from "@tabler/icons";
import { ConfirmModal, showNotification } from "components/common";
import {
  errorMessage,
  validateBiodataForm,
} from "components/form/formResolver";
import {
  DatePicker,
  ImageUpload,
  SaveButtons,
  Select,
  TextInput,
} from "components/profile";
import dayjs from "dayjs";
import {
  GenderEnum,
  KewarganegaraanEnum,
  ProfileBiodataInputType,
} from "generated/graphql";
import {
  useGetBiodataQuery,
  useLazyGetBiodataQuery,
  useSetBiodataMutation,
} from "generated/graphqlExtended";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setBiodata, clearUserImage } from "redux/profileForm/profileFormSlice";
import { useProfileFormStyles } from "theme";
import { capitalize, createClassYearsAsString } from "utils";
import { IconCheck, IconAlertCircle } from "@tabler/icons";

export const BiodataForm = () => {
  const biodata = useAppSelector((state) => state.profileForm.biodata);
  const userImage = useAppSelector((state) => state.profileForm.userImage);
  const { classes } = useProfileFormStyles();
  const [isEditing, setIsEditing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { isFetching } = useGetBiodataQuery();
  const [refetchBiodata] = useLazyGetBiodataQuery();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    getValues,
    setError,
    setFocus,
    setValue,
  } = useForm<ProfileBiodataInputType>({
    mode: "onSubmit",
  });

  const [editBiodata, { isLoading: isSubmitting }] = useSetBiodataMutation();

  const onSubmit = (values: ProfileBiodataInputType) => {
    if (!validateBiodataForm(values, setError, setFocus)) return;
    setModalVisible(true);
  };

  const onConfirm = async () => {
    setModalVisible(false);
    const values = getValues();
    const newValues = {
      ...values,
      tanggal_lahir: dayjs(values.tanggal_lahir).format("YYYY/MM/DD"),
      fullName: capitalize(values.fullName.toLowerCase()),
      nickName: capitalize(values.nickName.toLowerCase()),
    };
    if (!!userImage?.file) {
      newValues.photoPath = userImage.file;
    }

    try {
      const res = await editBiodata({
        ProfileBiodataInput: newValues,
      });

      if ("error" in res) {
        throw new Error(res.error.message);
      }

      setIsEditing(false);

      showNotification({
        message: "Biodata berhasil diubah",
        icon: <IconCheck />,
        id: "biodata-form",
      });
    } catch (e) {
      showNotification({
        message: e.message,
        icon: <IconAlertCircle />,
        id: "biodata-form",
      });
    }
  };

  const handleCancel = async () => {
    setIsEditing(false);
    dispatch(clearUserImage());
    refetchBiodata();
  };

  useEffect(() => {
    reset({
      ...biodata,
      kewarganegaraan: biodata?.kewarganegaraan as any,
      classYear: biodata?.classYear?.toString(),
    });
  }, [biodata, reset]);

  useEffect(() => {
    return () => {
      const values = getValues();
      dispatch(setBiodata(values));
    };
  }, [dispatch, getValues]);

  return (
    <Box
      sx={{
        position: "relative",
        border: "1px solid #eaeaea",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <LoadingOverlay visible={isFetching || isSubmitting} />
      <Box py={40} px={22}>
        <Box sx={{ position: "relative" }}>
          <Group position="right">
            <Button
              leftIcon={<IconEdit />}
              size="md"
              onClick={() => {
                setIsEditing(true);
              }}
              disabled={isEditing}
              mb={20}
            >
              Ubah Biodata
            </Button>
          </Group>
          <ImageUpload disabled={!isEditing} />

          <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <SimpleGrid
              cols={1}
              breakpoints={[
                {
                  minWidth: "sm",
                  cols: 2,
                },
              ]}
              mb={30}
            >
              <Stack sx={{ width: "100%" }}>
                <TextInput
                  register={register("fullName", {
                    required: errorMessage.required,
                  })}
                  label="Nama Lengkap"
                  error={errors.fullName}
                  placeholder="Nama Lengkap"
                  disabled={!isEditing}
                />
                <TextInput
                  register={register("nickName", {
                    required: errorMessage.required,
                  })}
                  label="Nama panggilan"
                  placeholder="Nama panggilan"
                  error={errors.nickName}
                  disabled={!isEditing}
                />
                <Group
                  noWrap
                  sx={(theme) => ({
                    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
                      flexDirection: "column",
                    },
                  })}
                >
                  <TextInput
                    register={register("nim", {
                      required: errorMessage.required,
                    })}
                    label="NIM"
                    error={errors.nim}
                    placeholder="NIM"
                    sx={(theme) => ({
                      width: "60%",
                      [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
                        width: "100%",
                      },
                    })}
                    disabled={!isEditing}
                  />
                  <Box
                    sx={(theme) => ({
                      width: "40%",
                      [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
                        width: "100%",
                      },
                    })}
                  >
                    <Controller
                      name="classYear"
                      control={control}
                      rules={{ required: errorMessage.required }}
                      render={({ field }) => {
                        return (
                          //@ts-ignore
                          <Select
                            {...field}
                            label="Pilih Angkatan"
                            data={createClassYearsAsString()}
                            placeholder="Tahun Masuk"
                            searchable
                            error={errors.classYear?.message}
                            disabled={!isEditing}
                          />
                        );
                      }}
                    />
                  </Box>
                </Group>
                <Controller
                  name="kewarganegaraan"
                  control={control}
                  rules={{ required: errorMessage.required }}
                  render={({ field }) => {
                    return (
                      <Select
                        {...field}
                        label="Kewarganegaraan"
                        data={Object.entries(KewarganegaraanEnum)
                          .map((o) => ({
                            value: o[1],
                            label: o[0].toUpperCase(),
                          }))
                          .reverse()}
                        placeholder="Kewarganegaraaan"
                        error={errors.kewarganegaraan?.message}
                        disabled={!isEditing}
                      />
                    );
                  }}
                />
                <Group
                  align="flex-start"
                  noWrap
                  sx={(theme) => ({
                    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                      flexDirection: "column",
                    },
                  })}
                >
                  <Box
                    sx={(theme) => ({
                      flex: "0 0 60%",
                      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                        width: "100%",
                      },
                    })}
                  >
                    <TextInput
                      register={register("tempat_lahir", {
                        required: errorMessage.required,
                      })}
                      label="Tempat & Tanggal Lahir"
                      error={errors.tempat_lahir}
                      placeholder="Tempat lahir"
                      disabled={!isEditing}
                    />
                  </Box>
                  <Box
                    sx={(theme) => ({
                      marginTop: 39,
                      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                        marginTop: 0,
                        width: "100%",
                      },
                    })}
                  >
                    <Controller
                      name="tanggal_lahir"
                      control={control}
                      rules={{ required: errorMessage.required }}
                      render={({ field: { value, onChange, ...rest } }) => {
                        return (
                          <DatePicker
                            {...rest}
                            initialLevel="year"
                            style={{ width: "100%" }}
                            placeholder="Tanggal lahir"
                            error={errors.tanggal_lahir?.message}
                            disabled={!isEditing}
                            onChange={(e) => {
                              onChange(dayjs(e).toISOString());
                            }}
                            value={!!value ? new Date(value) : null}
                          />
                        );
                      }}
                    />
                  </Box>
                </Group>
              </Stack>
              <Stack sx={{ width: "100%" }}>
                <TextInput
                  register={register("email")}
                  label="Email"
                  error={errors.email}
                  placeholder="Email"
                  disabled
                />
                <TextInput
                  register={register("prefixTitle")}
                  label="Gelar belakang"
                  placeholder="Gelar belakang"
                  disabled={!isEditing}
                  optional
                />
                <TextInput
                  register={register("suffixTitle")}
                  label="Gelar depan"
                  placeholder="Gelar depan"
                  disabled={!isEditing}
                  optional
                />
                <TextInput
                  register={register("phone", {
                    required: errorMessage.required,
                  })}
                  label="No. Handphone"
                  error={errors.phone}
                  placeholder="No. Handphone"
                  disabled={!isEditing}
                  type="number"
                />
                <Controller
                  name="gender"
                  control={control}
                  rules={{ required: errorMessage.required }}
                  render={({ field }) => {
                    return (
                      <Select
                        {...field}
                        label="Jenis Kelamin"
                        data={Object.values(GenderEnum)}
                        placeholder="Jenis Kelamin"
                        style={{ width: "40%" }}
                        searchable
                        error={errors.classYear?.message}
                        disabled={!isEditing}
                      />
                    );
                  }}
                />
              </Stack>
            </SimpleGrid>
            <SaveButtons onCancel={handleCancel} disabled={!isEditing} />
          </form>
          <ConfirmModal
            onClose={() => setModalVisible(false)}
            opened={modalVisible}
            onConfirm={onConfirm}
          >
            <Text size="lg" weight={600} align="center">
              Apakah anda yakin untuk mengubah data biodata?
            </Text>
          </ConfirmModal>
        </Box>
      </Box>
    </Box>
  );
};
