import { Dispatch, SetStateAction } from "react";
import { UseFormReset, UseFormSetValue } from "react-hook-form";
import { ProfileFormProps } from "redux/profileForm/profileFormSlice";
import {
  useGetProvinsiQuery,
  useGetKabupatenQuery,
  useGetKecamatanQuery,
  useGetDesaQuery,
  useGetNegaraQuery,
  ProfileAlamatInputType,
} from "generated/graphql";
import { Loader } from "@mantine/core";

import {
  Select as BaseSelect,
  SelectProps as BaseSelectProps,
} from "@mantine/core";
import { forwardRef, Ref } from "react";

interface SelectProps extends BaseSelectProps {
  loading?: boolean;
}

export const SelectComponent = (
  { loading, disabled, ...rest }: SelectProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <BaseSelect
      ref={ref}
      size="lg"
      styles={(theme) => ({
        dropdown: {
          background: theme.white,
          border: "0px",
        },
        selected: {
          background: theme.other.gray,
          color: theme.colors.dark[8],
        },
        item: {
          color: theme.colors.dark[8],
          fontSize: theme.fontSizes.sm,
        },
        invalid: {
          borderColor: `${theme.other.errorRed} !important`,
        },
        input: {
          cursor: "pointer",
        },
      })}
      {...rest}
      dropdownComponent="div"
      sx={(theme) => ({
        ".mantine-ScrollArea-scrollbar": {
          background: "teal !important",
        },
      })}
      icon={loading ? <Loader size="xs" /> : null}
      disabled={loading || disabled}
      searchable
    />
  );
};

export const Select = forwardRef(SelectComponent);

interface AddressSelectProps extends Omit<SelectProps, "data"> {
  setValue?: UseFormSetValue<ProfileAlamatInputType>;
  id?: string;
}

export const CountrySelect = ({
  setValue,
  onChange,
  setIsRequired,
  ...rest
}: AddressSelectProps & {
  setIsRequired: Dispatch<SetStateAction<boolean>>;
}) => {
  const { data, isFetching } = useGetNegaraQuery({ params: {} });

  const parseData = () => {
    if (!data) return [];
    return data.getNegara.data.map((d) => ({
      value: d.name,
      label: d.name.toUpperCase(),
    }));
  };

  return (
    <Select
      {...rest}
      label="Negara"
      placeholder="Negara"
      data={parseData()}
      loading={isFetching}
      onChange={(value) => {
        setValue("kode_provinsi", null);
        setValue("kode_kecamatan", null);
        setValue("kode_kabupaten", null);
        setValue("kode_desa", null);
        onChange(value);
        if (value !== "Indonesia") {
          setIsRequired(false);
          return;
        }
        setIsRequired(true);
      }}
    />
  );
};

export const ProvinsiSelect = ({
  onChange,
  setValue,
  ...rest
}: AddressSelectProps) => {
  const { data, isFetching } = useGetProvinsiQuery({ params: {} });

  const parseData = () => {
    if (!data) return [];
    const arr = data.getProvinsi.data.map((d, index) => ({
      value: d.kode_provinsi,
      label: d.nama_provinsi,
    }));
    return arr;
  };

  return (
    <Select
      {...rest}
      label="Provinsi"
      data={parseData()}
      placeholder="Provinsi"
      loading={isFetching}
      onChange={(value) => {
        setValue("kode_kabupaten", null);
        setValue("kode_kecamatan", null);
        setValue("kode_desa", null);
        onChange(value);
      }}
    />
  );
};

export const KabupatenSelect = ({
  id,
  onChange,
  setValue,
  ...rest
}: AddressSelectProps) => {
  const { data, isFetching } = useGetKabupatenQuery(
    {
      params: {
        where: [
          {
            field: "admin_kabupaten.kode_provinsi",
            value: id,
          },
        ],
      },
    },
    { skip: !id }
  );

  const parseData = () => {
    if (!data) return [];
    const arr = data.getKabupaten.data.map((d, index) => ({
      value: d.kode_kabupaten,
      label: d.nama_kabupaten,
    }));
    return arr;
  };

  return (
    <Select
      {...rest}
      label="Kabupaten / Kota"
      data={parseData()}
      placeholder="Kabupaten"
      loading={isFetching}
      onChange={(value) => {
        setValue("kode_kecamatan", null);
        setValue("kode_desa", null);
        onChange(value);
      }}
    />
  );
};

export const KecamatanSelect = ({
  id,
  onChange,
  setValue,
  ...rest
}: AddressSelectProps) => {
  const { data, isFetching } = useGetKecamatanQuery(
    {
      params: {
        where: [
          {
            field: "admin_kecamatan.kode_kabupaten",
            value: id,
          },
        ],
      },
    },
    { skip: !id }
  );

  const parseData = () => {
    if (!data) return [];
    const arr = data.getKecamatan.data.map((d) => ({
      value: d.kode_kecamatan,
      label: d.nama_kecamatan,
    }));
    return arr;
  };

  return (
    <Select
      {...rest}
      label="Kecamatan"
      data={parseData()}
      placeholder="Kecamatan"
      loading={isFetching}
      onChange={(value) => {
        setValue("kode_desa", null);
        onChange(value);
      }}
    />
  );
};

export const DesaSelect = ({ id, ...rest }: AddressSelectProps) => {
  const { data, isFetching } = useGetDesaQuery(
    {
      params: {
        where: [
          {
            field: "admin_desa.kode_kecamatan",
            value: id,
          },
        ],
      },
    },
    { skip: !id }
  );

  const parseData = () => {
    if (!data) return [];
    const arr = data.getDesa.data.map((d) => ({
      value: d.kode_desa,
      label: d.nama_desa,
    }));
    return arr;
  };

  return (
    <Select
      {...rest}
      label="Kelurahan / Desa"
      placeholder="Kelurahan / Desa"
      data={parseData()}
      loading={isFetching}
    />
  );
};
