export type Meta = Record<string, HeadProps>;

export type HeadProps = {
  title?: string;
  keywords?: string;
  description?: string;
  page?: string;
};

function createMeta<T extends Meta>(cfg: T) {
  return cfg;
}

const meta = createMeta({
  landingPage: {
    title: "Home Portal IKATA",
    keywords:
      'IKATA TANGGUH, Berita, Kegiatan, Artikel,Alumni UPN "Veteran" Yogyakarta, pertambangan, Mining',
    description:
      "Portal Ikatan Alumni Teknik Pertambangan UPN 'Veteran' Yogyakarta",
  },
  about: {
    title: "Tentang Kami IKATA",
    keywords:
      "Tentang IKATA,IKATA, Tentang Jurusan Teknik Pertambangan,Teknik Pertambangan,UPN,Tentang Ketua IKATA",
    description:
      "Tentang Ikatan Alumni Teknik Pertambangan UPN 'Veteran' Yogyakarta",
  },
  dewanPengawas: {
    title: "Susunan Dewan Pengawas IKATA",
    keywords:
      'Dewan Pengawas IKATA,IKATA,UPN,Alumni UPN "Veteran" Yogyakarta,UPN "Veteran" Yogyakarta',
    description:
      "Dewan Pengawas Ikatan Alumni Teknik Pertambangan UPN 'Veteran' Yogyakarta",
  },
  pengurusPusat: {
    title: "Susunan Pengurus Pusat IKATA",
    keywords:
      'Pengurus Pusat IKATA,IKATA,UPN,Alumni UPN "Veteran" Yogyakarta,UPN "Veteran" Yogyakarta',
    description:
      "Pengurus Pusat Ikatan Alumni Teknik Pertambangan UPN 'Veteran' Yogyakarta",
  },
  pengurusWilayah: {
    title: "Susunan Pengurus Wilayah IKATA",
    keywords:
      'Pengurus Wilayah Pengawas IKATA,IKATA,UPN,Alumni UPN "Veteran" Yogyakarta,UPN "Veteran" Yogyakarta',
    description:
      "Pengurus Wilayah Ikatan Alumni Teknik Pertambangan UPN 'Veteran' Yogyakarta",
  },
  pengurusBidang: {
    title: "Susunan Pengurus Bidang IKATA",
    keywords:
      'Pengurus Bidang IKATA,IKATA,UPN,Alumni UPN "Veteran" Yogyakarta,UPN "Veteran" Yogyakarta',
    description:
      "Pengurus Bidang Ikatan Alumni Teknik Pertambangan UPN 'Veteran' Yogyakarta",
  },
  koordinatorAngkatan: {
    title: "Susunan Koordinator Angkatan IKATA",
    keywords:
      'Koordinator Angkatan Pengawas IKATA,IKATA,UPN,Alumni UPN "Veteran" Yogyakarta,UPN "Veteran" Yogyakarta',
    description:
      "Koordinator Angkatan Ikatan Alumni Teknik Pertambangan UPN 'Veteran' Yogyakarta",
  },
  pekerjaan: {
    title: "Lowongan Pekerjaan IKATA",
    keywords:
      'Lowongan Pekerjaan IKATA, IKATA,UPN,Alumni UPN "Veteran" Yogyakarta,UPN "Veteran" Yogyakarta',
    description:
      "Lowongan Kerja Ikatan Alumni Teknik Pertambangan UPN 'Veteran' Yogyakarta",
  },
  tugasAkhir: {
    title: "Lowongan Tugas Akhir IKATA",
    keywords:
      'Lowongan Lowongan Tugas Akhir IKATA, IKATA,UPN,Alumni UPN "Veteran" Yogyakarta,UPN "Veteran" Yogyakarta',
    description:
      "Lowongan Tugas Akhir Ikatan Alumni Teknik Pertambangan UPN 'Veteran' Yogyakarta",
  },
  beasiswa: {
    title: "Lowongan Beasiswa IKATA",
    keywords:
      'Lowongan Beasiswa IKATA, IKATA,UPN,Alumni UPN "Veteran" Yogyakarta,UPN "Veteran" Yogyakarta',
    description:
      "Lowongan Beasiswa Ikatan Alumni Teknik Pertambangan UPN 'Veteran' Yogyakarta",
  },
  berita: {
    title: "Berita IKATA",
    keywords:
      'Berita IKATA,IKATA,UPN,Alumni UPN "Veteran" Yogyakarta,UPN "Veteran" Yogyakarta',
    description:
      "Berita Ikatan Alumni Teknik Pertambangan UPN 'Veteran' Yogyakarta",
  },
  kegiatan: {
    title: "Kegiatan IKATA",
    keywords:
      'Kegiatan IKATA,IKATA,UPN,Alumni UPN "Veteran" Yogyakarta,UPN "Veteran" Yogyakarta',
    description:
      "KegiatanAngkatan Ikatan Alumni Teknik Pertambangan UPN 'Veteran' Yogyakarta",
  },
  artikel: {
    title: "Artikel IKATA",
    keywords:
      'Artikel IKATA,IKATA,UPN,Alumni UPN "Veteran" Yogyakarta,UPN "Veteran" Yogyakarta',
    description:
      "ArtikelAngkatan Ikatan Alumni Teknik Pertambangan UPN 'Veteran' Yogyakarta",
  },
  artikelIlmiah: {
    title: "Artikel Ilmiah IKATA",
    keywords:
      'Artikel Ilmiah IKATA,IKATA,UPN,Alumni UPN "Veteran" Yogyakarta,UPN "Veteran" Yogyakarta, Mining, Pertambangan',
    description:
      "Artikel llmiah Angkatan Ikatan Alumni Teknik Pertambangan UPN 'Veteran' Yogyakarta",
  },
  artikelNonIlmiah: {
    title: "Artikel Non Ilmiah IKATA",
    keywords:
      'Artikel Non Ilmiah IKATA,IKATA,UPN,Alumni UPN "Veteran" Yogyakarta,UPN "Veteran" Yogyakarta',
    description:
      "Artikel Non Ilmiah  Angkatan Ikatan Alumni Teknik Pertambangan UPN 'Veteran' Yogyakarta",
  },
  merchandise: {
    title: "Merchandise IKATA",
    keywords:
      'Merchandise IKATA,IKATA,UPN,Alumni UPN "Veteran" Yogyakarta,UPN "Veteran" Yogyakarta',
    description:
      "Merchandise Angkatan Ikatan Alumni Teknik Pertambangan UPN 'Veteran' Yogyakarta",
  },
  bisnis: {
    title: "Bisnis Alumni IKATA",
    keywords:
      'Bisnis Alumni IKATA,IKATA,UPN,Alumni UPN "Veteran" Yogyakarta,UPN "Veteran" Yogyakarta',
    description:
      "Bisnis Angkatan Ikatan Alumni Teknik Pertambangan UPN 'Veteran' Yogyakarta",
  },
  kontak: {
    title: "Kontak IKATA",
    keywords:
      'Kontak IKATA,IKATA,UPN,Alumni UPN "Veteran" Yogyakarta,UPN "Veteran" Yogyakarta',
    description:
      "Kontak Angkatan Ikatan Alumni Teknik Pertambangan UPN 'Veteran' Yogyakarta",
  },
  koperasi: {
    title: "Koperasi IKATA",
    keywords:
      'Koperasi IKATA,IKATA,UPN,Alumni UPN "Veteran" Yogyakarta,UPN "Veteran" Yogyakarta',
    description:
      "Koperasi Angkatan Ikatan Alumni Teknik Pertambangan UPN 'Veteran' Yogyakarta",
  },
});

export default meta;
