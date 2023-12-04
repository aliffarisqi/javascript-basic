function totalduavolumekubus(a,b) {
	var total;
	var va,vb;

	va = a*a*a;
	vb = b*b*b;

	total = va + vb;
	return total;
}

alert(totalduavolumekubus(4,3));