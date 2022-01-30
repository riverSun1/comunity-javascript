var app = document.getElementById("type");

var typewriter = new Typewriter(app, {
    loop: false,
});

function check_text() {
    var value = document.getElementById("console").value;
	var reply = document.getElementById("cat_console");
    var text = document.getElementById("text")
    
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
    else if(value == "뷁"){
        reply.innerHTML = "냐앙?";
        type.style.color = "black"; 
        type.style.backgroundColor = "#76b3fa";
        
        typewriter
            .typeString('코묘가 알아듣지 못한 것 같다.')
            .pauseFor(1300)
            .deleteAll()
            .typeString('다시 한 번 말해보자.')
            .pauseFor(2500)
            .deleteAll()
            .start();
     }
}