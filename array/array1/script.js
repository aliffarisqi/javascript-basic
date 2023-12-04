//mengisi array

var arrayMahasiswa=['bayu','farisqi','alif'];
var nim=[];
nim = [18000,18001,18002];

var Data=['bayu','farisqi','alif',18000,18001,18002];
var Data2 = [arrayMahasiswa,nim];


console.log(nim);
console.log(arrayMahasiswa);
console.log(Data);
console.log(Data2);

//menghapus
 Data[0]=undefined;
 console.log(Data);

 //menampilkan dengan looping

 for(var i=0;i<arrayMahasiswa.length;i++){
 	console.log('Nama : '+arrayMahasiswa[i]);
 	console.log('Nim  : '+nim[i]);
 }
console.log('menambah dan menghapus di akhir');
console.log(arrayMahasiswa.join());
//menambah di akhir
arrayMahasiswa.push('ajay','irfan');
console.log(arrayMahasiswa.join());
//menghapus nilai terakhir
arrayMahasiswa.pop();
console.log(arrayMahasiswa.join());
//////////////////////////////////////////////////////
console.log('menambah dan menghapus di awal');
//menambah di akhir
arrayMahasiswa.unshift('nizar','jaki');
console.log(arrayMahasiswa.join());
//menghapus nilai terakhir
arrayMahasiswa.shift();
console.log(arrayMahasiswa.join(' - '));

console.log('menambah dan menghapus di bebas');
//penulisan splice(mau di taruh di index mana, mau menghapus berapa, mau menembahkan apa)
arrayMahasiswa.splice(2,0,"jakabaring");
console.log(arrayMahasiswa.join(' - '));
arrayMahasiswa.splice(2,2,"satria");
console.log(arrayMahasiswa.join(' - '));
console.log('mengiris array(copypaste) di bebas');

//slice(index awal, index akhir)
arrayMahasiswaBaru= arrayMahasiswa.slice(0,3);
console.log(arrayMahasiswaBaru.join(' - '));

var angka=[6,2,3,5,4,6,7,8,20,9,10];

//menggunakan perulangan biasa biasa
for(var i = 0 ;i<angka.length;i++){
	console.log(angka[i]);
}

//menggunakan forEach function declaration
function ang(e){
	console.log(e);
}
angka.forEach(ang);
//menggunakan forEach function expression
angka.forEach(function(e){
	console.log(e);
})

//array dengan forEach dan index
arrayMahasiswa.forEach(function(e,i){
	console.log('Mahasiswa ke '+i+' adalah '+e);
})

//menggunakan map, lebih powerfull dari forEach karena bisa pakai return
var angka2= angka.map(function(e){
	return e;
})

console.log(angka2.join('  '));
var angka3= angka.map(function(e){
	return e*2;
})
console.log(angka3.join('  '));

angka2.sort(function(a,b){
	return a-b;
})
console.log(angka2.join('  '));

//filter, untuk mencari angka pada array, bisa mengembalikan nilai kosong atau lebih dari satu nilai

angka4 = angka.filter(function(bebas){
	return bebas==4;
})
console.log(angka4);
angka5 = angka.filter(function(bebas){
	return bebas>=4;
})
angka5.sort(function(a,b){
	return a-b;
})
console.log(angka5.join(' , '));
//find mengembalikan satu nilai saja tapi tidak dalam keadaa array, 
angka6 = angka.find(function(bebas){
	return bebas>4; //akan mencari nilai lebih dari 4 pertama
})
console.log(angka6);
