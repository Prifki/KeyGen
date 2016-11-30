function checkSymb(code){
	if((code>=48&&code<=57)||(code>=65&&code<=90)||(code>=97&&code<=122))
		return true;
	else return false;
}
function checkSum(string,from){
	var res=0;
	for(i=from;i<from+4;i++){
		if(checkSymb(string.charCodeAt(i)))
			res+=string.charCodeAt(i);			
	}
	if (res==400)
		return true;
	else
		return false;
}
exports.check = function(tocheck){
	if(tocheck.charCodeAt(4)==45&&tocheck.charCodeAt(9)==45&&tocheck.charCodeAt(14)){
		if (checkSum(tocheck,0)&&checkSum(tocheck,5)&&checkSum(tocheck,10)&&checkSum(tocheck,15))			
			return 1;
		else
			return 0;
	}
	else
		return 0;
}