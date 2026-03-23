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

// Map script

const mapElement = document.getElementById("map");

if (mapElement) {
  var map = L.map('map').setView([49.4918, -117.2948], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  L.marker([49.4886, -117.2810])
    .addTo(map)
    .bindPopup("MonoMuse Museum, Nelson, BC")
    .openPopup();
}



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

$("#checkout").submit(function(e) {
  if (!this.checkValidity()) {
    // Let browser show validation messages
    return;
  }

  alert("Redirecting to payment system.");
});


