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