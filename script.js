window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var ltext = document.querySelector('.ltext');
    var bar1 = document.querySelector('.bar1');
    var bar2 = document.querySelector('.bar2');
    if (window.scrollY > 5) {
        ltext.style.color = '#3b3b3b';
        bar1.style.backgroundColor = '#3b3b3b';
        bar2.style.backgroundColor = '#3b3b3b';
    } else {
        ltext.style.color = 'white';
        bar1.style.backgroundColor = 'white';
        bar2.style.backgroundColor = 'white';
    }
});



// script.js
const menuToggle = document.getElementById('menu-toggle');
const menuIcon = document.querySelector('.menu-icon');
const items = document.querySelector('.items');

menuIcon.addEventListener('click', () => {
    items.classList.toggle('show');
});


const menuToggle1 = document.querySelector('#menu-toggle');
const menuIcon1 = document.querySelector('.menu-icon');

menuToggle.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
});


// whatsapp function
function openWhatsApp() {
    var phoneNumber = "+3547608535";
    var message = "Hello, I'm interested in your product.";

    var url = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(phoneNumber) + "&text=" + encodeURIComponent(message);

    window.open(url);
}
// whatsapp function ends here

