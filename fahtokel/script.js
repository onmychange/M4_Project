var a = 0;
var units = 1;
var Kelvin = ((5/9)*((a*1)+459.67)).toFixed(2);


function inputTemp(){
	a = document.getElementById("input").value;
	console.log(a);
	return a;

}

(function output(){
	if(units ===1 && a!==0){
	document.getElementById("output-box").innerHTML = ((5/9)*((a*1)+459.67)).toFixed(2);
	document.getElementById("unit1").innerHTML = "F&deg";
	document.getElementById("unit2").innerHTML = "K&deg";
	}
   else if(units ===1 && a===0) {
		document.getElementById("output-box").innerHTML = "";
		document.getElementById("unit1").innerHTML = "F&deg";
		document.getElementById("unit2").innerHTML = "K&deg";
	} else {
		document.getElementById("output-box").innerHTML = "";
		document.getElementById("unit1").innerHTML = "F&deg";
		document.getElementById("unit2").innerHTML = "K&deg";
	}


	var t = setTimeout(output, 500);
})();
