var sideNav = document.querySelector(".side-nav");
function sidenav() {
    sideNav.style.left = "0";
}

function closeSideNav() {
    sideNav.style.left = "-68%";
}

// Products
var product = document.getElementById("products");
var search = document.getElementById("search");
var productList = product.querySelectorAll("div");
console.log(productList[0]);

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase();

    for (count = 0; count<productList.length; count=count+1) {
        var productName = productList[count].querySelector("p").textContent;

        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display = "none";
        }
        else {
            productList[count].style.display = "block";
        }
    }
})
