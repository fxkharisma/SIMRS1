# SIMRS
 
## kelompokPengguna
**tabel kelompokPengguna**

name | type | desc
--- | --- | ---
_id | `String` | keterangan ...
kelompok | `String` | keterangan ...
nama | `String` | keterangan ...

**contoh data**
_id | kelompok | nama
--- | --- | ---
1 | 0 | karyawan
2 | 0 | pelanggan
3 | 1 | medis
4 | 1 | non medis
5 | 3 | perawat
6 | 3 | doktor

## Pengguna
**tabel pengguna**

name | type | desc
--- | --- | ---
_id | `String` | keterangan ...
nama | `String` | keterangan ...
tanggalLahir | `Date` | keterangan ...
tempatLahir | `String` | keterangan ...
saldoAwal | `Number` | keterangan ...
saldoAkhir | `Number` | keterangan ...

**contoh data**
_id | nama | tanggalLahir | tempatLahir | saldoAwal | saldoAkhir
--- | --- | --- | --- | --- | ---
1 | andi | 2020/10/10 | pacitan | 0 | 0