function check_text() {
	var value = document.getElementById("console").value;
	console.log(value);

	if(value == "alert"){
		alert("경고창이 떴습니다.");
	}
	else{
		console.log(value);
	}
}