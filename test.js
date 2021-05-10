// kelompokPengguna
// _id, kelompok, nama
// 1, 0, karyawan
// 2, 0, pelanggan
// 3, 1, medis
// 4, 1, non medis
// 5, 3, perawat
// 6, 3, doktor

// pengguna
// _id, nama, tanggalLahir, tempatLahir, saldoAwal, saldoAkhir

// wilayah
// kelompok = propinsi => kota => kecamatan => kelurahan
// _id, kelompok, nama
// 35, 0, jawa timur
// 2, 0, jawa barat
// 3, 0, jawa tengah
// 4, 35, pacitan
// 5, 35, ponorogo
// 6, 35, madiun
// 01, 35, pacitan
// 8, 01, pacitan
// 9, 8, pacitan

// alamat
// jenis: tetap, domisili
// _id, penggunaId, alamat, wilayah, jenis, tanggalInput

// sumber
// _id, path, 
// 1, '/'
// 2, '/pengguna'

// izin
// _id, sumberId, kelompokPenggunaId, POST, GET, PATCH, DELETE
// 1, 1, 6, true, true, true, true

// kelompokProduk

// produk
// jenis: produk, jasa
// _id, kelompokProdukId, nama, jenis, 

// akun
// @info = id => kelompok, klasifikasi -> sub -> akun
// _id, kelompok, nama
// 100000000, 0, harta
// 200000000, 0, utang
// 300000000, 0, modal
// 400000000, 0, pendapatan
// 500000000, 0, beban
// 100100000, 100000000, kas
// 100200000, 100000000, kas kecil
// 100300000, 100000000, bank
// 100300001, 100300000, bank bca
// 100300002, 100300000, bank bni
// 100300003, 100300000, bank mandiri
// 300100000, 300000000, modal disetor
// 300200000, 300000000, laba tahun berjalan

// transaksi
// _id, tanggal, keterangan
// 1, 2020/10/10, 

// jurnal
// _id, transaksiId, akun, debit, kredit
// 1, 1, harta, 1000000, 0
// 2, 1, modal, 0, 1000000


// back end: nodejs
// front end: my
// database: pouchdb
// desktop app: electron
// mobile app: cordova
// infracode: github