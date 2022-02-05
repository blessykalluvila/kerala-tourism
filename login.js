let email=document.getElementById("usrnme");
let password=document.getElementById("pwd");
function validate()
{
    console.log(password.value);
    if(email.value.trim()==""||password.value.trim()=="")
    {
        alert("Fields can not be empty");
    }
    else{
        alert("Validation is proper");
    }

}
