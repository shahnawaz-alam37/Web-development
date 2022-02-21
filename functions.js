document.getElementById('head').onclick=changecolor;
function changecolor(){
    document.body.style.color="purple";
}

document.getElementById('cred').onclick=function(){
    document.getElementById('body').style.color = "red";
}
document.getElementById('cgreen').onclick=function(){
    document.getElementById("body").style.color = "green";
}

document.getElementById('black').onclick= black;
function black(){
    document.getElementById('body').style.backgroundColor='black';
}
function gray() {
    document.getElementById('body').style.backgroundColor='gray';
}