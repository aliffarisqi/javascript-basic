var mahasiswa={
	nama :"bayu alif farisqi",
	nim : 180018335,
	umur : 20,
	alamat : {
		desa : "danareja",
		kecamatan : "balapulang",
		kabupaten : "tegal",
	},
	sapa : function () {
		return "hallo nama saya "+this.nama+ " nim saya" +this.nim+"dan saaya tinggal di desa "+ this.alamat.desa+ " kecamatan "+ this.alamat.kecamatan+ " kabupaten "+ this.alamat.kabupaten;
	}
};