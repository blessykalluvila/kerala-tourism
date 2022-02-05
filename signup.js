let phone=document.getElementById("phno");
let email=document.getElementById("email");
let password=document.getElementById("pwd");
let password1=document.getElementById("pwc");


function validation()
{

    var eml = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneno1 = /^\d{10}$/;
    var phoneno2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    // Phone number validation
    if((phone.value.match(phoneno1))&&(phone.value.match(phoneno2)))
        {
            alert("phone number format is correct");
        }
      else
        {
        alert("Invalid Phone number format: hints to correct-Should contains 10 nos only and in either of these formats- xxx-xxx-xxxx,xxx.xxx.xxxx,xxx xxx xxxx");
       
        }

        //email validation

      if (email.value.match(eml)) {
         alert("Mail ID format is approved!");

        }
      else {
          alert("Mail ID format is not approved!");

      }

      if(password.value==password1.value)
{
      alert("Password is approved");
    }
    else{
        alert("Passwords not matching");
    }
   
    
}
