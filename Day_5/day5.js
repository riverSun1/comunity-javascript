var arr = [];

arr[0] = 2;
arr[1] = "가나다라";
arr[2] = true;
arr[3] = {key: "값"};
arr[4] = undefined;
arr[5] = {key: "값"};


i=0;

function Btn(){
    console.log(typeof(arr[i]));
    i = i+1;
}