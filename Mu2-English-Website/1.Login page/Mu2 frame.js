function sample(){
    var passw = document.getElementById("pass").value;
    if (passw == 'SmartMu2') {
        document.getElementById("overlay1").style.display = "block";
        document.getElementById("popup2").style.display = "block";
        
    }
    else {
        document.getElementById("popup1").style.display = "block";
        document.getElementById("overlay1").style.display = "block";
    }
}

function forgot() {
        document.getElementById("overlay1").style.display = "block";
        document.getElementById("forgot").style.display = "block";
}

function otp() {
    document.getElementById("demo").style.display = "block";

}

function password2() {
    var pass1 = document.getElementById("pass1").value;
    if (pass1 == "0744") {
        document.getElementById("overlay1").style.display = "block";
        document.getElementById("password1").style.display = "block";

    }
    else {
        document.getElementById("demo1").textContent = "Wrong OTP. Try Again";
    }
}

function passwordChange() {
    var newpass = document.getElementById("newpassword").value;
    var repass = document.getElementById("repassword").value;
    if (repass == newpass) {
        document.getElementById("success").style.display = "block";
        document.getElementById("fail").style.display = "none";
    }
    else {
        document.getElementById("success").style.display = "none";
        document.getElementById("fail").style.display = "block";
    }
}