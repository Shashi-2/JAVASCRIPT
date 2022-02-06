// captcha generater

function Captcha(){
	let alpha=new Array('A','B','C','D','E','F','G','H');
	let a=alpha[Math.floor(Math.random()*alpha.length)];
	let b=alpha[Math.floor(Math.random()*alpha.length)];
	let c=alpha[Math.floor(Math.random()*alpha.length)];
	let d=alpha[Math.floor(Math.random()*alpha.length)];
	let e=alpha[Math.floor(Math.random()*alpha.length)];
	
	let result = a+" "+b+" "+c+" "+d+" "+e;
	document.getElementById("one").value = result;
}

// isvalid

function Valid(){
	let yoo=removeSpace(document.getElementById("one").value);
	let yooa=removeSpace(document.getElementById("two").value);
	
	if(yoo==yooa)
	{
		return true
	}else{
		return false
	}	
}
x=Valid()

// remove spaces

function removeSpace(s){
	return s.split(" ").join('')
	//      A,D,C,F,B
	//      ADCFB
}