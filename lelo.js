function results(){ 
var checkbox=document.getElementById("kiki");
if(!checkbox.checked==""){
alert("please agree with the last statement to continue");    
}      
if(document.form1.names.value==""){
alert("please fill the name");
document.form1.names.focus(); 
return false;  
}
 else if(document.form1.address.value==""){
alert("please fill the address");
document.form1.address.focus(); 
return false;  
}
else if(document.form1.email.value==""){
alert("please fill the email");
document.form1.email.focus(); 
return false;  
}
else if(document.form1.password.value.length<6){
alert("please enter the required password");
document.form1.password.focus(); 
return false;  
}

else if(document.form1.selection.value==""){
alert("please fill the selection");
document.form1.selection.focus(); 
return false;  
}
else if(document.form1.collegename.value==""){
alert("please fill the collegename");
document.form1.collegename.focus(); 
return false;  
}
else if(!checkbox.checked){
alert("please agree with last statement");
document.form1.checkbox.focus(); 
return false;  
}
const password=document.getElementById("my-password");
        const confirm=document.getElementById("confirm");
        if(password.value!==confirm.value){
             alert("use same password");
        }
        else{
            alert("registration succesful");
            return true;
        }
}   