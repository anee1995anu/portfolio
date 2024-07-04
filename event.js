function handleSubmit(e){
    const Fullname=document.getElementById("Fullname").value;
    const error=document.getElementById("error");

     const email=document.getElementById("email").value;
     const emailError=document.getElementById("emailError");

    const message=document.getElementById("message").value;
    const msgError=document.getElementById("msgError");

    
    

    error.style.display="none";

    if(Fullname.length<3){
    error.style.display="block";
error.style.color="red";
error.innerHTML="<b> Name should contain minimum 3 letters";
return false;
}


emailError.style.display="none";
if(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)==false){
emailError.style.display="block";
emailError.style.color="red";
emailError.innerHTML="<b> Enter valid email";
return false;
}







msgError.style.display="none";


if(message.length<9){
    msgError.style.display="block";
msgError.style.color="red";
msgError.innerHTML="<b> Message should contain minimum 5 letters";
return false;
}



}


