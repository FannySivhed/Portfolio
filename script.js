let password = document.getElementById("password"); 
let power = document.getElementById("point"); 
password.oninput = function () { 
	let score = 0; 
	let value = password.value; 
	let widthPower = 
		["1%", "25%", "50%", "75%", "100%"]; 
	let colorPower = 
		["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"]; 

	if (value.length >= 8) { 
		let arrayTest = 
			[/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/]; 
		arrayTest.forEach((item) => { 
			if (item.test(value)) { 
				score += 1; 
			} 
		}); 
	} 
	if (value.length == 1) {
			genPassword();
	}
	else if (value.length == 0) {
			document.getElementById("result").value = " "
		}
		
	power.style.width = widthPower[score]; 
	power.style.backgroundColor = colorPower[score]; 
};
var result=document.getElementById("result");

function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var resultLength = 8;
    var result = "";
 for (var i = 0; i <= resultLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   result += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("result").value = result;
 }