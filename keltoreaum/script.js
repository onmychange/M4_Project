var a = 0;
var units = 1;
var Reaumur = ((a - 273.15)* 0.80000).toFixed(2);


function inputTemp(){
	a = document.getElementById("input").value;
	console.log(a);
	return a;

}

(function output(){
	if(units ===1 && a!==0){
	document.getElementById("output-box").innerHTML = ((a - 273.15)* 0.80000).toFixed(2);
	document.getElementById("unit1").innerHTML = "K&deg";
	document.getElementById("unit2").innerHTML = "R&deg";
	}
   else if(units ===1 && a===0) {
		document.getElementById("output-box").innerHTML = "";
		document.getElementById("unit1").innerHTML = "K&deg";
		document.getElementById("unit2").innerHTML = "R&deg";
	} else {
		document.getElementById("output-box").innerHTML = "";
		document.getElementById("unit1").innerHTML = "K&deg";
		document.getElementById("unit2").innerHTML = "R&deg";
	}


	var t = setTimeout(output, 500);
})();
