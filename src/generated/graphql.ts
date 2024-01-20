import { api } from 'redux/api/apiSlice';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

/** This represents activities entity */
export type ActivitiesType = {
  __typename?: 'ActivitiesType';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  publishedDate?: Maybe<Scalars['String']>;
  rules?: Maybe<RulesActivities>;
  status?: Maybe<StatusActivities>;
  thumbnailChecksum?: Maybe<Scalars['String']>;
  thumbnailMimeType?: Maybe<Scalars['String']>;
  thumbnailPath?: Maybe<Scalars['String']>;
  thumbnailSize?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
  views?: Maybe<Scalars['Int']>;
};

/** This represents a Admin */
export type Admin = {
  __typename?: 'Admin';
  classYear?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<AdmineAdmin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<AdmineAdmin>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  nickName?: Maybe<Scalars['String']>;
  nim?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  photoChecksum?: Maybe<Scalars['String']>;
  photoMimeType?: Maybe<Scalars['String']>;
  photoPath?: Maybe<Scalars['String']>;
  photoSize?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<AdmineAdmin>;
};

/** This represents a AdmineAdmin */
export type AdmineAdmin = {
  __typename?: 'AdmineAdmin';
  classYear?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  nickName?: Maybe<Scalars['String']>;
  nim?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  photoChecksum?: Maybe<Scalars['String']>;
  photoMimeType?: Maybe<Scalars['String']>;
  photoPath?: Maybe<Scalars['String']>;
  photoSize?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** This represents alumni businesses entity */
export type AlumniBusinessesType = {
  __typename?: 'AlumniBusinessesType';
  alamat?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  desa?: Maybe<DesaType>;
  id?: Maybe<Scalars['ID']>;
  kabupaten?: Maybe<KabupatenType>;
  kecamatan?: Maybe<KecamatanType>;
  kode_desa?: Maybe<Scalars['String']>;
  kode_kabupaten?: Maybe<Scalars['String']>;
  kode_kecamatan?: Maybe<Scalars['String']>;
  kode_pos?: Maybe<Scalars['Int']>;
  kode_provinsi?: Maybe<Scalars['String']>;
  kontak_email?: Maybe<Scalars['String']>;
  kontak_whatsapp?: Maybe<Scalars['String']>;
  ownerClassYear?: Maybe<Scalars['Int']>;
  ownerName?: Maybe<Scalars['String']>;
  provinsi?: Maybe<ProvinsiType>;
  publishedDate?: Maybe<Scalars['String']>;
  status?: Maybe<StatusAlumniBusinesses>;
  thumbnailChecksum?: Maybe<Scalars['String']>;
  thumbnailMimeType?: Maybe<Scalars['String']>;
  thumbnailPath?: Maybe<Scalars['String']>;
  thumbnailSize?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
  views?: Maybe<Scalars['Int']>;
};

/** This represents articles entity */
export type ArticlesType = {
  __typename?: 'ArticlesType';
  author?: Maybe<Scalars['String']>;
  category?: Maybe<Category>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  publishedDate?: Maybe<Scalars['String']>;
  rules?: Maybe<RulesArticles>;
  status?: Maybe<StatusArticles>;
  thumbnailChecksum?: Maybe<Scalars['String']>;
  thumbnailMimeType?: Maybe<Scalars['String']>;
  thumbnailPath?: Maybe<Scalars['String']>;
  thumbnailSize?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
  views?: Maybe<Scalars['Int']>;
};

/** This represents bidang entity */
export type BidangType = {
  __typename?: 'BidangType';
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  pengurus?: Maybe<Array<Maybe<PengurusBidangType>>>;
  subBidang?: Maybe<Array<Maybe<SubBidangType>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
  urutan?: Maybe<Scalars['Int']>;
};

/** This represents bidang entity */
export type BidangTypeFromSubBidang = {
  __typename?: 'BidangTypeFromSubBidang';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  urutan?: Maybe<Scalars['Int']>;
};

/** This represents Desa entity */
export type DesaType = {
  __typename?: 'DesaType';
  kecamatan?: Maybe<KecamatanType>;
  kode_desa?: Maybe<Scalars['String']>;
  kode_kecamatan?: Maybe<Scalars['String']>;
  nama_desa?: Maybe<Scalars['String']>;
};

/** This represents Dewan Pengawas entity */
export type DewanPengawasType = {
  __typename?: 'DewanPengawasType';
  classYear?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  jabatan?: Maybe<JabatanType>;
  nim?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  photoChecksum?: Maybe<Scalars['String']>;
  photoMimeType?: Maybe<Scalars['String']>;
  photoPath?: Maybe<Scalars['String']>;
  photoSize?: Maybe<Scalars['String']>;
  status?: Maybe<StatusDewanPengawas>;
  title?: Maybe<TitleDewanPengawas>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
};

/** This represents Final Projects Type entity */
export type FinalProjectsType = {
  __typename?: 'FinalProjectsType';
  amount?: Maybe<Scalars['Int']>;
  companyCity?: Maybe<Scalars['String']>;
  companyEmail?: Maybe<Scalars['String']>;
  companyLogoChecksum?: Maybe<Scalars['String']>;
  companyLogoMimeType?: Maybe<Scalars['String']>;
  companyLogoPath?: Maybe<Scalars['String']>;
  companyLogoSize?: Maybe<Scalars['Int']>;
  companyName?: Maybe<Scalars['String']>;
  companyProfile?: Maybe<Scalars['String']>;
  companyUserName?: Maybe<Scalars['String']>;
  companyUserPhone?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  expiredDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  notes?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  rules?: Maybe<RulesFinalProjects>;
  status?: Maybe<StatusFinalProjects>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
  views?: Maybe<Scalars['Int']>;
};

/** This represents footer entity */
export type FooterType = {
  __typename?: 'FooterType';
  address?: Maybe<Scalars['String']>;
  appName?: Maybe<Scalars['String']>;
  emailAddress?: Maybe<Scalars['String']>;
  instagramUrl?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  youtubeUrl?: Maybe<Scalars['String']>;
};

/** This represents Jabatan entity */
export type JabatanType = {
  __typename?: 'JabatanType';
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
};

/** This represents Kabupaten entity */
export type KabupatenType = {
  __typename?: 'KabupatenType';
  kode_kabupaten?: Maybe<Scalars['String']>;
  kode_provinsi?: Maybe<Scalars['String']>;
  nama_kabupaten?: Maybe<Scalars['String']>;
  provinsi?: Maybe<ProvinsiType>;
};

/** This represents Kecamatan entity */
export type KecamatanType = {
  __typename?: 'KecamatanType';
  kabupaten?: Maybe<KabupatenType>;
  kode_kabupaten?: Maybe<Scalars['String']>;
  kode_kecamatan?: Maybe<Scalars['String']>;
  nama_kecamatan?: Maybe<Scalars['String']>;
};

/** This represents ketua ikata entity */
export type KetuaIkataType = {
  __typename?: 'KetuaIkataType';
  classYear?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  description?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  period?: Maybe<Scalars['String']>;
  photoChecksum?: Maybe<Scalars['String']>;
  photoMimeType?: Maybe<Scalars['String']>;
  photoPath?: Maybe<Scalars['String']>;
  photoSize?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
};

/** This represents kontak kami entity */
export type KontakKamiDetailType = {
  __typename?: 'KontakKamiDetailType';
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
};

/** This represents a KontakKamiInputType */
export type KontakKamiInputType = {
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
};

/** This represents kontak kami entity */
export type KontakKamiType = {
  __typename?: 'KontakKamiType';
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
};

/** This represents Koordinator Angkatan entity */
export type KoordinatorAngkatanType = {
  __typename?: 'KoordinatorAngkatanType';
  classYear?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  nim?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  photoChecksum?: Maybe<Scalars['String']>;
  photoMimeType?: Maybe<Scalars['String']>;
  photoPath?: Maybe<Scalars['String']>;
  photoSize?: Maybe<Scalars['String']>;
  status?: Maybe<StatusKoordinatorAngkatan>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
};

/** This represents koordinator wilayah entity */
export type KoordinatorWilayahType = {
  __typename?: 'KoordinatorWilayahType';
  classYear?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  jabatan?: Maybe<JabatanType>;
  nim?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  photoChecksum?: Maybe<Scalars['String']>;
  photoMimeType?: Maybe<Scalars['String']>;
  photoPath?: Maybe<Scalars['String']>;
  photoSize?: Maybe<Scalars['String']>;
  status?: Maybe<StatusKoordinatorWilayah>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
  wilayah?: Maybe<WilayahTypeFromKoordinator>;
};

/** This represents Jabatan entity */
export type MerchandiseCategoryType = {
  __typename?: 'MerchandiseCategoryType';
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
};

/** This represents merchandise photos entity */
export type MerchandisePhotosType = {
  __typename?: 'MerchandisePhotosType';
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  id?: Maybe<Scalars['ID']>;
  thumbnailChecksum?: Maybe<Scalars['String']>;
  thumbnailMimeType?: Maybe<Scalars['String']>;
  thumbnailPath?: Maybe<Scalars['String']>;
  thumbnailSize?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
};

/** This represents merchandises entity */
export type MerchandisesType = {
  __typename?: 'MerchandisesType';
  category?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  merchandisecategory?: Maybe<MerchandiseCategoryType>;
  name?: Maybe<Scalars['String']>;
  photos?: Maybe<Array<Maybe<MerchandisePhotosType>>>;
  price?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['String']>;
  size?: Maybe<Array<Maybe<Scalars['String']>>>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<StatusMerchandises>;
  stock?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
  views?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['String']>;
};

/** This represents metadata */
export type MetadataType = {
  __typename?: 'MetadataType';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

/** This represents Negara entity */
export type NegaraType = {
  __typename?: 'NegaraType';
  alpha2Code?: Maybe<Scalars['String']>;
  alpha3Code?: Maybe<Scalars['String']>;
  capital?: Maybe<Scalars['String']>;
  demonym?: Maybe<Scalars['String']>;
  flag?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nativeName?: Maybe<Scalars['String']>;
  numericCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  subregion?: Maybe<Scalars['String']>;
};

/** This represents news entity */
export type NewsType = {
  __typename?: 'NewsType';
  author?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  id?: Maybe<Scalars['ID']>;
  publishedDate?: Maybe<Scalars['String']>;
  rules?: Maybe<RulesNews>;
  status?: Maybe<StatusNews>;
  tags?: Maybe<Scalars['String']>;
  thumbnailChecksum?: Maybe<Scalars['String']>;
  thumbnailMimeType?: Maybe<Scalars['String']>;
  thumbnailPath?: Maybe<Scalars['String']>;
  thumbnailSize?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
  views?: Maybe<Scalars['Int']>;
};

/** This represents a PaginationInputType */
export type PaginationInputType = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

/** This represents a ParamsAdvanceInputType */
export type ParamsAdvanceInputType = {
  pagination?: InputMaybe<PaginationInputType>;
  sort?: InputMaybe<SortInputType>;
  where?: InputMaybe<WhereAdvanceInputType>;
};

/** This represents a ParamsInputType */
export type ParamsInputType = {
  pagination?: InputMaybe<PaginationInputType>;
  sort?: InputMaybe<SortInputType>;
  where?: InputMaybe<Array<InputMaybe<WhereInputType>>>;
  whereOperator?: InputMaybe<WhereOperatorEnum>;
};

/** This represents pengurus bidang entity */
export type PengurusBidangType = {
  __typename?: 'PengurusBidangType';
  classYear?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  jabatan?: Maybe<JabatanType>;
  nim?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  photoChecksum?: Maybe<Scalars['String']>;
  photoMimeType?: Maybe<Scalars['String']>;
  photoPath?: Maybe<Scalars['String']>;
  photoSize?: Maybe<Scalars['String']>;
  title?: Maybe<TitlePengurusBidang>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
};

/** This represents pengurus harian entity */
export type PengurusHarianType = {
  __typename?: 'PengurusHarianType';
  classYear?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  jabatan?: Maybe<JabatanType>;
  nim?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  photoChecksum?: Maybe<Scalars['String']>;
  photoMimeType?: Maybe<Scalars['String']>;
  photoPath?: Maybe<Scalars['String']>;
  photoSize?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
  urutan?: Maybe<Scalars['Int']>;
};

/** This represents pengurus sub bidang entity */
export type PengurusSubBidangType = {
  __typename?: 'PengurusSubBidangType';
  classYear?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  jabatan?: Maybe<JabatanType>;
  nim?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  photoChecksum?: Maybe<Scalars['String']>;
  photoMimeType?: Maybe<Scalars['String']>;
  photoPath?: Maybe<Scalars['String']>;
  photoSize?: Maybe<Scalars['String']>;
  title?: Maybe<TitlePengurusSubBidang>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
};

/** This represents a Profile Alamat Input Type */
export type ProfileAlamatInputType = {
  alamat?: InputMaybe<Scalars['String']>;
  kode_desa?: InputMaybe<Scalars['String']>;
  kode_kabupaten?: InputMaybe<Scalars['String']>;
  kode_kecamatan?: InputMaybe<Scalars['String']>;
  kode_pos?: InputMaybe<Scalars['String']>;
  kode_provinsi?: InputMaybe<Scalars['String']>;
  nama_negara: Scalars['String'];
};

/** This represents a Profile Biodata Input Type */
export type ProfileBiodataInputType = {
  classYear?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fullName: Scalars['String'];
  gender?: InputMaybe<Scalars['String']>;
  kewarganegaraan?: InputMaybe<KewarganegaraanEnum>;
  nickName?: InputMaybe<Scalars['String']>;
  nim?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  photoPath?: InputMaybe<Scalars['Upload']>;
  prefixTitle?: InputMaybe<Scalars['String']>;
  suffixTitle?: InputMaybe<Scalars['String']>;
  tanggal_lahir?: InputMaybe<Scalars['String']>;
  tempat_lahir?: InputMaybe<Scalars['String']>;
};

/** This represents a Profile Pekerjaan Input Type */
export type ProfilePekerjaanInputType = {
  alamat_instansi_perusahaan?: InputMaybe<Scalars['String']>;
  jabatan_pekerjaan?: InputMaybe<Scalars['String']>;
  jenis_pekerjaan: Scalars['String'];
  nama_instansi_perusahaan?: InputMaybe<Scalars['String']>;
};

/** This represents Provinsi entity */
export type ProvinsiType = {
  __typename?: 'ProvinsiType';
  kode_provinsi?: Maybe<Scalars['String']>;
  nama_negara?: Maybe<Scalars['String']>;
  nama_provinsi?: Maybe<Scalars['String']>;
  negara?: Maybe<NegaraType>;
};

/** This represents a RangeYearInputType */
export type RangeYearInputType = {
  endYear: Scalars['Int'];
  startYear: Scalars['Int'];
};

/** This represents a ReturnDataType */
export type ReturnDataActivitiesType = {
  __typename?: 'ReturnDataActivitiesType';
  data?: Maybe<Array<Maybe<ActivitiesType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataType */
export type ReturnDataAlumniBusinessesType = {
  __typename?: 'ReturnDataAlumniBusinessesType';
  data?: Maybe<Array<Maybe<AlumniBusinessesType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataType */
export type ReturnDataArticlesType = {
  __typename?: 'ReturnDataArticlesType';
  data?: Maybe<Array<Maybe<ArticlesType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataType */
export type ReturnDataBidangType = {
  __typename?: 'ReturnDataBidangType';
  data?: Maybe<Array<Maybe<BidangType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataType */
export type ReturnDataDesaType = {
  __typename?: 'ReturnDataDesaType';
  data?: Maybe<Array<Maybe<DesaType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataType */
export type ReturnDataDewanPengawasType = {
  __typename?: 'ReturnDataDewanPengawasType';
  data?: Maybe<Array<Maybe<DewanPengawasType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataType */
export type ReturnDataFinalProjectsType = {
  __typename?: 'ReturnDataFinalProjectsType';
  data?: Maybe<Array<Maybe<FinalProjectsType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataType */
export type ReturnDataJabatanType = {
  __typename?: 'ReturnDataJabatanType';
  data?: Maybe<Array<Maybe<JabatanType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataType */
export type ReturnDataKabupatenType = {
  __typename?: 'ReturnDataKabupatenType';
  data?: Maybe<Array<Maybe<KabupatenType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataType */
export type ReturnDataKecamatanType = {
  __typename?: 'ReturnDataKecamatanType';
  data?: Maybe<Array<Maybe<KecamatanType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataKetuaIkatType */
export type ReturnDataKetuaIkatType = {
  __typename?: 'ReturnDataKetuaIkatType';
  data?: Maybe<Array<Maybe<KetuaIkataType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataType */
export type ReturnDataKontakKamiType = {
  __typename?: 'ReturnDataKontakKamiType';
  data?: Maybe<Array<Maybe<KontakKamiType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataKoordinatorWilayahType */
export type ReturnDataKoordinatorWilayahType = {
  __typename?: 'ReturnDataKoordinatorWilayahType';
  data?: Maybe<Array<Maybe<KoordinatorWilayahType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataType */
export type ReturnDataMerchandiseAdvanceType = {
  __typename?: 'ReturnDataMerchandiseAdvanceType';
  data?: Maybe<Array<Maybe<MerchandisesType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataType */
export type ReturnDataMerchandiseCategoryType = {
  __typename?: 'ReturnDataMerchandiseCategoryType';
  data?: Maybe<Array<Maybe<MerchandiseCategoryType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataType */
export type ReturnDataMerchandisesType = {
  __typename?: 'ReturnDataMerchandisesType';
  data?: Maybe<Array<Maybe<MerchandisesType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataType */
export type ReturnDataNegaraType = {
  __typename?: 'ReturnDataNegaraType';
  data?: Maybe<Array<Maybe<NegaraType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataType */
export type ReturnDataNewsType = {
  __typename?: 'ReturnDataNewsType';
  data?: Maybe<Array<Maybe<NewsType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataType */
export type ReturnDataPengurusHarianType = {
  __typename?: 'ReturnDataPengurusHarianType';
  data?: Maybe<Array<Maybe<PengurusHarianType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataType */
export type ReturnDataProvinsiType = {
  __typename?: 'ReturnDataProvinsiType';
  data?: Maybe<Array<Maybe<ProvinsiType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataType */
export type ReturnDataScholarshipsType = {
  __typename?: 'ReturnDataScholarshipsType';
  data?: Maybe<Array<Maybe<ScholarshipsType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataSlidersType */
export type ReturnDataSlidersType = {
  __typename?: 'ReturnDataSlidersType';
  data?: Maybe<Array<Maybe<SliderType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataType */
export type ReturnDataSubBidangType = {
  __typename?: 'ReturnDataSubBidangType';
  data?: Maybe<Array<Maybe<SubBidangType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataType */
export type ReturnDataVacanciesType = {
  __typename?: 'ReturnDataVacanciesType';
  data?: Maybe<Array<Maybe<VacanciesType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents a ReturnDataType */
export type ReturnDataWilayahType = {
  __typename?: 'ReturnDataWilayahType';
  data?: Maybe<Array<Maybe<WilayahType>>>;
  meta?: Maybe<MetadataType>;
};

/** This represents tentang kami entity */
export type SambutanKetuaType = {
  __typename?: 'SambutanKetuaType';
  classYear?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
  photoChecksum?: Maybe<Scalars['String']>;
  photoMimeType?: Maybe<Scalars['String']>;
  photoPath?: Maybe<Scalars['String']>;
  photoSize?: Maybe<Scalars['String']>;
};

/** This represents Scholarships Type entity */
export type ScholarshipsType = {
  __typename?: 'ScholarshipsType';
  amount?: Maybe<Scalars['Int']>;
  companyCity?: Maybe<Scalars['String']>;
  companyEmail?: Maybe<Scalars['String']>;
  companyLogoChecksum?: Maybe<Scalars['String']>;
  companyLogoMimeType?: Maybe<Scalars['String']>;
  companyLogoPath?: Maybe<Scalars['String']>;
  companyLogoSize?: Maybe<Scalars['Int']>;
  companyName?: Maybe<Scalars['String']>;
  companyProfile?: Maybe<Scalars['String']>;
  companyUserName?: Maybe<Scalars['String']>;
  companyUserPhone?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  expiredDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  notes?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  rules?: Maybe<RulesScholarships>;
  status?: Maybe<StatusScholarships>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
  views?: Maybe<Scalars['Int']>;
};

/** This represents slider entity */
export type SliderType = {
  __typename?: 'SliderType';
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  id?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  photoChecksum?: Maybe<Scalars['String']>;
  photoMimeType?: Maybe<Scalars['String']>;
  photoPath?: Maybe<Scalars['String']>;
  photoSize?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
  urutan?: Maybe<Scalars['Int']>;
};

/** This represents a SortInputType */
export type SortInputType = {
  field?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<OrderEnum>;
};

/** This represents sub bidang entity */
export type SubBidangType = {
  __typename?: 'SubBidangType';
  bidang?: Maybe<BidangTypeFromSubBidang>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  pengurus?: Maybe<Array<Maybe<PengurusSubBidangType>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
  urutan?: Maybe<Scalars['Int']>;
};

/** This represents tentang jurusan entity */
export type TentangJurusanType = {
  __typename?: 'TentangJurusanType';
  content?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
};

/** This represents tentang kami entity */
export type TentangKamiType = {
  __typename?: 'TentangKamiType';
  content?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
};

/** This represents a validity token forgot password */
export type TokenForgotPassword = {
  __typename?: 'TokenForgotPassword';
  isValid?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** This represents a User */
export type User = {
  __typename?: 'User';
  alamat?: Maybe<Scalars['String']>;
  alamat_instansi_perusahaan?: Maybe<Scalars['String']>;
  classYear?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  desa?: Maybe<DesaType>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['ID']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  jabatan_pekerjaan?: Maybe<Scalars['String']>;
  jenis_pekerjaan?: Maybe<Scalars['String']>;
  kabupaten?: Maybe<KabupatenType>;
  kecamatan?: Maybe<KecamatanType>;
  kewarganegaraan?: Maybe<Kewarganegaraan>;
  kode_desa?: Maybe<Scalars['String']>;
  kode_kabupaten?: Maybe<Scalars['String']>;
  kode_kecamatan?: Maybe<Scalars['String']>;
  kode_pos?: Maybe<Scalars['Int']>;
  kode_provinsi?: Maybe<Scalars['String']>;
  koperasi_registered_at?: Maybe<Scalars['String']>;
  koperasi_status_anggota?: Maybe<KoperasiStatusAnggota>;
  koperasi_verified_at?: Maybe<Scalars['String']>;
  koperasi_verified_by?: Maybe<Admin>;
  nama_instansi_perusahaan?: Maybe<Scalars['String']>;
  nama_negara?: Maybe<Scalars['String']>;
  negara?: Maybe<NegaraType>;
  nickName?: Maybe<Scalars['String']>;
  nim?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  photoChecksum?: Maybe<Scalars['String']>;
  photoMimeType?: Maybe<Scalars['String']>;
  photoPath?: Maybe<Scalars['String']>;
  photoSize?: Maybe<Scalars['String']>;
  prefixTitle?: Maybe<Scalars['String']>;
  provinsi?: Maybe<ProvinsiType>;
  subscription_2022_paid?: Maybe<Scalars['Boolean']>;
  subscription_2023_paid?: Maybe<Scalars['Boolean']>;
  subscription_2024_paid?: Maybe<Scalars['Boolean']>;
  subscription_2025_paid?: Maybe<Scalars['Boolean']>;
  suffixTitle?: Maybe<Scalars['String']>;
  tanggal_lahir?: Maybe<Scalars['String']>;
  tempat_lahir?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updateSubscriptionBy?: Maybe<Admin>;
  update_subscription_at?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
};

/** This represents a token sent to email */
export type UserInputCheckToken = {
  token: Scalars['String'];
};

/** This represents a email address for sent a token */
export type UserInputForgotPassword = {
  email: Scalars['String'];
};

/** This represents a UserInputType */
export type UserInputTypeLogi = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** This represents a UserInputType */
export type UserInputTypeRegiste = {
  classYear: Scalars['Int'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  gender: GenderEnum;
  nickName: Scalars['String'];
  nim: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  prefixTitle?: InputMaybe<Scalars['String']>;
  suffixTitle?: InputMaybe<Scalars['String']>;
};

/** This represents a token and password */
export type UserInputUpdatePassword = {
  password: Scalars['String'];
  token: Scalars['String'];
};

/** This represents vacancies entity */
export type VacanciesType = {
  __typename?: 'VacanciesType';
  amount?: Maybe<Scalars['Int']>;
  companyCity?: Maybe<Scalars['String']>;
  companyEmail?: Maybe<Scalars['String']>;
  companyLogoChecksum?: Maybe<Scalars['String']>;
  companyLogoMimeType?: Maybe<Scalars['String']>;
  companyLogoPath?: Maybe<Scalars['String']>;
  companyLogoSize?: Maybe<Scalars['Int']>;
  companyName?: Maybe<Scalars['String']>;
  companyProfile?: Maybe<Scalars['String']>;
  companyUserName?: Maybe<Scalars['String']>;
  companyUserPhone?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  expiredDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  notes?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  rules?: Maybe<RulesVacancies>;
  status?: Maybe<StatusVacancies>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
  views?: Maybe<Scalars['Int']>;
};

/** This represents tentang Nomor Whatsapp Merchandise entity */
export type WhatsappMerchandiseType = {
  __typename?: 'WhatsappMerchandiseType';
  nomor?: Maybe<Scalars['String']>;
};

/** This represents a WhereAdvanceInputType */
export type WhereAdvanceInputType = {
  and?: InputMaybe<Array<InputMaybe<WhereInputType>>>;
  or?: InputMaybe<Array<InputMaybe<WhereInputType>>>;
};

/** This represents a WhereInputType */
export type WhereInputType = {
  comparator?: InputMaybe<ComparatorEnum>;
  field: Scalars['String'];
  value: Scalars['String'];
};

/** This represents wilayah entity */
export type WilayahType = {
  __typename?: 'WilayahType';
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  createdByAdmin?: Maybe<Admin>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  deletedByAdmin?: Maybe<Admin>;
  id?: Maybe<Scalars['ID']>;
  koordinator?: Maybe<Array<Maybe<KoordinatorWilayahType>>>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  updatedByAdmin?: Maybe<Admin>;
};

/** This represents wilayah entity */
export type WilayahTypeFromKoordinator = {
  __typename?: 'WilayahTypeFromKoordinator';
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
};

export enum Category {
  Ilmiah = 'Ilmiah',
  NonIlmiah = 'NonIlmiah'
}

export enum ComparatorEnum {
  Equal = 'EQUAL',
  Like = 'LIKE'
}

export enum Gender {
  Pria = 'Pria',
  Wanita = 'Wanita'
}

export enum GenderEnum {
  Pria = 'Pria',
  Wanita = 'Wanita'
}

export enum Kewarganegaraan {
  Wna = 'WNA',
  Wni = 'WNI'
}

export enum KewarganegaraanEnum {
  Wna = 'WNA',
  Wni = 'WNI'
}

export enum KoperasiStatusAnggota {
  Registered = 'Registered',
  Verified = 'Verified'
}

export enum OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** This is the root mutation which holds all possible WRITE entrypoints for the GraphQL API */
export type RootMutation = {
  __typename?: 'rootMutation';
  /** The mutation for profil alamat */
  ProfileAlamatMutation?: Maybe<User>;
  /** The mutation for profil biodata */
  ProfileBiodataMutation?: Maybe<User>;
  /** The mutation for profil pekerjaan */
  ProfilePekerjaanMutation?: Maybe<User>;
  /** The mutation that allows guest to request forgot password link token */
  forgotPassword?: Maybe<TokenForgotPassword>;
  /** The mutation that allows guest to login */
  login?: Maybe<User>;
  /** The mutation that allows guest to register */
  register?: Maybe<User>;
  /** The mutation for create Kontak Kami */
  sentKontakKami?: Maybe<SentKontakKamiType>;
  /** The mutation that allows guest to login */
  updatePassword?: Maybe<TokenForgotPassword>;
};


/** This is the root mutation which holds all possible WRITE entrypoints for the GraphQL API */
export type RootMutationProfileAlamatMutationArgs = {
  ProfileAlamatInput?: InputMaybe<ProfileAlamatInputType>;
};


/** This is the root mutation which holds all possible WRITE entrypoints for the GraphQL API */
export type RootMutationProfileBiodataMutationArgs = {
  ProfileBiodataInput?: InputMaybe<ProfileBiodataInputType>;
};


/** This is the root mutation which holds all possible WRITE entrypoints for the GraphQL API */
export type RootMutationProfilePekerjaanMutationArgs = {
  ProfilePekerjaanInput?: InputMaybe<ProfilePekerjaanInputType>;
};


/** This is the root mutation which holds all possible WRITE entrypoints for the GraphQL API */
export type RootMutationForgotPasswordArgs = {
  user?: InputMaybe<UserInputForgotPassword>;
};


/** This is the root mutation which holds all possible WRITE entrypoints for the GraphQL API */
export type RootMutationLoginArgs = {
  user?: InputMaybe<UserInputTypeLogi>;
};


/** This is the root mutation which holds all possible WRITE entrypoints for the GraphQL API */
export type RootMutationRegisterArgs = {
  user?: InputMaybe<UserInputTypeRegiste>;
};


/** This is the root mutation which holds all possible WRITE entrypoints for the GraphQL API */
export type RootMutationSentKontakKamiArgs = {
  kontakKamiInput?: InputMaybe<KontakKamiInputType>;
};


/** This is the root mutation which holds all possible WRITE entrypoints for the GraphQL API */
export type RootMutationUpdatePasswordArgs = {
  user?: InputMaybe<UserInputUpdatePassword>;
};

/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQuery = {
  __typename?: 'rootQuery';
  getActivities?: Maybe<ReturnDataActivitiesType>;
  getActivityDetail?: Maybe<ActivitiesType>;
  getAlumniBusinessDetail?: Maybe<AlumniBusinessesType>;
  getAlumniBusinesses?: Maybe<ReturnDataAlumniBusinessesType>;
  getArticleDetail?: Maybe<ArticlesType>;
  getArticles?: Maybe<ReturnDataArticlesType>;
  getBidang?: Maybe<ReturnDataBidangType>;
  getBidangDetail?: Maybe<BidangType>;
  getDesa?: Maybe<ReturnDataDesaType>;
  getDesaDetail?: Maybe<DesaType>;
  getDewanPengawas?: Maybe<ReturnDataDewanPengawasType>;
  getDewanPengawasDetail?: Maybe<DewanPengawasType>;
  getFinalProjectDetail?: Maybe<FinalProjectsType>;
  getFinalProjects?: Maybe<ReturnDataFinalProjectsType>;
  getFooter?: Maybe<FooterType>;
  getForgotPasswordToken?: Maybe<TokenForgotPassword>;
  getJabatan?: Maybe<ReturnDataJabatanType>;
  getJabatanDetail?: Maybe<JabatanType>;
  getKabupaten?: Maybe<ReturnDataKabupatenType>;
  getKabupatenDetail?: Maybe<KabupatenType>;
  getKecamatan?: Maybe<ReturnDataKecamatanType>;
  getKecamatanDetail?: Maybe<KecamatanType>;
  getKetuaIkata?: Maybe<ReturnDataKetuaIkatType>;
  getKetuaIkataDetail?: Maybe<KetuaIkataType>;
  getKontakKami?: Maybe<ReturnDataKontakKamiType>;
  getKontakKamiDetail?: Maybe<KontakKamiDetailType>;
  getKoordinatorAngkatan?: Maybe<Array<Maybe<KoordinatorAngkatanType>>>;
  getKoordinatorWilayah?: Maybe<ReturnDataKoordinatorWilayahType>;
  getKoordinatorWilayahDetail?: Maybe<KoordinatorWilayahType>;
  getMerchandiseAdvance?: Maybe<ReturnDataMerchandiseAdvanceType>;
  getMerchandiseCategory?: Maybe<ReturnDataMerchandiseCategoryType>;
  getMerchandiseCategoryDetail?: Maybe<MerchandiseCategoryType>;
  getMerchandiseDetail?: Maybe<MerchandisesType>;
  getMerchandises?: Maybe<ReturnDataMerchandisesType>;
  getNegara?: Maybe<ReturnDataNegaraType>;
  getNegaraDetail?: Maybe<NegaraType>;
  getNews?: Maybe<ReturnDataNewsType>;
  getNewsDetail?: Maybe<NewsType>;
  getPengurusHarian?: Maybe<ReturnDataPengurusHarianType>;
  getPengurusHarianDetail?: Maybe<PengurusHarianType>;
  getProfile?: Maybe<User>;
  getProvinsi?: Maybe<ReturnDataProvinsiType>;
  getProvinsiDetail?: Maybe<ProvinsiType>;
  getSambutanKetua?: Maybe<SambutanKetuaType>;
  getScholarshipDetail?: Maybe<ScholarshipsType>;
  getScholarships?: Maybe<ReturnDataScholarshipsType>;
  getSliders?: Maybe<ReturnDataSlidersType>;
  getSubBidang?: Maybe<ReturnDataSubBidangType>;
  getSubBidangDetail?: Maybe<SubBidangType>;
  getTentangJurusan?: Maybe<TentangJurusanType>;
  getTentangKami?: Maybe<TentangKamiType>;
  getVacancies?: Maybe<ReturnDataVacanciesType>;
  getVacancyDetail?: Maybe<VacanciesType>;
  getWhatsappMerchandise?: Maybe<WhatsappMerchandiseType>;
  getWilayah?: Maybe<ReturnDataWilayahType>;
  getWilayahDetail?: Maybe<WilayahType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetActivitiesArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetActivityDetailArgs = {
  id: Scalars['String'];
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetAlumniBusinessDetailArgs = {
  id: Scalars['String'];
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetAlumniBusinessesArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetArticleDetailArgs = {
  id: Scalars['String'];
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetArticlesArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetBidangArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetBidangDetailArgs = {
  id: Scalars['String'];
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetDesaArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetDesaDetailArgs = {
  id: Scalars['String'];
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetDewanPengawasArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetDewanPengawasDetailArgs = {
  id: Scalars['String'];
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetFinalProjectDetailArgs = {
  id: Scalars['String'];
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetFinalProjectsArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetForgotPasswordTokenArgs = {
  user?: InputMaybe<UserInputCheckToken>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetJabatanArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetJabatanDetailArgs = {
  id: Scalars['String'];
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetKabupatenArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetKabupatenDetailArgs = {
  id: Scalars['String'];
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetKecamatanArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetKecamatanDetailArgs = {
  id: Scalars['String'];
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetKetuaIkataArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetKetuaIkataDetailArgs = {
  id: Scalars['String'];
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetKontakKamiArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetKontakKamiDetailArgs = {
  id: Scalars['String'];
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetKoordinatorAngkatanArgs = {
  params?: InputMaybe<RangeYearInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetKoordinatorWilayahArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetKoordinatorWilayahDetailArgs = {
  id: Scalars['String'];
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetMerchandiseAdvanceArgs = {
  params?: InputMaybe<ParamsAdvanceInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetMerchandiseCategoryArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetMerchandiseCategoryDetailArgs = {
  id: Scalars['String'];
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetMerchandiseDetailArgs = {
  id: Scalars['String'];
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetMerchandisesArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetNegaraArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetNegaraDetailArgs = {
  id: Scalars['String'];
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetNewsArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetNewsDetailArgs = {
  id: Scalars['String'];
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetPengurusHarianArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetPengurusHarianDetailArgs = {
  id: Scalars['String'];
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetProvinsiArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetProvinsiDetailArgs = {
  id: Scalars['String'];
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetScholarshipDetailArgs = {
  id: Scalars['String'];
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetScholarshipsArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetSlidersArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetSubBidangArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetSubBidangDetailArgs = {
  id: Scalars['String'];
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetVacanciesArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetVacancyDetailArgs = {
  id: Scalars['String'];
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetWilayahArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetWilayahDetailArgs = {
  id: Scalars['String'];
};

export enum RulesActivities {
  Everyone = 'Everyone',
  Registered = 'Registered',
  Verified = 'Verified'
}

export enum RulesArticles {
  Everyone = 'Everyone',
  Registered = 'Registered',
  Verified = 'Verified'
}

export enum RulesFinalProjects {
  Everyone = 'Everyone',
  Registered = 'Registered',
  Verified = 'Verified'
}

export enum RulesNews {
  Everyone = 'Everyone',
  Registered = 'Registered',
  Verified = 'Verified'
}

export enum RulesScholarships {
  Everyone = 'Everyone',
  Registered = 'Registered',
  Verified = 'Verified'
}

export enum RulesVacancies {
  Everyone = 'Everyone',
  Registered = 'Registered',
  Verified = 'Verified'
}

/** This represents kontak kami entity */
export type SentKontakKamiType = {
  __typename?: 'sentKontakKamiType';
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
};

export enum StatusActivities {
  Deleted = 'Deleted',
  Draft = 'Draft',
  Published = 'Published'
}

export enum StatusAlumniBusinesses {
  Deleted = 'Deleted',
  Draft = 'Draft',
  Published = 'Published'
}

export enum StatusArticles {
  Deleted = 'Deleted',
  Draft = 'Draft',
  Published = 'Published'
}

export enum StatusDewanPengawas {
  Deleted = 'Deleted',
  Draft = 'Draft',
  Published = 'Published'
}

export enum StatusFinalProjects {
  Deleted = 'Deleted',
  Draft = 'Draft',
  Expired = 'Expired',
  Published = 'Published'
}

export enum StatusKoordinatorAngkatan {
  Deleted = 'Deleted',
  Draft = 'Draft',
  Published = 'Published'
}

export enum StatusKoordinatorWilayah {
  Deleted = 'Deleted',
  Draft = 'Draft',
  Published = 'Published'
}

export enum StatusMerchandises {
  Draft = 'Draft',
  OutOfStock = 'OutOfStock',
  Published = 'Published'
}

export enum StatusNews {
  Deleted = 'Deleted',
  Draft = 'Draft',
  Published = 'Published'
}

export enum StatusScholarships {
  Deleted = 'Deleted',
  Draft = 'Draft',
  Expired = 'Expired',
  Published = 'Published'
}

export enum StatusVacancies {
  Deleted = 'Deleted',
  Draft = 'Draft',
  Expired = 'Expired',
  Published = 'Published'
}

export enum TitleDewanPengawas {
  Anggota = 'Anggota',
  Ketua = 'Ketua'
}

export enum TitlePengurusBidang {
  Anggota = 'Anggota',
  Ketua = 'Ketua',
  Sekretaris = 'Sekretaris'
}

export enum TitlePengurusSubBidang {
  Anggota = 'Anggota',
  Ketua = 'Ketua'
}

export enum WhereOperatorEnum {
  And = 'AND',
  Or = 'OR'
}

export type BasicAuthUserFragment = { __typename?: 'User', id?: string | null, fullName?: string | null, nickName?: string | null, token?: string | null };

export type SetAddressMutationVariables = Exact<{
  ProfileAlamatInput?: InputMaybe<ProfileAlamatInputType>;
}>;


export type SetAddressMutation = { __typename?: 'rootMutation', ProfileAlamatMutation?: { __typename?: 'User', alamat?: string | null, fullName?: string | null, nama_negara?: string | null } | null };

export type SetBiodataMutationVariables = Exact<{
  ProfileBiodataInput?: InputMaybe<ProfileBiodataInputType>;
}>;


export type SetBiodataMutation = { __typename?: 'rootMutation', ProfileBiodataMutation?: { __typename?: 'User', id?: string | null, nickName?: string | null, kewarganegaraan?: Kewarganegaraan | null, tanggal_lahir?: string | null } | null };

export type ForgotPasswordMutationVariables = Exact<{
  user: UserInputForgotPassword;
}>;


export type ForgotPasswordMutation = { __typename?: 'rootMutation', forgotPassword?: { __typename?: 'TokenForgotPassword', status?: string | null, isValid?: boolean | null, token?: string | null } | null };

export type LoginMutationVariables = Exact<{
  user: UserInputTypeLogi;
}>;


export type LoginMutation = { __typename?: 'rootMutation', login?: { __typename?: 'User', id?: string | null, fullName?: string | null, nickName?: string | null, token?: string | null } | null };

export type SetOccupationMutationVariables = Exact<{
  ProfilePekerjaanInput?: InputMaybe<ProfilePekerjaanInputType>;
}>;


export type SetOccupationMutation = { __typename?: 'rootMutation', ProfilePekerjaanMutation?: { __typename?: 'User', alamat_instansi_perusahaan?: string | null, jabatan_pekerjaan?: string | null, jenis_pekerjaan?: string | null, nama_instansi_perusahaan?: string | null } | null };

export type RegisterMutationVariables = Exact<{
  user?: InputMaybe<UserInputTypeRegiste>;
}>;


export type RegisterMutation = { __typename?: 'rootMutation', register?: { __typename?: 'User', id?: string | null, email?: string | null, token?: string | null } | null };

export type SentKontakKamiMutationVariables = Exact<{
  kontakKamiInput: KontakKamiInputType;
}>;


export type SentKontakKamiMutation = { __typename?: 'rootMutation', sentKontakKami?: { __typename?: 'sentKontakKamiType', id?: string | null, name?: string | null, email?: string | null, phone?: string | null, message?: string | null } | null };

export type UpdatePasswordMutationVariables = Exact<{
  user: UserInputUpdatePassword;
}>;


export type UpdatePasswordMutation = { __typename?: 'rootMutation', updatePassword?: { __typename?: 'TokenForgotPassword', status?: string | null, isValid?: boolean | null, token?: string | null } | null };

export type GetTentangKamiQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTentangKamiQuery = { __typename?: 'rootQuery', getTentangKami?: { __typename?: 'TentangKamiType', photo?: string | null, content?: string | null } | null };

export type GetTentangJurusanQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTentangJurusanQuery = { __typename?: 'rootQuery', getTentangJurusan?: { __typename?: 'TentangJurusanType', photo?: string | null, content?: string | null } | null };

export type GetKetuaIkataQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetKetuaIkataQuery = { __typename?: 'rootQuery', getKetuaIkata?: { __typename?: 'ReturnDataKetuaIkatType', data?: Array<{ __typename?: 'KetuaIkataType', id?: string | null, fullName?: string | null, description?: string | null, photoPath?: string | null, classYear?: number | null, period?: string | null, sort?: number | null } | null> | null, meta?: { __typename?: 'MetadataType', count?: number | null, totalCount?: number | null } | null } | null };

export type GetActivitiesQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetActivitiesQuery = { __typename?: 'rootQuery', getActivities?: { __typename?: 'ReturnDataActivitiesType', data?: Array<{ __typename?: 'ActivitiesType', id?: string | null, title?: string | null, publishedDate?: string | null, description?: string | null, thumbnailPath?: string | null } | null> | null, meta?: { __typename?: 'MetadataType', count?: number | null, totalCount?: number | null } | null } | null };

export type GetActivityDetailQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetActivityDetailQuery = { __typename?: 'rootQuery', getActivityDetail?: { __typename?: 'ActivitiesType', id?: string | null, title?: string | null, publishedDate?: string | null, content?: string | null, rules?: RulesActivities | null } | null };

export type GetProvinsiQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetProvinsiQuery = { __typename?: 'rootQuery', getProvinsi?: { __typename?: 'ReturnDataProvinsiType', data?: Array<{ __typename?: 'ProvinsiType', kode_provinsi?: string | null, nama_provinsi?: string | null } | null> | null } | null };

export type GetKabupatenQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetKabupatenQuery = { __typename?: 'rootQuery', getKabupaten?: { __typename?: 'ReturnDataKabupatenType', data?: Array<{ __typename?: 'KabupatenType', kode_kabupaten?: string | null, nama_kabupaten?: string | null } | null> | null } | null };

export type GetKecamatanQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetKecamatanQuery = { __typename?: 'rootQuery', getKecamatan?: { __typename?: 'ReturnDataKecamatanType', data?: Array<{ __typename?: 'KecamatanType', kode_kecamatan?: string | null, nama_kecamatan?: string | null } | null> | null } | null };

export type GetDesaQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetDesaQuery = { __typename?: 'rootQuery', getDesa?: { __typename?: 'ReturnDataDesaType', data?: Array<{ __typename?: 'DesaType', kode_desa?: string | null, nama_desa?: string | null } | null> | null } | null };

export type GetNegaraQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetNegaraQuery = { __typename?: 'rootQuery', getNegara?: { __typename?: 'ReturnDataNegaraType', data?: Array<{ __typename?: 'NegaraType', name?: string | null } | null> | null } | null };

export type GetAlumniBusinessesQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetAlumniBusinessesQuery = { __typename?: 'rootQuery', getAlumniBusinesses?: { __typename?: 'ReturnDataAlumniBusinessesType', data?: Array<{ __typename?: 'AlumniBusinessesType', id?: string | null, title?: string | null, thumbnailPath?: string | null, publishedDate?: string | null, ownerName?: string | null, provinsi?: { __typename?: 'ProvinsiType', nama_provinsi?: string | null } | null } | null> | null, meta?: { __typename?: 'MetadataType', totalCount?: number | null, count?: number | null } | null } | null };

export type GetAlumniBusinessDetailQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetAlumniBusinessDetailQuery = { __typename?: 'rootQuery', getAlumniBusinessDetail?: { __typename?: 'AlumniBusinessesType', id?: string | null, title?: string | null, content?: string | null, alamat?: string | null, kontak_whatsapp?: string | null, kontak_email?: string | null, ownerName?: string | null, ownerClassYear?: number | null } | null };

export type GetArticlesQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetArticlesQuery = { __typename?: 'rootQuery', getArticles?: { __typename?: 'ReturnDataArticlesType', data?: Array<{ __typename?: 'ArticlesType', id?: string | null, title?: string | null, description?: string | null, thumbnailPath?: string | null, publishedDate?: string | null, category?: Category | null } | null> | null, meta?: { __typename?: 'MetadataType', count?: number | null, totalCount?: number | null } | null } | null };

export type GetArticleDetailQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetArticleDetailQuery = { __typename?: 'rootQuery', getArticleDetail?: { __typename?: 'ArticlesType', id?: string | null, title?: string | null, publishedDate?: string | null, content?: string | null, author?: string | null, rules?: RulesArticles | null } | null };

export type GetFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFooterQuery = { __typename?: 'rootQuery', getFooter?: { __typename?: 'FooterType', appName?: string | null, name?: string | null, logo?: string | null, address?: string | null, youtubeUrl?: string | null, instagramUrl?: string | null, emailAddress?: string | null, phoneNumber?: string | null } | null };

export type GetDewanPengawasQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetDewanPengawasQuery = { __typename?: 'rootQuery', getDewanPengawas?: { __typename?: 'ReturnDataDewanPengawasType', data?: Array<{ __typename?: 'DewanPengawasType', id?: string | null, title?: TitleDewanPengawas | null, fullName?: string | null, email?: string | null, classYear?: number | null, photoPath?: string | null, jabatan?: { __typename?: 'JabatanType', id?: string | null, name?: string | null } | null } | null> | null } | null };

export type GetBidangQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetBidangQuery = { __typename?: 'rootQuery', getBidang?: { __typename?: 'ReturnDataBidangType', data?: Array<{ __typename?: 'BidangType', id?: string | null, name?: string | null, urutan?: number | null } | null> | null } | null };

export type GetWilayahQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetWilayahQuery = { __typename?: 'rootQuery', getWilayah?: { __typename?: 'ReturnDataWilayahType', data?: Array<{ __typename?: 'WilayahType', id?: string | null, name?: string | null } | null> | null } | null };

export type GetWilayahDetailQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetWilayahDetailQuery = { __typename?: 'rootQuery', getWilayahDetail?: { __typename?: 'WilayahType', id?: string | null, name?: string | null, koordinator?: Array<{ __typename?: 'KoordinatorWilayahType', id?: string | null, fullName?: string | null, photoPath?: string | null, email?: string | null, classYear?: number | null, title?: string | null, jabatan?: { __typename?: 'JabatanType', id?: string | null, name?: string | null } | null } | null> | null } | null };

export type GetBidangDetailQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetBidangDetailQuery = { __typename?: 'rootQuery', getBidangDetail?: { __typename?: 'BidangType', id?: string | null, name?: string | null, pengurus?: Array<{ __typename?: 'PengurusBidangType', id?: string | null, fullName?: string | null, photoPath?: string | null, email?: string | null, title?: TitlePengurusBidang | null, classYear?: number | null, jabatan?: { __typename?: 'JabatanType', id?: string | null, name?: string | null } | null } | null> | null, subBidang?: Array<{ __typename?: 'SubBidangType', id?: string | null, name?: string | null, pengurus?: Array<{ __typename?: 'PengurusSubBidangType', id?: string | null, fullName?: string | null, photoPath?: string | null, email?: string | null, title?: TitlePengurusSubBidang | null, classYear?: number | null, jabatan?: { __typename?: 'JabatanType', id?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export type GetKoordinatorAngkatanQueryVariables = Exact<{
  params?: InputMaybe<RangeYearInputType>;
}>;


export type GetKoordinatorAngkatanQuery = { __typename?: 'rootQuery', getKoordinatorAngkatan?: Array<{ __typename?: 'KoordinatorAngkatanType', id?: string | null, fullName?: string | null, email?: string | null, classYear?: number | null, photoPath?: string | null } | null> | null };

export type GetPengurusHarianQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetPengurusHarianQuery = { __typename?: 'rootQuery', getPengurusHarian?: { __typename?: 'ReturnDataPengurusHarianType', data?: Array<{ __typename?: 'PengurusHarianType', id?: string | null, fullName?: string | null, email?: string | null, classYear?: number | null, photoPath?: string | null, title?: string | null, jabatan?: { __typename?: 'JabatanType', id?: string | null, name?: string | null } | null } | null> | null } | null };

export type GetMerchandisesQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetMerchandisesQuery = { __typename?: 'rootQuery', getMerchandises?: { __typename?: 'ReturnDataMerchandisesType', data?: Array<{ __typename?: 'MerchandisesType', id?: string | null, name?: string | null, price?: number | null, description?: string | null, photos?: Array<{ __typename?: 'MerchandisePhotosType', thumbnailPath?: string | null } | null> | null } | null> | null, meta?: { __typename?: 'MetadataType', totalCount?: number | null, count?: number | null } | null } | null };

export type GetMerchandiseDetailQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMerchandiseDetailQuery = { __typename?: 'rootQuery', getMerchandiseDetail?: { __typename?: 'MerchandisesType', id?: string | null, name?: string | null, price?: number | null, publishedDate?: string | null, description?: string | null, stock?: string | null, sku?: string | null, size?: Array<string | null> | null, weight?: string | null, status?: StatusMerchandises | null, category?: string | null, photos?: Array<{ __typename?: 'MerchandisePhotosType', thumbnailPath?: string | null } | null> | null, merchandisecategory?: { __typename?: 'MerchandiseCategoryType', name?: string | null } | null } | null };

export type GetMerchandiseContactQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMerchandiseContactQuery = { __typename?: 'rootQuery', getWhatsappMerchandise?: { __typename?: 'WhatsappMerchandiseType', nomor?: string | null } | null };

export type GetMerchandiseCategoriesQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetMerchandiseCategoriesQuery = { __typename?: 'rootQuery', getMerchandiseCategory?: { __typename?: 'ReturnDataMerchandiseCategoryType', data?: Array<{ __typename?: 'MerchandiseCategoryType', name?: string | null, id?: string | null } | null> | null } | null };

export type GetMerchandiseAdvanceQueryVariables = Exact<{
  params?: InputMaybe<ParamsAdvanceInputType>;
}>;


export type GetMerchandiseAdvanceQuery = { __typename?: 'rootQuery', getMerchandiseAdvance?: { __typename?: 'ReturnDataMerchandiseAdvanceType', data?: Array<{ __typename?: 'MerchandisesType', id?: string | null, name?: string | null, price?: number | null, description?: string | null, status?: StatusMerchandises | null, photos?: Array<{ __typename?: 'MerchandisePhotosType', thumbnailPath?: string | null } | null> | null } | null> | null, meta?: { __typename?: 'MetadataType', count?: number | null, totalCount?: number | null } | null } | null };

export type GetNewsQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetNewsQuery = { __typename?: 'rootQuery', getNews?: { __typename?: 'ReturnDataNewsType', data?: Array<{ __typename?: 'NewsType', id?: string | null, title?: string | null, tags?: string | null, thumbnailPath?: string | null, publishedDate?: string | null } | null> | null, meta?: { __typename?: 'MetadataType', count?: number | null, totalCount?: number | null } | null } | null };

export type GetNewsDetailQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetNewsDetailQuery = { __typename?: 'rootQuery', getNewsDetail?: { __typename?: 'NewsType', id?: string | null, title?: string | null, tags?: string | null, author?: string | null, publishedDate?: string | null, content?: string | null, rules?: RulesNews | null } | null };

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { __typename?: 'rootQuery', getProfile?: { __typename?: 'User', id?: string | null, nickName?: string | null, isVerified?: boolean | null, photoPath?: string | null } | null };

export type GetProfileDetailQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileDetailQuery = { __typename?: 'rootQuery', getProfile?: { __typename?: 'User', fullName?: string | null, nickName?: string | null, prefixTitle?: string | null, suffixTitle?: string | null, kewarganegaraan?: Kewarganegaraan | null, email?: string | null, phone?: string | null, gender?: Gender | null, classYear?: number | null, isVerified?: boolean | null, tempat_lahir?: string | null, tanggal_lahir?: string | null, jenis_pekerjaan?: string | null, jabatan_pekerjaan?: string | null, nama_instansi_perusahaan?: string | null, photoPath?: string | null, alamat_instansi_perusahaan?: string | null, subscription_2022_paid?: boolean | null, subscription_2023_paid?: boolean | null, subscription_2024_paid?: boolean | null, subscription_2025_paid?: boolean | null, kode_provinsi?: string | null, kode_kabupaten?: string | null, kode_desa?: string | null, alamat?: string | null, kode_pos?: number | null, nim?: string | null } | null };

export type GetBiodataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBiodataQuery = { __typename?: 'rootQuery', getProfile?: { __typename?: 'User', fullName?: string | null, nickName?: string | null, nim?: string | null, classYear?: number | null, kewarganegaraan?: Kewarganegaraan | null, tempat_lahir?: string | null, tanggal_lahir?: string | null, email?: string | null, prefixTitle?: string | null, suffixTitle?: string | null, phone?: string | null, gender?: Gender | null } | null };

export type GetAddressQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAddressQuery = { __typename?: 'rootQuery', getProfile?: { __typename?: 'User', kode_provinsi?: string | null, kode_kabupaten?: string | null, kode_kecamatan?: string | null, kode_desa?: string | null, kode_pos?: number | null, alamat?: string | null, nama_negara?: string | null } | null };

export type GetOccupationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOccupationQuery = { __typename?: 'rootQuery', getProfile?: { __typename?: 'User', jenis_pekerjaan?: string | null, nama_instansi_perusahaan?: string | null, jabatan_pekerjaan?: string | null, alamat_instansi_perusahaan?: string | null } | null };

export type GetSambutanKetuaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSambutanKetuaQuery = { __typename?: 'rootQuery', getSambutanKetua?: { __typename?: 'SambutanKetuaType', photoPath?: string | null, fullName?: string | null, period?: string | null, classYear?: number | null, description?: string | null, content?: string | null } | null };

export type GetSlidersQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetSlidersQuery = { __typename?: 'rootQuery', getSliders?: { __typename?: 'ReturnDataSlidersType', data?: Array<{ __typename?: 'SliderType', id?: string | null, photoPath?: string | null } | null> | null } | null };

export type GetForgotPasswordTokenQueryVariables = Exact<{
  user?: InputMaybe<UserInputCheckToken>;
}>;


export type GetForgotPasswordTokenQuery = { __typename?: 'rootQuery', getForgotPasswordToken?: { __typename?: 'TokenForgotPassword', status?: string | null, isValid?: boolean | null, token?: string | null } | null };

export type GetVacanciesQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetVacanciesQuery = { __typename?: 'rootQuery', getVacancies?: { __typename?: 'ReturnDataVacanciesType', data?: Array<{ __typename?: 'VacanciesType', id?: string | null, companyLogoPath?: string | null, companyName?: string | null, amount?: number | null, publishedDate?: string | null, companyCity?: string | null } | null> | null, meta?: { __typename?: 'MetadataType', count?: number | null, totalCount?: number | null } | null } | null };

export type GetVacancyDetailQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetVacancyDetailQuery = { __typename?: 'rootQuery', getVacancyDetail?: { __typename?: 'VacanciesType', id?: string | null, companyLogoPath?: string | null, companyName?: string | null, companyEmail?: string | null, companyCity?: string | null, publishedDate?: string | null, expiredDate?: string | null, content?: string | null, amount?: number | null, notes?: string | null, status?: StatusVacancies | null, rules?: RulesVacancies | null } | null };

export type GetScholarshipsQueryVariables = Exact<{
  params: ParamsInputType;
}>;


export type GetScholarshipsQuery = { __typename?: 'rootQuery', getScholarships?: { __typename?: 'ReturnDataScholarshipsType', data?: Array<{ __typename?: 'ScholarshipsType', id?: string | null, companyLogoPath?: string | null, companyName?: string | null, amount?: number | null, publishedDate?: string | null, companyCity?: string | null } | null> | null, meta?: { __typename?: 'MetadataType', count?: number | null, totalCount?: number | null } | null } | null };

export type GetScholarshipDetailQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetScholarshipDetailQuery = { __typename?: 'rootQuery', getScholarshipDetail?: { __typename?: 'ScholarshipsType', id?: string | null, companyLogoPath?: string | null, companyName?: string | null, companyEmail?: string | null, companyCity?: string | null, publishedDate?: string | null, expiredDate?: string | null, content?: string | null, amount?: number | null, notes?: string | null, status?: StatusScholarships | null, rules?: RulesScholarships | null } | null };

export type GetFinalProjectsQueryVariables = Exact<{
  params: ParamsInputType;
}>;


export type GetFinalProjectsQuery = { __typename?: 'rootQuery', getFinalProjects?: { __typename?: 'ReturnDataFinalProjectsType', data?: Array<{ __typename?: 'FinalProjectsType', id?: string | null, companyLogoPath?: string | null, companyName?: string | null, amount?: number | null, publishedDate?: string | null, companyCity?: string | null } | null> | null, meta?: { __typename?: 'MetadataType', count?: number | null, totalCount?: number | null } | null } | null };

export type GetFinalProjectDetailQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetFinalProjectDetailQuery = { __typename?: 'rootQuery', getFinalProjectDetail?: { __typename?: 'FinalProjectsType', id?: string | null, companyLogoPath?: string | null, companyName?: string | null, companyEmail?: string | null, companyCity?: string | null, publishedDate?: string | null, expiredDate?: string | null, content?: string | null, amount?: number | null, notes?: string | null, status?: StatusFinalProjects | null, rules?: RulesFinalProjects | null } | null };

export const BasicAuthUserFragmentDoc = `
    fragment BasicAuthUser on User {
  id
  fullName
  nickName
  token
}
    `;
export const SetAddressDocument = `
    mutation SetAddress($ProfileAlamatInput: ProfileAlamatInputType) {
  ProfileAlamatMutation(ProfileAlamatInput: $ProfileAlamatInput) {
    alamat
    fullName
    nama_negara
  }
}
    `;
export const SetBiodataDocument = `
    mutation SetBiodata($ProfileBiodataInput: ProfileBiodataInputType) {
  ProfileBiodataMutation(ProfileBiodataInput: $ProfileBiodataInput) {
    id
    nickName
    kewarganegaraan
    tanggal_lahir
  }
}
    `;
export const ForgotPasswordDocument = `
    mutation ForgotPassword($user: UserInputForgotPassword!) {
  forgotPassword(user: $user) {
    status
    isValid
    token
  }
}
    `;
export const LoginDocument = `
    mutation Login($user: UserInputTypeLogi!) {
  login(user: $user) {
    ...BasicAuthUser
  }
}
    ${BasicAuthUserFragmentDoc}`;
export const SetOccupationDocument = `
    mutation SetOccupation($ProfilePekerjaanInput: ProfilePekerjaanInputType) {
  ProfilePekerjaanMutation(ProfilePekerjaanInput: $ProfilePekerjaanInput) {
    alamat_instansi_perusahaan
    jabatan_pekerjaan
    jenis_pekerjaan
    nama_instansi_perusahaan
  }
}
    `;
export const RegisterDocument = `
    mutation Register($user: UserInputTypeRegiste) {
  register(user: $user) {
    id
    email
    token
  }
}
    `;
export const SentKontakKamiDocument = `
    mutation SentKontakKami($kontakKamiInput: KontakKamiInputType!) {
  sentKontakKami(kontakKamiInput: $kontakKamiInput) {
    id
    name
    email
    phone
    message
  }
}
    `;
export const UpdatePasswordDocument = `
    mutation UpdatePassword($user: UserInputUpdatePassword!) {
  updatePassword(user: $user) {
    status
    isValid
    token
  }
}
    `;
export const GetTentangKamiDocument = `
    query GetTentangKami {
  getTentangKami {
    photo
    content
  }
}
    `;
export const GetTentangJurusanDocument = `
    query GetTentangJurusan {
  getTentangJurusan {
    photo
    content
  }
}
    `;
export const GetKetuaIkataDocument = `
    query GetKetuaIkata($params: ParamsInputType) {
  getKetuaIkata(params: $params) {
    data {
      id
      fullName
      description
      photoPath
      classYear
      period
      sort
    }
    meta {
      count
      totalCount
    }
  }
}
    `;
export const GetActivitiesDocument = `
    query GetActivities($params: ParamsInputType) {
  getActivities(params: $params) {
    data {
      id
      title
      publishedDate
      description
      thumbnailPath
    }
    meta {
      count
      totalCount
    }
  }
}
    `;
export const GetActivityDetailDocument = `
    query GetActivityDetail($id: String!) {
  getActivityDetail(id: $id) {
    id
    title
    publishedDate
    content
    rules
  }
}
    `;
export const GetProvinsiDocument = `
    query GetProvinsi($params: ParamsInputType) {
  getProvinsi(params: $params) {
    data {
      kode_provinsi
      nama_provinsi
    }
  }
}
    `;
export const GetKabupatenDocument = `
    query GetKabupaten($params: ParamsInputType) {
  getKabupaten(params: $params) {
    data {
      kode_kabupaten
      nama_kabupaten
    }
  }
}
    `;
export const GetKecamatanDocument = `
    query GetKecamatan($params: ParamsInputType) {
  getKecamatan(params: $params) {
    data {
      kode_kecamatan
      nama_kecamatan
    }
  }
}
    `;
export const GetDesaDocument = `
    query GetDesa($params: ParamsInputType) {
  getDesa(params: $params) {
    data {
      kode_desa
      nama_desa
    }
  }
}
    `;
export const GetNegaraDocument = `
    query GetNegara($params: ParamsInputType) {
  getNegara(params: $params) {
    data {
      name
    }
  }
}
    `;
export const GetAlumniBusinessesDocument = `
    query GetAlumniBusinesses($params: ParamsInputType) {
  getAlumniBusinesses(params: $params) {
    data {
      id
      title
      thumbnailPath
      publishedDate
      ownerName
      provinsi {
        nama_provinsi
      }
    }
    meta {
      totalCount
      count
    }
  }
}
    `;
export const GetAlumniBusinessDetailDocument = `
    query GetAlumniBusinessDetail($id: String!) {
  getAlumniBusinessDetail(id: $id) {
    id
    title
    content
    alamat
    kontak_whatsapp
    kontak_email
    ownerName
    ownerClassYear
  }
}
    `;
export const GetArticlesDocument = `
    query GetArticles($params: ParamsInputType) {
  getArticles(params: $params) {
    data {
      id
      title
      description
      thumbnailPath
      publishedDate
      category
    }
    meta {
      count
      totalCount
    }
  }
}
    `;
export const GetArticleDetailDocument = `
    query GetArticleDetail($id: String!) {
  getArticleDetail(id: $id) {
    id
    title
    publishedDate
    content
    author
    rules
  }
}
    `;
export const GetFooterDocument = `
    query GetFooter {
  getFooter {
    appName
    name
    logo
    address
    youtubeUrl
    instagramUrl
    emailAddress
    phoneNumber
  }
}
    `;
export const GetDewanPengawasDocument = `
    query GetDewanPengawas($params: ParamsInputType) {
  getDewanPengawas(params: $params) {
    data {
      id
      title
      fullName
      email
      classYear
      photoPath
      jabatan {
        id
        name
      }
    }
  }
}
    `;
export const GetBidangDocument = `
    query GetBidang($params: ParamsInputType) {
  getBidang(params: $params) {
    data {
      id
      name
      urutan
    }
  }
}
    `;
export const GetWilayahDocument = `
    query GetWilayah($params: ParamsInputType) {
  getWilayah(params: $params) {
    data {
      id
      name
    }
  }
}
    `;
export const GetWilayahDetailDocument = `
    query GetWilayahDetail($id: String!) {
  getWilayahDetail(id: $id) {
    id
    name
    koordinator {
      id
      fullName
      photoPath
      email
      classYear
      title
      jabatan {
        id
        name
      }
    }
  }
}
    `;
export const GetBidangDetailDocument = `
    query GetBidangDetail($id: String!) {
  getBidangDetail(id: $id) {
    id
    name
    pengurus {
      id
      fullName
      photoPath
      email
      title
      classYear
      jabatan {
        id
        name
      }
    }
    subBidang {
      id
      name
      pengurus {
        id
        fullName
        photoPath
        email
        title
        classYear
        jabatan {
          id
          name
        }
      }
    }
  }
}
    `;
export const GetKoordinatorAngkatanDocument = `
    query GetKoordinatorAngkatan($params: RangeYearInputType) {
  getKoordinatorAngkatan(params: $params) {
    id
    fullName
    email
    classYear
    photoPath
  }
}
    `;
export const GetPengurusHarianDocument = `
    query GetPengurusHarian($params: ParamsInputType) {
  getPengurusHarian(params: $params) {
    data {
      id
      fullName
      email
      classYear
      photoPath
      title
      jabatan {
        id
        name
      }
    }
  }
}
    `;
export const GetMerchandisesDocument = `
    query GetMerchandises($params: ParamsInputType) {
  getMerchandises(params: $params) {
    data {
      id
      name
      price
      description
      photos {
        thumbnailPath
      }
    }
    meta {
      totalCount
      count
    }
  }
}
    `;
export const GetMerchandiseDetailDocument = `
    query GetMerchandiseDetail($id: String!) {
  getMerchandiseDetail(id: $id) {
    id
    name
    price
    publishedDate
    description
    photos {
      thumbnailPath
    }
    stock
    sku
    size
    weight
    status
    category
    merchandisecategory {
      name
    }
  }
}
    `;
export const GetMerchandiseContactDocument = `
    query GetMerchandiseContact {
  getWhatsappMerchandise {
    nomor
  }
}
    `;
export const GetMerchandiseCategoriesDocument = `
    query GetMerchandiseCategories($params: ParamsInputType) {
  getMerchandiseCategory(params: $params) {
    data {
      name
      id
    }
  }
}
    `;
export const GetMerchandiseAdvanceDocument = `
    query GetMerchandiseAdvance($params: ParamsAdvanceInputType) {
  getMerchandiseAdvance(params: $params) {
    data {
      id
      name
      price
      description
      status
      photos {
        thumbnailPath
      }
    }
    meta {
      count
      totalCount
    }
  }
}
    `;
export const GetNewsDocument = `
    query GetNews($params: ParamsInputType) {
  getNews(params: $params) {
    data {
      id
      title
      tags
      thumbnailPath
      publishedDate
    }
    meta {
      count
      totalCount
    }
  }
}
    `;
export const GetNewsDetailDocument = `
    query GetNewsDetail($id: String!) {
  getNewsDetail(id: $id) {
    id
    title
    tags
    author
    publishedDate
    content
    rules
  }
}
    `;
export const GetProfileDocument = `
    query GetProfile {
  getProfile {
    id
    nickName
    isVerified
    photoPath
  }
}
    `;
export const GetProfileDetailDocument = `
    query GetProfileDetail {
  getProfile {
    fullName
    nickName
    prefixTitle
    suffixTitle
    kewarganegaraan
    email
    phone
    gender
    classYear
    isVerified
    tempat_lahir
    tanggal_lahir
    jenis_pekerjaan
    jabatan_pekerjaan
    nama_instansi_perusahaan
    photoPath
    alamat_instansi_perusahaan
    subscription_2022_paid
    subscription_2023_paid
    subscription_2024_paid
    subscription_2025_paid
    kode_provinsi
    kode_kabupaten
    kode_desa
    alamat
    kode_pos
    nim
  }
}
    `;
export const GetBiodataDocument = `
    query GetBiodata {
  getProfile {
    fullName
    nickName
    nim
    classYear
    kewarganegaraan
    tempat_lahir
    tanggal_lahir
    email
    prefixTitle
    suffixTitle
    phone
    gender
  }
}
    `;
export const GetAddressDocument = `
    query GetAddress {
  getProfile {
    kode_provinsi
    kode_kabupaten
    kode_kecamatan
    kode_desa
    kode_pos
    alamat
    nama_negara
  }
}
    `;
export const GetOccupationDocument = `
    query GetOccupation {
  getProfile {
    jenis_pekerjaan
    nama_instansi_perusahaan
    jabatan_pekerjaan
    alamat_instansi_perusahaan
  }
}
    `;
export const GetSambutanKetuaDocument = `
    query GetSambutanKetua {
  getSambutanKetua {
    photoPath
    fullName
    period
    classYear
    description
    content
  }
}
    `;
export const GetSlidersDocument = `
    query GetSliders($params: ParamsInputType) {
  getSliders(params: $params) {
    data {
      id
      photoPath
    }
  }
}
    `;
export const GetForgotPasswordTokenDocument = `
    query GetForgotPasswordToken($user: UserInputCheckToken) {
  getForgotPasswordToken(user: $user) {
    status
    isValid
    token
  }
}
    `;
export const GetVacanciesDocument = `
    query GetVacancies($params: ParamsInputType) {
  getVacancies(params: $params) {
    data {
      id
      companyLogoPath
      companyName
      amount
      publishedDate
      companyCity
    }
    meta {
      count
      totalCount
    }
  }
}
    `;
export const GetVacancyDetailDocument = `
    query GetVacancyDetail($id: String!) {
  getVacancyDetail(id: $id) {
    id
    companyLogoPath
    companyName
    companyEmail
    companyCity
    publishedDate
    expiredDate
    content
    amount
    notes
    status
    rules
  }
}
    `;
export const GetScholarshipsDocument = `
    query GetScholarships($params: ParamsInputType!) {
  getScholarships(params: $params) {
    data {
      id
      companyLogoPath
      companyName
      amount
      publishedDate
      companyCity
    }
    meta {
      count
      totalCount
    }
  }
}
    `;
export const GetScholarshipDetailDocument = `
    query GetScholarshipDetail($id: String!) {
  getScholarshipDetail(id: $id) {
    id
    companyLogoPath
    companyName
    companyEmail
    companyCity
    publishedDate
    expiredDate
    content
    amount
    notes
    status
    rules
  }
}
    `;
export const GetFinalProjectsDocument = `
    query GetFinalProjects($params: ParamsInputType!) {
  getFinalProjects(params: $params) {
    data {
      id
      companyLogoPath
      companyName
      amount
      publishedDate
      companyCity
    }
    meta {
      count
      totalCount
    }
  }
}
    `;
export const GetFinalProjectDetailDocument = `
    query GetFinalProjectDetail($id: String!) {
  getFinalProjectDetail(id: $id) {
    id
    companyLogoPath
    companyName
    companyEmail
    companyCity
    publishedDate
    expiredDate
    content
    amount
    notes
    status
    rules
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    SetAddress: build.mutation<SetAddressMutation, SetAddressMutationVariables | void>({
      query: (variables) => ({ document: SetAddressDocument, variables })
    }),
    SetBiodata: build.mutation<SetBiodataMutation, SetBiodataMutationVariables | void>({
      query: (variables) => ({ document: SetBiodataDocument, variables })
    }),
    ForgotPassword: build.mutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>({
      query: (variables) => ({ document: ForgotPasswordDocument, variables })
    }),
    Login: build.mutation<LoginMutation, LoginMutationVariables>({
      query: (variables) => ({ document: LoginDocument, variables })
    }),
    SetOccupation: build.mutation<SetOccupationMutation, SetOccupationMutationVariables | void>({
      query: (variables) => ({ document: SetOccupationDocument, variables })
    }),
    Register: build.mutation<RegisterMutation, RegisterMutationVariables | void>({
      query: (variables) => ({ document: RegisterDocument, variables })
    }),
    SentKontakKami: build.mutation<SentKontakKamiMutation, SentKontakKamiMutationVariables>({
      query: (variables) => ({ document: SentKontakKamiDocument, variables })
    }),
    UpdatePassword: build.mutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>({
      query: (variables) => ({ document: UpdatePasswordDocument, variables })
    }),
    GetTentangKami: build.query<GetTentangKamiQuery, GetTentangKamiQueryVariables | void>({
      query: (variables) => ({ document: GetTentangKamiDocument, variables })
    }),
    GetTentangJurusan: build.query<GetTentangJurusanQuery, GetTentangJurusanQueryVariables | void>({
      query: (variables) => ({ document: GetTentangJurusanDocument, variables })
    }),
    GetKetuaIkata: build.query<GetKetuaIkataQuery, GetKetuaIkataQueryVariables | void>({
      query: (variables) => ({ document: GetKetuaIkataDocument, variables })
    }),
    GetActivities: build.query<GetActivitiesQuery, GetActivitiesQueryVariables | void>({
      query: (variables) => ({ document: GetActivitiesDocument, variables })
    }),
    GetActivityDetail: build.query<GetActivityDetailQuery, GetActivityDetailQueryVariables>({
      query: (variables) => ({ document: GetActivityDetailDocument, variables })
    }),
    GetProvinsi: build.query<GetProvinsiQuery, GetProvinsiQueryVariables | void>({
      query: (variables) => ({ document: GetProvinsiDocument, variables })
    }),
    GetKabupaten: build.query<GetKabupatenQuery, GetKabupatenQueryVariables | void>({
      query: (variables) => ({ document: GetKabupatenDocument, variables })
    }),
    GetKecamatan: build.query<GetKecamatanQuery, GetKecamatanQueryVariables | void>({
      query: (variables) => ({ document: GetKecamatanDocument, variables })
    }),
    GetDesa: build.query<GetDesaQuery, GetDesaQueryVariables | void>({
      query: (variables) => ({ document: GetDesaDocument, variables })
    }),
    GetNegara: build.query<GetNegaraQuery, GetNegaraQueryVariables | void>({
      query: (variables) => ({ document: GetNegaraDocument, variables })
    }),
    GetAlumniBusinesses: build.query<GetAlumniBusinessesQuery, GetAlumniBusinessesQueryVariables | void>({
      query: (variables) => ({ document: GetAlumniBusinessesDocument, variables })
    }),
    GetAlumniBusinessDetail: build.query<GetAlumniBusinessDetailQuery, GetAlumniBusinessDetailQueryVariables>({
      query: (variables) => ({ document: GetAlumniBusinessDetailDocument, variables })
    }),
    GetArticles: build.query<GetArticlesQuery, GetArticlesQueryVariables | void>({
      query: (variables) => ({ document: GetArticlesDocument, variables })
    }),
    GetArticleDetail: build.query<GetArticleDetailQuery, GetArticleDetailQueryVariables>({
      query: (variables) => ({ document: GetArticleDetailDocument, variables })
    }),
    GetFooter: build.query<GetFooterQuery, GetFooterQueryVariables | void>({
      query: (variables) => ({ document: GetFooterDocument, variables })
    }),
    GetDewanPengawas: build.query<GetDewanPengawasQuery, GetDewanPengawasQueryVariables | void>({
      query: (variables) => ({ document: GetDewanPengawasDocument, variables })
    }),
    GetBidang: build.query<GetBidangQuery, GetBidangQueryVariables | void>({
      query: (variables) => ({ document: GetBidangDocument, variables })
    }),
    GetWilayah: build.query<GetWilayahQuery, GetWilayahQueryVariables | void>({
      query: (variables) => ({ document: GetWilayahDocument, variables })
    }),
    GetWilayahDetail: build.query<GetWilayahDetailQuery, GetWilayahDetailQueryVariables>({
      query: (variables) => ({ document: GetWilayahDetailDocument, variables })
    }),
    GetBidangDetail: build.query<GetBidangDetailQuery, GetBidangDetailQueryVariables>({
      query: (variables) => ({ document: GetBidangDetailDocument, variables })
    }),
    GetKoordinatorAngkatan: build.query<GetKoordinatorAngkatanQuery, GetKoordinatorAngkatanQueryVariables | void>({
      query: (variables) => ({ document: GetKoordinatorAngkatanDocument, variables })
    }),
    GetPengurusHarian: build.query<GetPengurusHarianQuery, GetPengurusHarianQueryVariables | void>({
      query: (variables) => ({ document: GetPengurusHarianDocument, variables })
    }),
    GetMerchandises: build.query<GetMerchandisesQuery, GetMerchandisesQueryVariables | void>({
      query: (variables) => ({ document: GetMerchandisesDocument, variables })
    }),
    GetMerchandiseDetail: build.query<GetMerchandiseDetailQuery, GetMerchandiseDetailQueryVariables>({
      query: (variables) => ({ document: GetMerchandiseDetailDocument, variables })
    }),
    GetMerchandiseContact: build.query<GetMerchandiseContactQuery, GetMerchandiseContactQueryVariables | void>({
      query: (variables) => ({ document: GetMerchandiseContactDocument, variables })
    }),
    GetMerchandiseCategories: build.query<GetMerchandiseCategoriesQuery, GetMerchandiseCategoriesQueryVariables | void>({
      query: (variables) => ({ document: GetMerchandiseCategoriesDocument, variables })
    }),
    GetMerchandiseAdvance: build.query<GetMerchandiseAdvanceQuery, GetMerchandiseAdvanceQueryVariables | void>({
      query: (variables) => ({ document: GetMerchandiseAdvanceDocument, variables })
    }),
    GetNews: build.query<GetNewsQuery, GetNewsQueryVariables | void>({
      query: (variables) => ({ document: GetNewsDocument, variables })
    }),
    GetNewsDetail: build.query<GetNewsDetailQuery, GetNewsDetailQueryVariables>({
      query: (variables) => ({ document: GetNewsDetailDocument, variables })
    }),
    GetProfile: build.query<GetProfileQuery, GetProfileQueryVariables | void>({
      query: (variables) => ({ document: GetProfileDocument, variables })
    }),
    GetProfileDetail: build.query<GetProfileDetailQuery, GetProfileDetailQueryVariables | void>({
      query: (variables) => ({ document: GetProfileDetailDocument, variables })
    }),
    GetBiodata: build.query<GetBiodataQuery, GetBiodataQueryVariables | void>({
      query: (variables) => ({ document: GetBiodataDocument, variables })
    }),
    GetAddress: build.query<GetAddressQuery, GetAddressQueryVariables | void>({
      query: (variables) => ({ document: GetAddressDocument, variables })
    }),
    GetOccupation: build.query<GetOccupationQuery, GetOccupationQueryVariables | void>({
      query: (variables) => ({ document: GetOccupationDocument, variables })
    }),
    GetSambutanKetua: build.query<GetSambutanKetuaQuery, GetSambutanKetuaQueryVariables | void>({
      query: (variables) => ({ document: GetSambutanKetuaDocument, variables })
    }),
    GetSliders: build.query<GetSlidersQuery, GetSlidersQueryVariables | void>({
      query: (variables) => ({ document: GetSlidersDocument, variables })
    }),
    GetForgotPasswordToken: build.query<GetForgotPasswordTokenQuery, GetForgotPasswordTokenQueryVariables | void>({
      query: (variables) => ({ document: GetForgotPasswordTokenDocument, variables })
    }),
    GetVacancies: build.query<GetVacanciesQuery, GetVacanciesQueryVariables | void>({
      query: (variables) => ({ document: GetVacanciesDocument, variables })
    }),
    GetVacancyDetail: build.query<GetVacancyDetailQuery, GetVacancyDetailQueryVariables>({
      query: (variables) => ({ document: GetVacancyDetailDocument, variables })
    }),
    GetScholarships: build.query<GetScholarshipsQuery, GetScholarshipsQueryVariables>({
      query: (variables) => ({ document: GetScholarshipsDocument, variables })
    }),
    GetScholarshipDetail: build.query<GetScholarshipDetailQuery, GetScholarshipDetailQueryVariables>({
      query: (variables) => ({ document: GetScholarshipDetailDocument, variables })
    }),
    GetFinalProjects: build.query<GetFinalProjectsQuery, GetFinalProjectsQueryVariables>({
      query: (variables) => ({ document: GetFinalProjectsDocument, variables })
    }),
    GetFinalProjectDetail: build.query<GetFinalProjectDetailQuery, GetFinalProjectDetailQueryVariables>({
      query: (variables) => ({ document: GetFinalProjectDetailDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useSetAddressMutation, useSetBiodataMutation, useForgotPasswordMutation, useLoginMutation, useSetOccupationMutation, useRegisterMutation, useSentKontakKamiMutation, useUpdatePasswordMutation, useGetTentangKamiQuery, useLazyGetTentangKamiQuery, useGetTentangJurusanQuery, useLazyGetTentangJurusanQuery, useGetKetuaIkataQuery, useLazyGetKetuaIkataQuery, useGetActivitiesQuery, useLazyGetActivitiesQuery, useGetActivityDetailQuery, useLazyGetActivityDetailQuery, useGetProvinsiQuery, useLazyGetProvinsiQuery, useGetKabupatenQuery, useLazyGetKabupatenQuery, useGetKecamatanQuery, useLazyGetKecamatanQuery, useGetDesaQuery, useLazyGetDesaQuery, useGetNegaraQuery, useLazyGetNegaraQuery, useGetAlumniBusinessesQuery, useLazyGetAlumniBusinessesQuery, useGetAlumniBusinessDetailQuery, useLazyGetAlumniBusinessDetailQuery, useGetArticlesQuery, useLazyGetArticlesQuery, useGetArticleDetailQuery, useLazyGetArticleDetailQuery, useGetFooterQuery, useLazyGetFooterQuery, useGetDewanPengawasQuery, useLazyGetDewanPengawasQuery, useGetBidangQuery, useLazyGetBidangQuery, useGetWilayahQuery, useLazyGetWilayahQuery, useGetWilayahDetailQuery, useLazyGetWilayahDetailQuery, useGetBidangDetailQuery, useLazyGetBidangDetailQuery, useGetKoordinatorAngkatanQuery, useLazyGetKoordinatorAngkatanQuery, useGetPengurusHarianQuery, useLazyGetPengurusHarianQuery, useGetMerchandisesQuery, useLazyGetMerchandisesQuery, useGetMerchandiseDetailQuery, useLazyGetMerchandiseDetailQuery, useGetMerchandiseContactQuery, useLazyGetMerchandiseContactQuery, useGetMerchandiseCategoriesQuery, useLazyGetMerchandiseCategoriesQuery, useGetMerchandiseAdvanceQuery, useLazyGetMerchandiseAdvanceQuery, useGetNewsQuery, useLazyGetNewsQuery, useGetNewsDetailQuery, useLazyGetNewsDetailQuery, useGetProfileQuery, useLazyGetProfileQuery, useGetProfileDetailQuery, useLazyGetProfileDetailQuery, useGetBiodataQuery, useLazyGetBiodataQuery, useGetAddressQuery, useLazyGetAddressQuery, useGetOccupationQuery, useLazyGetOccupationQuery, useGetSambutanKetuaQuery, useLazyGetSambutanKetuaQuery, useGetSlidersQuery, useLazyGetSlidersQuery, useGetForgotPasswordTokenQuery, useLazyGetForgotPasswordTokenQuery, useGetVacanciesQuery, useLazyGetVacanciesQuery, useGetVacancyDetailQuery, useLazyGetVacancyDetailQuery, useGetScholarshipsQuery, useLazyGetScholarshipsQuery, useGetScholarshipDetailQuery, useLazyGetScholarshipDetailQuery, useGetFinalProjectsQuery, useLazyGetFinalProjectsQuery, useGetFinalProjectDetailQuery, useLazyGetFinalProjectDetailQuery } = injectedRtkApi;

