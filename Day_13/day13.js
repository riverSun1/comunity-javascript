function check_text() {
    var value = document.getElementById("console").value;
	var reply = document.getElementById("cat_console");
	var n = 0; // 몇 번째 입력인지 구분하기 위한 변수 선언 및 초기화
    console.log(n);

	if(value == "불꺼"){
        reply.innerHTML = "냥!";
	    document.body.style.backgroundColor = '#606060';
	}
	else if(value == "불켜"){
			reply.innerHTML = "냥?";
            reply.style.background = '#FFFFFF';
    }
    else if(value == "불다켜"){
			reply.innerHTML = "냐앙~!";
			document.body.style.backgroundColor = '#FFFFFF';
	}
}