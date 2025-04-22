function validateFname() {

    var fname = document.getElementById("fname").value;
    var errorMessage = document.getElementById("fname-error");

    var namePattern =  /^[a-zA-Z]{1,30}$/;

    if (!namePattern.test(fname)) {

        errorMessage.textContent = "Invalid First Name";
        errorMessage.style.display = "block"; 
        return false;

}
}

function validateMiddle() { 
    let middle = document.getElementById("middle").value;
    const namePattern = /^[A-Z]+$/; 

    middle = middle.toUpperCase();
    document.getElementById("middle").value = middle;

    if(!middle.match(namePattern)){
        document.getElementById("middle-error").innerHTML = 
        "Middle Initial must be an uppercase letter";
        return false;
    } else {
        document.getElementById("middle-error").innerHTML = "";
        return true;
    }
}

function validateLname() {

    var lname = document.getElementById("lname").value;
    var errorMessage = document.getElementById("lname-error");

    var namePattern =  /^[a-zA-Z]{1,30}$/;

    if (!namePattern.test(lname)) {

        errorMessage.textContent = "Invalid Last Name";
        errorMessage.style.display = "block"; 
        return false;

}
}




function validateDob() {
    var dob = document.getElementById("dob");
    var errorMessage = document.getElementById("dob-error")

    var today = new Date();
    var maxDate = new Date(today.setFullYear(today.getFullYear() - 125));

    var selectedDate = new Date(dob.value);
    

    if(selectedDate > new Date()) {
        errorMessage.innerHTML = "Date of birth cannot be in the future.";
    } else if (selectedDate < maxDate) {
        errorMessage.innerHTML = "Date of birth cannot be more than 125 years ago.";
    } else {
        errorMessage.innerHTML = "";
    }
} 
        document.getElementById("dob").addEventListener("change" , validateDob); 

function validateSsn() {
    var ssn = document.getElementById("ssn").value;
    var errorMessage = document.getElementById("ssn-error");

    var ssnPattern = /^\d{9}$/;

    if(!ssnPattern.test(ssn)) {
        errorMessage.textContent ="Invalid SSN";
        errorMessage.style.display ="block";
    }else { 

       errorMessage.style.display ="none";
        
    }
    
}

 
        
function validateEmail() {
    var email = document.getElementById("email").value;
    var errorMessage = document.getElementById("email-error");

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if(!regex.test(email)) {
        errorMessage.textContent = 'Email must be in the format name@domain.tld.';
        return;
    }
  
    }

    function validatePhonenum() {
      var phonenum = document.getElementById("phonenum");
      var phonePattern = /^(\d{7,10}|\d{3}-\d{3}-\d{4}|\d{3}-\d{4}-\d{3})$/;
      var errorMessage = document.getElementById("phonenum-error");

      if(!phonePattern.test(phonenum)) {
      document.getElementById("phonenum-error").innerHTML =
        "Invalid Phone Number";
        
      } else {
        errorMessage.innerHTML = "";
      }

    }

    function validateCity() { 
        city = document.getElementById("city").value.trim();

        if (!city) {
        document.getElementById("city-error").innerHTML = "City can't be blank";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}
    

    document.getElementById("phonenum").addEventListener("input", function() {
  document.getElementById("phonenum-error").innerHTML = "";  
});


    function validateZip() {
        var zip = document.getElementById("zip").value;
        var errorMessage = document.getElementById("zip-error"); 
        
        var zipPattern = /^[0-9]{5}$/;

        if(!zipPattern.test(zip)) {
            errorMessage.innerHTML = "Zip code must be exactly 5 digits.";
            return false;
        } else {
            errorMessage.innerHTML = "";
            return true;
        }


    }

    function validateAddress1() { 
        var address1 = document.getElementById("address1");
        var errorMessage = document.getElementById("address1-error");

        if(address1.length < 2) {
            errorMessage.innerHTML = "Address must be at least 2 characters long.";
            return false;
        } else if (address1.length > 30) {
            errorMessage.innerHTML = "Address can't be more than 30 characters long.";
            return false;
        } else { 
            errorMessage.innerHTML = ""; 
            return true;
        }

        
    }

    //Review Button Code 

    function displayInput() {
        var fname = document.getElementById("fname").value;
        var middle = document.getElementById("middle").value;
        var lname = document.getElementById("lname").value;
        var userid = document.getElementById("userid").value;
        var ssn = document.getElementById("ssn").value;
        var dob = document.getElementById("dob").value;
        var phonenum = document.getElementById("phonenum").value;
        var address1 = document.getElementById("address1").value;
        var city = document.getElementById("city").value;
        var states = document.getElementById("states").value; 

        var gender = "";
        var genderRadios = document.getElementsByName("gender")
         for (var i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            gender = genderRadios[i].value;
            break;
        }
    
         }

        var insured = "";
        var insuranceRadios = document.getElementsByName("insured");
        for (var i = 0; i < insuranceRadios.length; i++) {
        if (insuranceRadios[i].checked) {
            insured = insuranceRadios[i].value;
            break;
        }
    }

    var tested = "";
    var covidRadios = document.getElementsByName("tested");
    for (var i = 0; i < covidRadios.length; i++) {
        if (covidRadios[i].checked) {
            tested = covidRadios[i].value;
            break;
        }
    }



    
        document.getElementById("displayText").innerText = 
        "First Name: " + fname + "\n" + "\n" +
         "Middle Initial: " + middle + "\n" + "\n" +
         "Last Name: " + lname  + "\n" + "\n" +
         "User ID: " + userid + "\n" + "\n" +
         "SSN: " + ssn + "\n" + "\n" +
         "DOB: " + dob + "\n" + "\n" +
         "Phone: " + phonenum + "\n" + "\n" +
         "Address: " + address1 + "\n" + "\n" +
         "City: " + city + "\n" + "\n" +
         "State: " + states + "\n" +"\n" +
         "Gender: " + gender + "\n" + "\n" +
         "Insured? " + insured + "\n" + "\n" + 
         "Tested Positive For Covid? " + tested; 

         
         
      }

      // Pain Scale Slider
    
      const slider = document.getElementById('painScaleSlider');
      const valueDisplay = document.getElementById('sliderValue');
      sliderValue.textContent = 'Current Pain: ' + slider.Value;
      
      
      
      slider.addEventListener('input', function() {
        valueDisplay.textContent = `Current value: ${slider.value}`;
      });

      



      // Returns the User ID as lowercase
      
      function validateUserid(){
        userid = document.getElementById("userid").value.toLowerCase();
         document.getElementById("userid").value = userid;

         var userIDPattern = /^[a-zA-Z][a-zA-Z0-9_-]*$/;
      

      if (userid.length == 0){
        document.getElementById("userid-error").innerHTML = 
        "User ID can't be left blank";
          return false ;

      }

      if(userid.length <5){
        document.getElementById("userid-error").innerHTML =
        "User ID must be 5 characters minimum";
        return false;      
      }

      if(userid.length >20){
        document.getElementById("userid-error").innerHTML =
        "User ID can not be greater than 20 characters";
        return false;   

      } 

      if (!userIDPattern.test(userid)) {
    document.getElementById("userid-error").innerHTML = "User ID must start with a letter and can only contain letters, numbers, dashes, and underscores.";
    return false;
  }

      
      
      else {
        document.getElementById("userid-error").innerHTML ="";
        return true;
      }

    }

        
    function confirmPword() {
        pwd1 = document.getElementById("pwd").value;
        pwd2 = document.getElementById("pwd2").value;
    
        if (pwd1 !== pwd2) {
            document.getElementById("pwd2-error").innerHTML = 
            "Passwords don't match";
            return false;
        } else {
            document.getElementById("pwd2-error").innerHTML = 
            "Passwords match!!";
            return true;
        }
    }
      //validates all information 
     function validateEverything() {
        let valid = true;

        if(!validateFname()) { 
             valid = false; 
        }
        if(!validateMiddle()){
              valid = false; 
        }  
        if(!validateLname()){
             valid = false;
        } 
        if(!validateDob()){ 
            valid = false;
        }  
        if(!validateSsn()) {
             valid = false; 
        }
        if(!validateEmail()) {
             valid = false; 
        }  
        if(!validateCity()){
              valid = false;
        } 

        if(valid) {
            document.getElementById("submit").disabled = false;
        } else {
            showAlert(); 
        }

     }

     function showAlert() { 
        var alertBox = document.getElementById("alert-box");
        var closeAlertBox = document.getElementById("close-alertbox");

        alertBox.style.display = "block"; 
        closeAlertBox.onclick = function() { 
            alertBox.style.display = "none"; 
        };

     }

     function setCookie (name, cvalue, expiryDays) {
        var day = new Date();
        day.setTime(day.getTime() + (expiryDays* 24 * 60 * 60 *1000));
        var expires ="expires=" + day.toUTCString();
        document.cookie = name + "=" +cvalue + ";" + expires + ";path=/";
     }

     function getCookie (name) {
        var cookieName = name + "=";
        var cookies = document.cookie.split(';');

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if(cookie.indexOf(cookieName) == 0 ) {
                return cookie.substring(cookieName.length, cookie.length);
            }
            
        }
        return "";
     }

     var inputs = [
        {id: "fname", cookieName: "firstName"},
        {id: "middle", cookieName: "middleInitial"},
        {id: "lname", cookieName: "lastName"},
        {id: "ssn", cookieName: "ssn"},
        {id: "dob", cookieName: "dob"},
        {id: "phonenum", cookieName: "phonenum"}
    ];

inputs.forEach(function(input) {
    var inputElement = document.getElementById(input.id);

    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !=="") {
        inputElement.value = cookieValue;
    }

    inputElement.addEventListener("input", function() {
        setCookie(input.cookieName, inputElement.value, 30);

        if(input.cookieName === "firstName" && inputElement.value.trim() !== "") {
            showWelcome(inputElement.value.trim());
        }
    });
});

function showWelcome(firstName) {

    document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName + ".<br>";
    document.getElementById("welcome2").innerHTML = 
    "<a href='#' id = 'new-user'> Not " + firstName + "? Click here to start a new patient form.</a>";

    document.getElementById("new-user").addEventListener("click", function () {
        inputs.forEach(function(input) {
            setCookie(input.cookieName, "", -1);
        });
        location.reload();
    });

} 

const firstName = getCookie("firstName");
if (firstName !== "") {
    showWelcome(firstName);
}
    

     document.getElementById("remember-me").addEventListener("change", function () {
        const rememberMe = this.checked;

        if (!rememberMe) {
            deleteAllCookies();
            console.log("Cookies deleted");
        } else {
            inputs.forEach(function(input) {
                const inputElement = document.getElementById(input.id);
                if (inputElement.value.trim() !== ""){
                    setCookie(input.cookieName, inputElement.value, 30);
                }
            });
            console.log("Cookies saved ");
        }
    });

    function deleteAllCookies() {
        document.cookie.split(";").forEach(function (cookie) {
            let eqPos = cookie.indexOf("=");
            let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
        });
    }

    document.addEventListener("DOMContentLoaded", function() {
        const rememberMe = document.getElementById("remember-me").checked;

        if(!rememberMe) {
            deleteAllCookies();
        }
});