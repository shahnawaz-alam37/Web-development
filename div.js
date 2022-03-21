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
}
function light(){
    document.getElementById('body').style.backgroundColor='white'
}