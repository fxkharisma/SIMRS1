
var tblPasien = [
    {noRM: '2021050001', /*varchar[pk]*/ nmPasien: 'andi', /*varchar*/ jnsKlm: 'laki-laki', /*char*/ tglLahir: '10/10/1990', /*date*/ noTlp: '6281335456123', /*varchar*/ email: 'andi@law.com', /*varchar*/ stsDtPasien: true, /*boolean*/ ketStsPasien: '', /*varchar*/}
]

var tblAlmatTetap = [
    {kdAlmTetap: '1', /*varchar*/ noRM: '2021050001', /*varchar*/ alamat: 'perumnas asabri n/9', /*varchar*/ nmPropinsi: 'jawa timur', /*varchar*/ nmKabKota: 'pacitan', /*varchar*/ nmKecamatan: 'pacitan', /*varchar*/ nmKelurahan: 'pacitan', /*varchar*/ rt: '003', /*char*/ rw: '008', /*char*/ stsDom: '', /*boolean*/ stsAlmTetap: '', /*varchar*/}
]

var tblDomSementara = [
    {kdDomSementara: '1', /*varchar*/ noRM: '2021050001', /*varchar*/ alamat: 'perumnas asabri n/9', /*varchar*/ nmPropinsi: 'jawa timur', /*varchar*/ nmKabKota: 'pacitan', /*varchar*/ nmKecamatan: 'pacitan', /*varchar*/ nmKelurahan: 'pacitan', /*varchar*/ rt: '003', /*char*/ rw: '008', /*char*/ stsDomSementara: '', /*varchar*/}
]

var tblHisAlmDom = [
    {kdHisAlmDom: '1', /*varchar*/ noRM: '2021050001', /*varchar*/ kdALmDomLama: '', /*varchar*/ alamat: 'perumnas asabri n/9', /*varchar*/ nmPropinsi: 'jawa timur', /*varchar*/ nmKabKota: 'pacitan', /*varchar*/ nmKecamatan: 'pacitan', /*varchar*/ nmKelurahan: 'pacitan', /*varchar*/ rt: '003', /*char*/ rw: '008', /*char*/ tglUpdate: '20210507004400', /*date*/}
]

var tblKrtIdentitas = [
    {noKrtId: '1', /*varchar*/ noRM: '2021050001', /*varchar*/ jnsId: 'ktp', /*varchar*/ idLainnya: '', /*varchar*/ masaBerlaku: '2030/05/07', /*date*/}
]

var tblPropinsi = [
    {kdPropinsi: '1', /*varchar*/ nmPropinsi: 'jawa timur', /*varchar*/}
]

var tblKabKota = [
    {kdKabKota: '1', /*varchar*/ kdPropinsi: '1', /*varchar*/ nmKabKota: 'pacitan', /*varchar*/}
]

var tblKecamatan = [
    {kdKecamatan: '1', /*varchar*/ kdKabKota: '1', /*varchar*/ nmKecamatan: 'pacitan', /*varchar*/}
]

var tblKelurahan = [
    {kdKelurahan: '1', /*varchar[pk]*/ kdKecamatan: '1', /*varchar*/ nmKelurahan: 'pacitan', /*varchar*/}
]

var tblJabatan = [
    {kdJabatan: '', /*varchar[pk]*/ nmJabatan: '', /*varchar*/ lvlJabatan: '', /*varchar*/ stsJabatan: '', /*char*/}
]

var tblBagian = [
    {kdBagian: '', /*varchar*/ nmBagian: '', /*varchar*/ stsBagian: '', /*char*/}
]

var tblSubBagian = [
    {kdSubBagian: '', /*varchar[pk]*/ kdBagian: '', /*varchar*/ nmSubBagian: '', /*varchar*/ stsSubBagian: '', /*varchar*/}
]

var tblPosYan = [
    {kdPosYan: '', /*varchar*/ nmPosYan: '', /*varchar*/ kdBagian: '', /*varchar*/ kdSubBagian: '', /*varchar*/ stsPosYan: '', /*varchar*/}
]

var tblPnjmKesehatan = [
    {kdPnjmKes: '', /*varchar*/ nmPnjmKes: '', /*varchar*/ instPnjmKes: '', /*varchar*/ stsPnjmKes: '', /*varchar*/}
]

var tblHisKSJamkes = [
    {kodeHistoriKS: '', /*varchar*/ kdPnjmKes: '', /*varchar*/ noKerjaSama: '', /*varchar*/ tglMulaiKS: '', /*date*/ tglAkhirKS: '', /*date*/}
]

var tblRegistrasi = [
    {kdRegist: '', /*varchar*/ noRM: '', /*varchar*/ tglRegist: '', /*date*/ nmPasien: '', /*varchar*/ kdPosYan: '', /*varchar*/ klpPasien: '', /*varchar*/ jnsRegist: '', /*varchar*/ kdPnjmKes: '', /*varchar*/ crReg: '', /*varchar*/ stsRegist: '', /*char*/}
]

// test
