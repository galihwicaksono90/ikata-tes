import {
  Box,
  Button,
  Group,
  LoadingOverlay,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import { IconAlertCircle, IconCheck, IconEdit } from "@tabler/icons";
import { ConfirmModal, showNotification } from "components/common";
import { errorMessage } from "components/form/formResolver";
import {
  CountrySelect,
  DesaSelect,
  KabupatenSelect,
  KecamatanSelect,
  ProvinsiSelect,
  SaveButtons,
  TextInput,
} from "components/profile";
import { ProfileAlamatInputType } from "generated/graphql";
import {
  useGetAddressQuery,
  useLazyGetAddressQuery,
  useSetAddressMutation,
} from "generated/graphqlExtended";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setAddress } from "redux/profileForm/profileFormSlice";
import { useProfileFormStyles } from "theme";

export const AddressForm = () => {
  const { classes } = useProfileFormStyles();
  const address = useAppSelector((state) => state.profileForm.address);
  const dispatch = useAppDispatch();

  const { isFetching } = useGetAddressQuery(null, { skip: !!address });
  const [editAddress, { isLoading: isSubmitting }] = useSetAddressMutation();
  const [refetch, { isFetching: isRefetching }] = useLazyGetAddressQuery();

  const [isEditing, setIsEditing] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    control,
    watch,
    reset,
    getValues,
    trigger,
    formState: { errors },
  } = useForm<ProfileAlamatInputType>({
    reValidateMode: "onChange",
  });

  const watchList = watch([
    "kode_provinsi",
    "kode_kabupaten",
    "kode_kecamatan",
    "nama_negara",
  ]);

  const onSubmit = () => {
    trigger();
    setModalVisible(true);
  };

  useEffect(() => {
    reset(address);
  }, [address, reset]);

  useEffect(() => {
    return () => {
      dispatch(setAddress(getValues()));
    };
  }, [dispatch, getValues]);

  const onCancel = async () => {
    try {
      await refetch().unwrap();
      setIsEditing(false);
    } catch (e) {
      showNotification({
        message: e.message,
        icon: <IconAlertCircle />,
      });
    }
  };

  const onConfirm = async () => {
    setModalVisible(false);
    let values = getValues();
    if (values.nama_negara !== "Indonesia") {
      values = {
        nama_negara: values.nama_negara,
        kode_pos: values.kode_pos,
        alamat: values.alamat,
        kode_desa: null,
        kode_kecamatan: null,
        kode_kabupaten: null,
        kode_provinsi: null,
      };
    }

    try {
      await editAddress({ ProfileAlamatInput: values }).unwrap();
      setIsEditing(false);
      showNotification({
        message: "Alamat berhasil diubah",
        icon: <IconCheck />,
        id: "adress-form",
      });
      //refetchAddress();
    } catch (e) {
      showNotification({
        message: "Alamat gagal diubah",
        icon: <IconAlertCircle />,
        id: "address-form",
      });
    }
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
          <LoadingOverlay
            visible={isFetching || isSubmitting || isRefetching}
          />
          <Group position="right">
            <Button
              leftIcon={<IconEdit />}
              size="md"
              onClick={() => {
                setIsEditing(true);
              }}
              disabled={isEditing}
            >
              Ubah Alamat
            </Button>
          </Group>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            className={classes.form}
          >
            <Group
              noWrap
              align="flex-start"
              mb={30}
              sx={(theme) => ({
                [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                  width: "100%",
                  flexDirection: "column",
                },
              })}
            >
              <Stack
                sx={(theme) => ({
                  width: "50%",
                  [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                    width: "100%",
                  },
                })}
              >
                <Controller
                  control={control}
                  name="nama_negara"
                  rules={{
                    required: errorMessage.required,
                  }}
                  render={({ field }) => (
                    <CountrySelect
                      {...field}
                      setValue={setValue}
                      disabled={!isEditing}
                      setIsRequired={setIsRequired}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="kode_provinsi"
                  rules={{
                    required: isRequired ? errorMessage.required : false,
                  }}
                  render={({ field }) => (
                    <ProvinsiSelect
                      {...field}
                      setValue={setValue}
                      disabled={!(watchList[3] === "Indonesia" && isEditing)}
                      error={errors.kode_provinsi?.message}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="kode_kabupaten"
                  rules={{
                    required: isRequired ? errorMessage.required : false,
                  }}
                  render={({ field }) => (
                    <KabupatenSelect
                      {...field}
                      id={watchList[0]}
                      setValue={setValue}
                      disabled={!(watchList[0] && !!isEditing)}
                      error={errors.kode_kabupaten?.message}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="kode_kecamatan"
                  rules={{
                    required: isRequired ? errorMessage.required : false,
                  }}
                  render={({ field }) => (
                    <KecamatanSelect
                      {...field}
                      id={watchList[1]}
                      setValue={setValue}
                      disabled={!(watchList[1] && !!isEditing)}
                      error={errors.kode_kecamatan?.message}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="kode_desa"
                  rules={{
                    required: isRequired ? errorMessage.required : false,
                  }}
                  render={({ field }) => (
                    <DesaSelect
                      {...field}
                      id={watchList[2]}
                      setValue={setValue}
                      disabled={!(watchList[2] && !!isEditing)}
                      error={errors.kode_desa?.message}
                    />
                  )}
                />
                <TextInput
                  register={register("kode_pos", { required: "Wajib diisi" })}
                  label="Kode Pos"
                  placeholder="Kode Pos"
                  error={errors.kode_pos}
                  disabled={!isEditing}
                  type="number"
                />
              </Stack>
              <Textarea
                label="Alamat tempat tinggal"
                placeholder="Alamat tempat tinggal"
                {...register("alamat", { required: "Wajib diisi" })}
                styles={(theme) => ({
                  root: {
                    width: "50%",
                    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                      width: "100%",
                      height: "300px",
                    },
                    alignSelf: "normal",
                  },
                  wrapper: {
                    height: "92%",
                    "& textarea": {
                      height: "100%",
                    },
                  },
                })}
                error={errors.alamat?.message}
                disabled={!isEditing}
              />
            </Group>
            <SaveButtons onCancel={onCancel} disabled={!isEditing} />
          </Box>
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
