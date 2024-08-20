// Selecting Inputs
var name2 = document.getElementById("Name");
var dob = document.getElementById("DOB");
var state = document.getElementById("state");
var gender = document.querySelector(".gen");
var email = document.getElementById("Email");
var phNo = document.getElementById("num");
var languagesKnown = document.querySelector(".lan");
var userName = document.getElementById("user");
var passWord = document.getElementById("password");

// Register button function
function register() {
    var pass1 = document.getElementById("password").value;
    var pass2 = document.getElementById("conpass").value;
    if (pass1 == pass2){
    var name1 = '<td>' + name2.value + '</td>';
    var dob1 = '<td>' + dob.value + '</td>';
    var state1 = '<td>' + state.value + '</td>';
    var gender1 = '<td>' + gender.value + '</td>';
    var email1 = '<td>' + email.value + '</td>';
    var phNo1 = '<td>' + phNo.value + '</td>';
    var languagesKnown1 = '<td>' + languagesKnown.value + '</td>';
    var userName1 = '<td>' + userName.value + '</td>';
    var passWord1 = '<td>' + passWord.value + '</td>';

    document.getElementById("signUp").style.display = "block";
    document.getElementById("overlay2").style.display = "block";
    var trItem = document.createElement("tr");
    trItem.innerHTML = name1 + dob1 + state1 + gender1 + email1 + phNo1 + languagesKnown1 + userName1 + passWord1;
    var table1 = document.getElementById("tabappend1");
    table1.append(trItem);
    }
    else {
        document.getElementById("demo23").style.display = "block";
    }
}

