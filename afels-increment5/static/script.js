var now = new Date();
var hour = now.getHours();
var year = now.getFullYear();
//Greets user when they open website
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

// Dynamically changes copy right
function addYear(){
    var element = document.getElementById("copyYear");
    element.innerHTML = year;
}
addYear();

//Sets the 'active' class on the navigation link that matches the current page URL.

function ActiveNav() {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
      if (window.location.href === link.href) {
          link.classList.add("active");
      }
  });
}
//Toggles menu for mobile app
function toggleMenu() {
  const nav = document.querySelector(".nav_bar");
  nav.classList.toggle("responsive");
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


