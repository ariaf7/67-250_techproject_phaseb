// var x = 5;
// var y = 7;

// var z = x + y;
// console.log(z);

// var A = "Hello ";
// var B = "world!";

// var C = A + B;
// console.log(C);

// function sumnPrint(x1,x2){
//     console.log(x1+x2);
// }
// sumnPrint(x,y)
// sumnPrint(A,B)

// if (C.length > z) {
//     console.log(C);
//   } else if (C.length < z) {
//     console.log(z);
//   } else {
//     console.log("good job!");
//   }

// L1 = ["Watermelon","Pineapple","Pear","Banana"];
// L2 = ["Apple","Banana","Kiwi","Orange"];

// function findTheBanana(L){
//     var found = false; 
//     for (i = 0; i < L.length; i++)
//     {
//         if (L[i] = "Banana"){
//             found = true;
//         }
//     }
//     alert("We found the banana");
// }
// findTheBanana(L1)
// findTheBanana(L2)
var now = new Date();
var hour = now.getHours();
var year = now.getFullYear();
function greeting(h) {
    var element = document.getElementById("greeting");
    if (element) {
    if (h < 5 || h >= 20) {
      element.innerHTML = "Good night";
    } else if (h < 12) {
      element.innerHTML = "Good morning";
    } else if (h < 18) {
      element.innerHTML = "Good afternoon";
    } else {
      element.innerHTML = "Good evening";
    }
    }
  }
greeting(hour);  

function addYear(){
    var element = document.getElementById("copyYear");
    element.innerHTML = year;
}
addYear();

/* Sets the 'active' class on the navigation link that matches the current page URL.*/

function ActiveNav() {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
      if (window.location.href === link.href) {
          link.classList.add("active");
      }
  });
}


// Execute the function to set the active navigation link on page load
ActiveNav();


// When the "Read Less" button is clicked
$("#readLess").click(function(){ 
  $("#longIntro").hide(); // Hide the long introduction text
  $("#readLess").hide();  // Hide the "Read Less" button itself
  $("#readMore").show();  // Show the "Read More" button  

});

// When the "Read More" button is clicked
$("#readMore").click(function(){
  $("#longIntro").show();  // Show the long introduction text
  $("#readLess").show();   // Show the "Read Less" button
  $("#readMore").hide();   // Hide the "Read More" button  
});

$(".buyNowBtn").click(function(){ 
  $("#checkout").show();  // Show the checkout form

});

$("#submit").click(function(){ 
  alert("Redirecting to payment system.")

});
