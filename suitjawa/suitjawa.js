
var tanya=true;
while(tanya){
	//mengambil inputan user
	var p  = prompt( 'silahkan pilih antara : gajah, orang atau semut ');

	//mengambil inputan komputer
	var comp=Math.random();
	if(comp <0.34){
		comp='gajah';
	}
	else if(comp >=0.34 && comp <0.7){
		comp='orang';
	}
	else{
		comp = 'semut';
	}

	//membandingkan 2 inputan
	var hasil = '';
	if(p == comp ){
		hasil = 'Seri';
	}
	else if(p=='gajah'){
		if(comp=='orang'){
			hasil = 'Menang';
		}
		else{
			hasil == 'Kalah';
		}
		// hasil = (comp == 'orang ') ? 'Menang' : 'Kalah' ; 
	}
	else if (p =='orang') {
		hasil = (comp == 'semut') ? 'Menang' : 'Kalah' ;
	}
	else if (p =='semut'){
		hasil = (comp == 'gajah') ? 'Menang' : 'Kalah' ;
	}
	else{
		hasil = 'anda memasukan pilihan yang salah';
	}
	//output
	alert('Kamu memilih '+p+' sedangkan komputer Memilih '+ comp +'\nmaka hasilnya : kamu '+hasil);

	tanya = confirm('ingin main lagi ? ');
}
alert('terimakasih and sudah bermain. ');