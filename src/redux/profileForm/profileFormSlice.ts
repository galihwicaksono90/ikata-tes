import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  api,
  User,
  ProfileBiodataInputType,
  ProfileAlamatInputType,
  ProfilePekerjaanInputType,
} from "generated/graphql";
import { api as apiExtended } from "generated/graphqlExtended";
import { RootState } from "redux/store";
import dayjs from "dayjs";

export enum OccupationEnum {
  ASN = "ASN",
  BUMN = "BUMN",
  Swasta = "Swasta",
  Wiraswasta = "Wiraswasta",
  PurnaTugas = "Purna Tugas",
  BelumBekerja = "Belum Bekerja",
}

export type ProfileFormProps = Omit<User, "classYear" | "tanggal_lahir"> & {
  classYear?: string;
  tanggal_lahir?: Date;
};

type InitialProfileFormState = {
  user?: ProfileFormProps;
  biodata?: ProfileBiodataInputType;
  address?: ProfileAlamatInputType;
  occupation?: ProfilePekerjaanInputType;
  userImage?: {
    file?: File;
    url: string;
  };
};

const initialState: InitialProfileFormState = {
  user: {},
  biodata: null,
  address: null,
  occupation: null,
  userImage: null,
};

export const profileFormSlice = createSlice({
  name: "profileForm",
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<ProfileFormProps>) => {
      const newValues = {
        ...state,
        user: { ...state.user, ...action.payload },
      };
      return newValues;
    },
    setUserImage: (
      state,
      action: PayloadAction<{ file: File; url: string }>
    ) => {
      return {
        ...state,
        userImage: { file: action.payload.file, url: action.payload.url },
      };
    },
    clearUserImage: (state) => {
      state.userImage = null;
    },
    clearForm: () => {
      return initialState;
    },
    setBiodata: (state, action: PayloadAction<ProfileBiodataInputType>) => {
      state.biodata = {
        ...action.payload,
        fullName: action.payload?.fullName,
        kewarganegaraan: action.payload?.kewarganegaraan as any,
        classYear: action.payload?.classYear?.toString(),
      };
    },
    setAddress: (state, action: PayloadAction<ProfileAlamatInputType>) => {
      state.address = { ...action.payload };
    },
    setOccupation: (
      state,
      action: PayloadAction<ProfilePekerjaanInputType>
    ) => {
      state.occupation = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiExtended.endpoints.GetProfileDetail.matchFulfilled,
      (state, { payload }) => {
        const newPayload = payload.getProfile;
        state.userImage = {
          file: null,
          url: newPayload.photoPath,
        };
        state.user = {
          ...newPayload,
          classYear: payload.getProfile.classYear.toString(),
          tanggal_lahir: new Date(parseInt(newPayload.tanggal_lahir)),
        };
      }
    );

    builder.addMatcher(
      apiExtended.endpoints.GetBiodata.matchFulfilled,
      (state, { payload }) => {
        state.biodata = {
          ...payload.getProfile,
          fullName: payload.getProfile.fullName,
          kewarganegaraan: payload.getProfile.kewarganegaraan as any,
          classYear: payload.getProfile.classYear.toString(),
          tanggal_lahir: !!payload.getProfile?.tanggal_lahir
            ? dayjs(parseInt(payload.getProfile.tanggal_lahir)).toISOString()
            : null,
        };
      }
    );

    builder.addMatcher(
      apiExtended.endpoints.GetAddress.matchFulfilled,
      (state, { payload }) => {
        const address = payload.getProfile;
        state.address = {
          kode_provinsi: address.kode_provinsi,
          kode_kabupaten: address.kode_kabupaten,
          kode_kecamatan: address.kode_kecamatan,
          kode_desa: address.kode_desa,
          kode_pos: address.kode_pos?.toString(),
          alamat: address.alamat,
          nama_negara: address.nama_negara,
        };
      }
    );

    builder.addMatcher(
      apiExtended.endpoints.GetOccupation.matchFulfilled,
      (state, { payload }) => {
        state.occupation = {
          ...payload.getProfile,
          jenis_pekerjaan: payload.getProfile.jenis_pekerjaan,
        };
      }
    );
  },
});

export const {
  setForm,
  setBiodata,
  setAddress,
  setUserImage,
  setOccupation,
  clearForm,
  clearUserImage,
} = profileFormSlice.actions;

export const profileForm = (state: RootState) => state.profileForm.user;

export default profileFormSlice.reducer;
