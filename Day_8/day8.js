var myName = ["S", "u", "n", "1"];
var max = myName.length;
var i = 0;
var total = [];  //문자열 하나씩 담을 string변수
var num = 1;

function addName(){
    var name = document.getElementsByClassName('container');

    if(i < max){
        total += myName[i];
        name[0].innerHTML = total;
        i++;
    }
}