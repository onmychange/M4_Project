var a = 0;
var units = 1;
var celcius = (a/0.80000).toFixed(2);


function inputTemp(){
	a = document.getElementById("input").value;
	console.log(a);
	return a;

}

(function output(){
	if(units ===1 && a!==0){
	document.getElementById("output-box").innerHTML = (a/0.80000).toFixed(2);
	document.getElementById("unit1").innerHTML = "R&deg";
	document.getElementById("unit2").innerHTML = "C&deg";
	}
   else if(units ===1 && a===0) {
		document.getElementById("output-box").innerHTML = "";
		document.getElementById("unit1").innerHTML = "R&deg";
		document.getElementById("unit2").innerHTML = "C&deg";
	} else {
		document.getElementById("output-box").innerHTML = "";
		document.getElementById("unit1").innerHTML = "R&deg";
		document.getElementById("unit2").innerHTML = "C&deg";
	}


	var t = setTimeout(output, 500);
})();
