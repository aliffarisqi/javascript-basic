//membuat object ada 4 cara
//1 . cara literal
var mahasiswa = {
	nama:"bayu alif farisqi",
	nim :1800018334,
	email : 'jakartabanyu@gmail.com',
	jurusan : 'teknik informatika'
}

//2. dengan menggunakan function

function mahasiswaa(nama,nim,email,jurusan){
	var mhs = {}
	mhs.nama = nama;
	mhs.nim = nim;
	mhs.email = email;
	mhs.jurusan = jurusan;
	return mahasiswa;
}

var mhs2 = mahasiswaa('bayu','333','jakartabanyu','teknik');

//menggunakan construct
function Mahasantri(nama,nim,email,jurusan){
	this.nama = nama;
	this.nim = nim;
	this.email = email;
	this.jurusan = jurusan;
}

var mhs3 = new Mahasantri('bayu','223','jakartabanyu','teknik informatika');