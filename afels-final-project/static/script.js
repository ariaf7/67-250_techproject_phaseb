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

// changes copy right year
function addYear(){
    var element = document.getElementById("copyYear");
    element.innerHTML = year;
}
addYear();

// Jorge helped with this
function calculatePrice(){
  var tickets = parseInt(document.getElementById("ticket").value, 10);

  if (!isNaN(tickets) && tickets > 0){
    var price = tickets * 18;
    $("#totalPrice").text(price);
  } else {
    $("#totalPrice").text(0);
  }

}
$("#ticket").on("input", calculatePrice);

// FROM SLIDES
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


// FROM SLIDES ALL OF THIS
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

$("#checkout").submit(function() {
  if (!this.checkValidity()) {
    return;
  }
  var tickets = parseInt(document.getElementById("ticket").value, 10);
  $("#checkout").hide();
  $("#confirmation").show();
  $("#message").text("Your order was successful!");
  $("#total").text("Total Cost: $" + (tickets*18));
  return false;
});

/* THIS IS FROM  https://www.w3schools.com/howto/howto_js_slideshow.asp */

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

