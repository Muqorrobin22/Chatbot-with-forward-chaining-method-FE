export function ruleBaseDetect(msg) {

    // Start of: Rules - Syarat Peminjaman

    const rule1_syarat_peminjaman = ["syarat", "pinjam"]
    const rule2_syarat_peminjaman = ["bawa", "pinjam"]
    const rule3_syarat_peminjaman = ["butuh", "pinjam"]

    let rule1_SP_isValid = rule1_syarat_peminjaman.every(el => msg.message.includes(el))
    let rule2_SP_isValid = rule2_syarat_peminjaman.every(el => msg.message.includes(el))
    let rule3_SP_isValid = rule3_syarat_peminjaman.every(el => msg.message.includes(el))

    // End of: Rules - Syarat Peminjaman


    // Start of: Rules - Langkah Peminjaman

    const rule1_langkah_peminjaman = ["langkah", "pinjam"]
    const rule2_langkah_peminjaman = ["cara", "pinjam"]
    const rule3_langkah_peminjaman = ["tutor", "pinjam"]
    const rule4_langkah_peminjaman = ["prosedur", "pinjam"]

    let rule1_LP_isValid = rule1_langkah_peminjaman.every(el => msg.message.includes(el))
    let rule2_LP_isValid = rule2_langkah_peminjaman.every(el => msg.message.includes(el))
    let rule3_LP_isValid = rule3_langkah_peminjaman.every(el => msg.message.includes(el))
    let rule4_LP_isValid = rule4_langkah_peminjaman.every(el => msg.message.includes(el))

    // End of: Rules - Langkah Peminjaman

    // Start of: Rules - Langkah Pengembalian

    const rule1_langkah_pengembalian = ["langkah", "kembali"]
    const rule2_langkah_pengembalian = ["cara", "kembali"]
    const rule3_langkah_pengembalian = ["tutor", "kembali"]
    const rule4_langkah_pengembalian = ["prosedur", "kembali"]

    let rule1_LPengembalian_isValid = rule1_langkah_pengembalian.every(el => msg.message.includes(el))
    let rule2_LPengembalian_isValid = rule2_langkah_pengembalian.every(el => msg.message.includes(el))
    let rule3_LPengembalian_isValid = rule3_langkah_pengembalian.every(el => msg.message.includes(el))
    let rule4_LPengembalian_isValid = rule4_langkah_pengembalian.every(el => msg.message.includes(el))

    // End of: Rules - Langkah Pengembalian


    // Start of: Rules - Kondisi Rusak

    const rule1_buku_rusak = ["buku", "rusak"]

    let rule1_buku_rusak_isValid = rule1_buku_rusak.every(el => msg.message.includes(el))

    // End of: Rules - Kondisi Rusak

    // Start of: Rules - Kondisi Hilang

    const rule1_buku_hilang = ["buku", "hilang"]

    let rule1_buku_hilang_isValid = rule1_buku_hilang.every(el => msg.message.includes(el))

    // End of: Rules - Kondisi Hilang

    // Start of: Rules - Kondisi Hilang 2

    const rule1_buku_hilang2 = ["buku", "sama"]
    const rule2_buku_hilang2 = ["buku", "persis"]

    let rule1_buku_hilang2_isValid = rule1_buku_hilang2.every(el => msg.message.includes(el))
    let rule2_buku_hilang2_isValid = rule2_buku_hilang2.every(el => msg.message.includes(el))

    // End of: Rules - Kondisi Hilang 2

    // Start of: Rules - Maksimal Peminjaman

    const rule1_maksimal_pinjam = ["batas", "pinjam"]
    const rule2_maksimal_pinjam = ["masa", "pinjam"]
    const rule3_maksimal_pinjam = ["maksimal", "pinjam"]
    const rule4_maksimal_pinjam = ["panjang", "pinjam"]

    let rule1_maksimal_pinjam_isValid = rule1_maksimal_pinjam.every(el => msg.message.includes(el))
    let rule2_maksimal_pinjam_isValid = rule2_maksimal_pinjam.every(el => msg.message.includes(el))
    let rule3_maksimal_pinjam_isValid = rule3_maksimal_pinjam.every(el => msg.message.includes(el))
    let rule4_maksimal_pinjam_isValid = rule4_maksimal_pinjam.every(el => msg.message.includes(el))

    // End of: Rules - Maksimal Peminjaman

    // Start of: Rules - Aturan dikembalikan orang lain

    const rule1_dikembalikan_orang_lain = ["kembali", "teman"]
    const rule2_dikembalikan_orang_lain = ["kembali", "orang"]

    let rule1_dikembalikan_orang_lain_isValid = rule1_dikembalikan_orang_lain.every(el => msg.message.includes(el))
    let rule2_dikembalikan_orang_lain_isValid = rule2_dikembalikan_orang_lain.every(el => msg.message.includes(el))

    // End of: Rules - Aturan dikembalikan orang lain

    // Start of: Rules - Aturan Bebas Pinjam

    const bebasPinjamD3 = ["d", "pus"]
    const bebasPinjamD4 = ["d", "pustaka"]
    const bebasPinjamS2D3 = ["s", "pustaka", "d"]
    const bebasPinjamS2D4 = ["s", "pus", "d"]

    let bebasPinjamD3Valid = bebasPinjamD3.every(el => msg.message.includes(el))
    let bebasPinjamD4Valid = bebasPinjamD4.every(el => msg.message.includes(el))
    let bebasPinjamS2D3Valid = bebasPinjamS2D3.every(el => msg.message.includes(el))
    let bebasPinjamS2D4Valid = bebasPinjamS2D4.every(el => msg.message.includes(el))

    // End of: Rules - Aturan Bebas Pinjam

    // Start of: Rules - Syarat Wisuda

    const rule1_wisuda = ["syarat", "wisuda"]

    let rule1_wisuda_isValid = rule1_wisuda.every(el => msg.message.includes(el))

    // End of: Rules - Syarat Wisuda

    // Start of: Rules - Isi_CD_Proyek_Akhir

    const ketentuanCd = ["tentu", "cd"]
    const isiCd = ["isi", "cd"]

    let ketentuanCdValid = ketentuanCd.every(element => msg.message.includes(element))
    let isiCdValid = isiCd.every(element => msg.message.includes(element))

    // End of: Rules - Isi_CD_Proyek_Akhir

    // Start of: Rules - Koleksi Jurnal

    const rule1_koleksi_jurnal = ["koleksi", "jurnal"]

    let rule1_koleksi_jurnal_isValid = rule1_koleksi_jurnal.every(element => msg.message.includes(element))

    // End of: Rules - Koleksi Jurnal

    // Start of: Rules - Koleksi Ebook

    const rule1_koleksi_ebook = ["koleksi", "ebook"]

    let rule1_koleksi_ebook_isValid = rule1_koleksi_ebook.every(element => msg.message.includes(element))

    // End of: Rules - Koleksi Ebook

    // Start of: Rules - Keanggotaan

    const rule1_keanggotaan = ["anggota"]

    let rule1_keanggotaan_isValid = rule1_keanggotaan.every(element => msg.message.includes(element))

    // End of: Rules - Keanggotaan

    // Start of: Rules - Koleksi Perpustakaan

    const rule1_koleksi_perpus = ["koleksi", "pustaka"]
    // const rule2_koleksi_perpus = ["koleksi"]

    let rule1_koleksi_perpus_isValid = rule1_koleksi_perpus.every(element => msg.message.includes(element))
    // let rule2_koleksi_perpus_isValid = rule2_koleksi_perpus.every(element => msg.message.includes(element))

    // End of: Rules - Koleksi Perpustakaan

    // Start of: Rules - Struktur Organisasi

    const rule1_struktur_organisasi = ["struktur", "organisasi"]
    const rule2_struktur_organisasi = ["organisasi"]
    const rule3_struktur_organisasi = ["bentuk", "organisasi"]
    const rule4_struktur_organisasi = ["sistem", "organisasi"]

    let rule1_struktur_organisasi_isValid = rule1_struktur_organisasi.every(element => msg.message.includes(element))
    let rule2_struktur_organisasi_isValid = rule2_struktur_organisasi.every(element => msg.message.includes(element))
    let rule3_struktur_organisasi_isValid = rule3_struktur_organisasi.every(element => msg.message.includes(element))
    let rule4_struktur_organisasi_isValid = rule4_struktur_organisasi.every(element => msg.message.includes(element))

    // End of: Rules - Struktur Organisasi

    // Start of: Rules - Struktur Anggota

    const rule1_struktur_anggota = ["struktur", "anggota"]

    let rule1_struktur_anggota_isValid = rule1_struktur_anggota.every(element => msg.message.includes(element))

    // End of: Rules - Struktur Amggota

    // Start of: Rules - Koleksi Buku

    const rule1_koleksi_buku = ["koleksi", "buku"]
    const rule2_koleksi_buku = ["cara", "koleksi", "lihat"]
    const rule3_koleksi_buku = ["lihat", "koleksi", "buku"]
    const rule4_koleksi_buku = ["sedia", "buku"]
    const rule5_koleksi_buku = ["cara", "koleksi"]
    const rule6_koleksi_buku = ["cara", "buku"]
    // const rule7_koleksi_buku = ["layan", "koleksi"]

    let rule1_koleksi_buku_isValid = rule1_koleksi_buku.every(element => msg.message.includes(element))
    let rule2_koleksi_buku_isValid = rule2_koleksi_buku.every(element => msg.message.includes(element))
    let rule3_koleksi_buku_isValid = rule3_koleksi_buku.every(element => msg.message.includes(element))
    let rule4_koleksi_buku_isValid = rule4_koleksi_buku.every(element => msg.message.includes(element))
    let rule5_koleksi_buku_isValid = rule5_koleksi_buku.every(element => msg.message.includes(element))
    let rule6_koleksi_buku_isValid = rule6_koleksi_buku.every(element => msg.message.includes(element))
    // let rule7_koleksi_buku_isValid = rule7_koleksi_buku.every(element => msg.message.includes(element))

    // End of: Rules - Koleksi Buku

    // Start of: Rules - Layanan Loker

    const rule1_layanan_loker = ["layan", "loker"]
    const rule2_layanan_loker = ["loker"]

    let rule1_layanan_loker_isValid = rule1_layanan_loker.every(element => msg.message.includes(element))
    let rule2_layanan_loker_isValid = rule2_layanan_loker.every(element => msg.message.includes(element))

    // End of: Rules - Layanan Loker

    // Start of: Rules - Layanan Referensi

    const rule1_layanan_referensi = ["layan", "referensi"]
    const rule2_layanan_referensi = ["layan", "koleksi", "referensi"]

    let rule1_layanan_referensi_isValid = rule1_layanan_referensi.every(element => msg.message.includes(element))
    let rule2_layanan_referensi_isValid = rule2_layanan_referensi.every(element => msg.message.includes(element))

    // End of: Rules - Layanan Referensi

    // Start of: Rules - Koleksi Modul Ajar

    const rule1_modul_ajar = ["koleksi", "modul"]
    const rule2_modul_ajar = ["koleksi", "ajar"]
    const rule3_modul_ajar = ["modul", "ajar"]
    const rule4_modul_ajar = ["modul"]
    const rule5_modul_ajar = ["ajar"]

    let rule1_modul_ajar_isValid = rule1_modul_ajar.every(element => msg.message.includes(element))
    let rule2_modul_ajar_isValid = rule2_modul_ajar.every(element => msg.message.includes(element))
    let rule3_modul_ajar_isValid = rule3_modul_ajar.every(element => msg.message.includes(element))
    let rule4_modul_ajar_isValid = rule4_modul_ajar.every(element => msg.message.includes(element))
    let rule5_modul_ajar_isValid = rule5_modul_ajar.every(element => msg.message.includes(element))

    // End of: Rules - Koleksi Modul Ajar


    // Start of: Rules - Mencari buku

    const rule1_mencari_buku = ["cara", "cari", "buku"]
    const rule2_mencari_buku = [ "cari", "koleksi"]
    const rule3_mencari_buku = [ "cara", "cari", "koleksi"]
    const rule4_mencari_buku = [ "cari", "buku"]

    let rule1_mencari_buku_isValid = rule1_mencari_buku.every(element => msg.message.includes(element))
    let rule2_mencari_buku_isValid = rule2_mencari_buku.every(element => msg.message.includes(element))
    let rule3_mencari_buku_isValid = rule3_mencari_buku.every(element => msg.message.includes(element))
    let rule4_mencari_buku_isValid = rule4_mencari_buku.every(element => msg.message.includes(element))

    // End of: Rules - Mencari Buku

    // Start of: Rules - Pengadaan buku

    const rule1_pengadaan_buku = ["cara", "ada", "buku"]
    const rule2_pengadaan_buku = ["cara", "aju", "buku"]
    const rule3_pengadaan_buku = ["aju", "buku"]
    const rule4_pengadaan_buku = ["ada", "buku"]

    let rule1_pengadaan_buku_isValid = rule1_pengadaan_buku.every(element => msg.message.includes(element))
    let rule2_pengadaan_buku_isValid = rule2_pengadaan_buku.every(element => msg.message.includes(element))
    let rule3_pengadaan_buku_isValid = rule3_pengadaan_buku.every(element => msg.message.includes(element))
    let rule4_pengadaan_buku_isValid = rule4_pengadaan_buku.every(element => msg.message.includes(element))

    // End of: Rules - Pengadaan buku

    // Start of: Rules - tata tertib

    const rule1_tata_tertib = ["tata", "tertib"]
    const rule2_tata_tertib = ["atur", "pustaka"]

    let rule1_tata_tertib_isValid = rule1_tata_tertib.every(element => msg.message.includes(element))
    let rule2_tata_tertib_isValid = rule2_tata_tertib.every(element => msg.message.includes(element))

    // End of: Rules - tata tertib

    // Start of: Rules - NPP Perpustakaan

    const rule1_npp_perpustakaan = ["npp", "pustaka"]
    const rule2_npp_perpustakaan = ["npp"]

    let rule1_npp_perpustakaan_isValid = rule1_npp_perpustakaan.every(element => msg.message.includes(element))
    let rule2_npp_perpustakaan_isValid = rule2_npp_perpustakaan.every(element => msg.message.includes(element))

    // End of: Rules - NPP Perpustakaan


    if(rule1_SP_isValid || rule2_SP_isValid || rule3_SP_isValid) {
        return "syarat_peminjaman"
    } else if( rule1_LP_isValid || rule2_LP_isValid || rule3_LP_isValid || rule4_LP_isValid ) {
        return "langkah_peminjaman"
    } else if (rule1_LPengembalian_isValid || rule2_LPengembalian_isValid || rule3_LPengembalian_isValid || rule4_LPengembalian_isValid) {
        return "langkah_pengembalian"
    } else if (rule1_buku_rusak_isValid || msg.message.includes("rusak")) {
        return "kondisi_rusak"
    }else if (rule1_buku_hilang_isValid || msg.message.includes("hilang")) {
        return "kondisi_hilang"
    } else if (rule1_buku_hilang2_isValid || rule2_buku_hilang2_isValid) {
        return "kondisi_hilang2"
    }else if (rule1_maksimal_pinjam_isValid || rule2_maksimal_pinjam_isValid || rule3_maksimal_pinjam_isValid || rule4_maksimal_pinjam_isValid) {
        return "maksimal_pinjam"
    } else if(msg.message.includes("denda")) {
        return "denda"
    }else if(msg.message.includes("jam") || msg.message.includes("buka") || msg.message.includes("tutup")) {
        return "informasi_jam_layanan"
    } else if (rule1_dikembalikan_orang_lain_isValid || rule2_dikembalikan_orang_lain_isValid ) {
        return "dikembalikan_orang_lain"
    } else if(msg.message.includes("mou")) {
        return "mou"
    } else if (rule1_struktur_anggota_isValid) {
        return "struktur_keanggotaan"
    } else if (msg.message.includes("akreditasi") || msg.message.includes("sertifikat")) {
        return "sertifikat_akreditasi"
    } else if(bebasPinjamD3Valid || bebasPinjamD4Valid || bebasPinjamS2D3Valid || bebasPinjamS2D4Valid) {
        return "bebas_pinjam"
    } else if(rule1_wisuda_isValid) {
        return "syarat_wisuda"
    } else if (msg.message.includes("kaset") || msg.message.includes("cd") || msg.message.includes("dvd") || ketentuanCdValid || isiCdValid) {
        return "Isi_CD_Proyek_Akhir"
    } else if (msg.message.includes("qr") || msg.message.includes("qrcode") || msg.message.includes("code") || msg.message.includes("kode") || msg.message.includes("kesah")) {
        return "qrcode_pengesahan"
    } else if(msg.message.includes("visi")) {
        return "visi"
    }else if(msg.message.includes("misi")) {
        return "misi"
    }else if(rule1_koleksi_jurnal_isValid || msg.message.includes("jurnal")) {
        return "koleksi_jurnal"
    }else if(rule1_koleksi_ebook_isValid || msg.message.includes("ebook")) {
        return "koleksi_ebook"
    } else if(msg.message.includes("pinjam")){
        return "pinjam_confirm"
    }else if(msg.message.includes("kembali")){
        return "kembali_confirm"
    }else if(msg.message.includes("syarat")){
        return "syarat_confirm"
    }else if(rule1_keanggotaan_isValid) {
        return "keanggotaan"
    }else if(rule1_koleksi_perpus_isValid ) {
        return "koleksi_perpus"
    }else if(rule1_struktur_organisasi_isValid || rule2_struktur_organisasi_isValid || rule3_struktur_organisasi_isValid || rule4_struktur_organisasi_isValid) {
        return "struktur_organisasi"
    }else if(rule1_layanan_loker_isValid || rule2_layanan_loker_isValid ) {
        return "layanan_loker"
    }else if(rule1_layanan_referensi_isValid || rule2_layanan_referensi_isValid ) {
        return "layanan_referensi"
    }else if(rule1_modul_ajar_isValid || rule2_modul_ajar_isValid || rule3_modul_ajar_isValid || rule4_modul_ajar_isValid || rule5_modul_ajar_isValid ) {
        return "koleksi_modul"
    }else if(rule1_mencari_buku_isValid || rule3_mencari_buku_isValid || rule2_mencari_buku_isValid || rule4_mencari_buku_isValid ) {
        return "mencari_buku"
    }else if(rule1_pengadaan_buku_isValid || rule2_pengadaan_buku_isValid || rule3_pengadaan_buku_isValid || rule4_pengadaan_buku_isValid) {
        return "pengadaan_buku"
    }else if(rule1_koleksi_buku_isValid || rule2_koleksi_buku_isValid || rule3_koleksi_buku_isValid || rule4_koleksi_buku_isValid || rule5_koleksi_buku_isValid || rule6_koleksi_buku_isValid ) {
        return "koleksi_buku"
    }else if(rule1_tata_tertib_isValid || rule2_tata_tertib_isValid) {
        return "tata_tertib"
    }else if(rule1_npp_perpustakaan_isValid || rule2_npp_perpustakaan_isValid) {
        return "npp_perpustakaan"
    } else if (msg.message.includes("atur") || msg.message.includes("wajib") || msg.message.includes("tas") || msg.message.includes("jaket") || msg.message.includes("makan") || msg.message.includes("minum") || msg.message.includes("presensi")) {
        return "peraturan_pengunjung"
    }



}