function password(){
    let p1=document.getElementById("password").value;
        let upper=0;
        let lower=0;
        let num=0;
        let special=0;
        if((p1.length>=8)&&(p1.length<=16)){
        for(let i=0;i<p1.length;i++){
            if((p1[i]>'A')&&(p1[i]<='Z')){
                upper++;
            }else if((p1[i]>='a')&&(p1[i]<='z')){
                lower++;
            }else if((p1[i]>='0')&&(p1[i]<='9')){
                num++;
            }else{
                special++;
            }
        }
        if((upper>=1)&&(lower>=1)&&(num>=1)&&(special>=1)){
            window.location.href="https://www.facebook.com";

        }else{
            alert("password is weak");
        }
    }
}
function mobile(){
    let num=document.getElementById("phno").value;
    if((num.length==10)&&(num[0]>=6)&&(num[0]<=9)){
        alert("valid number");
    }
    else{
        alert("not valid number");
    }
}