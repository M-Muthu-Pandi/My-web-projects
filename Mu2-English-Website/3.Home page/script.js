let day;
switch(new Date().getDay()){
    case 0:
        day="Sunday";
        break;
    case 1:
        day="Monday";
        break;
    case 2:
        day="Tuesday";
        break;
    case 3:
        day="Wednesday";
        break;
    case 4:
        day="Thursday";
        break;
    case 5:
        day="Friday";
        break;
    case 6:
        day="Saturday";
}
document.getElementById("dayToday").innerHTML="Happy " + day;

if(new Date().getHours()>=4 && new Date().getHours()<12){
    alert("Good Morning");
}
else if (new Date().getHours()>=12 && new Date().getHours()<16){
    alert("Good Afternoon");
}
else if (new Date().getHours()>=16 && new Date().getHours()<22){
    alert("Good Evening");
}
else if (new Date().getHours()>=22 && new Date().getHours()<4){
    alert("Good night user. It's already too late, so go to bed");
}

function logOut() {
    document.getElementById("overlayExit").style.display = "block";
    document.getElementById("popupExit").style.display = "block";
}