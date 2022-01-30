function check_text() {
	var value = document.getElementById("console").value;

	if(value == "불꺼")
	{
		document.body.style.backgroundColor = '#606060';
	}
	else{
		console.log("다시 입력해주세요.");
	}
}