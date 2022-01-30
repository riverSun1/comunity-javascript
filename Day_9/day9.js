var inter = {
    name : "인터스텔라",
    since : "2014",
    genre : "SF/모험",
}

var resid = {
    name : "레지던트 이블",
    since : "2002",
    genre : "액션, 호러",
}

var frozen2 = {
    name : "겨울왕국2",
    since : "2019",
    genre : "어린이/뮤지컬",
}


function inBtn(){
    var nameText = document.getElementsByClassName("container");
    nameText[0].innerHTML= inter.name + '<br>' + inter.since + '<br>' + inter.genre + '<br>'
}

function reBtn(){
    var nameText = document.getElementsByClassName("container");
    nameText[0].innerHTML= resid.name + '<br>' + resid.since + '<br>' + resid.genre + '<br>'
}

function frBtn(){
    var nameText = document.getElementsByClassName("container");
    nameText[0].innerHTML= frozen2.name + '<br>' + frozen2.since + '<br>' + frozen2.genre + '<br>'
}