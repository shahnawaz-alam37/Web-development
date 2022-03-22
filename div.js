function clearscreen(){
    document.getElementById("yput").value="";
}
function display(value){
     document.getElementById("yput").value+=value;
}
function calculate(){
    let p=document.getElementById('yput').value;
    q = eval(p);
    document.getElementById('yput').value=q;
}
function dark(){
    document.getElementById('body').style.backgroundColor='rgb(78, 64, 64)';
    document.getElementById('h1').style.color='white';
    document.getElementById('h3').style.color='white';
}
function light(){
    document.getElementById('body').style.backgroundColor='white';
    document.getElementById('h1').style.color='black';
    document.getElementById('h3').style.color='black';
}