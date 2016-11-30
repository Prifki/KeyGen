function getChar(){
		if (Math.random()>0.33)
			return Math.round(Math.random() * (122 - 97) + 97);
		if (Math.random()>0.66)
			return Math.round(Math.random() * (57 - 48) + 48);
		else
			return Math.round(Math.random() * (90 - 65) + 65);
}
function charChek(val) {
	if ((val>48&&val<57)||(val>65&&val<90)||(val>97&&val<122))
		return true;
	else
		return false;
}
function gen(){
	rule = 400;
	triada='';
	for (i=0;i<3;i++){
		var tmp=getChar();
		rule -= tmp;
		triada += String.fromCharCode(tmp);
	}
	return [triada,rule];
}
function makeQuart(){
	while(true) {
		var quarta='';
		var tmp=gen();
		if(charChek(tmp[1])){
			quarta=tmp[0]+String.fromCharCode(tmp[1]);
			break;
		}
	}
	return quarta;
}
exports.makeKey = function(){
	return (makeQuart()+'-'+makeQuart()+'-'+makeQuart()+'-'+makeQuart());
}