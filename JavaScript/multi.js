function add(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let add=num1 + num2;
    alert(add);
    document.body.style.backgroundColor="red";
    document.getElementById("num1").style.color="blue";
    document.getElementById("num1").style.borderRadius="10px";
}
function sub(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let sub=num1-num2;
    alert(sub);
    window.location.href="./JavaScript\index.html"
}
function multi(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let mul=num1*num2;
    alert(mul);
}
function division(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let divide=num1/num2;
    alert(divide);
}