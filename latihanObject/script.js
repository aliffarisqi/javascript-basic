//membuat object angkot
// sopir = eko, penumpang = osong, kas = 0, trayek = balapulang slawi

function Angkot(sopir,penumpang,kas,trayek) {
	this.sopir = sopir;
	this.penumpang = penumpang;
	this.kas = kas;
	this.trayek = trayek;

	this.penumpangNaik = function(namaPenumpang){
		this.penumpang.push(namaPenumpang);
		return this.penumpang;
	}
	this.penumpangTurun = function(namaPenumpang, bayar){
		if(this.penumpang.length === 0 ){
			alert('penumpang masih kosong');
			return false;
		}
		for(var i = 0; i<this.penumpang.length;i++){
			if(this.penumpang[i]===namaPenumpang){
				this.penumpang[i]=undefined;
				this.kas += bayar;
				return this.penumpang;
			}
			else if(i==penumpang.length -1 && penumpang[i] != namaPenumpang){
				console.log(namaPenumpang+ ' tidak ada bro');
				return penumpang;
			}
		}

	}
}


var angkot1 = new Angkot('eko',[],0,['balapulang','slawi']);