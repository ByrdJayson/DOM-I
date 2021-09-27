const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//NAV MANIPULATION
let navItem1 = document.querySelector('nav a:nth-of-type(1)')
navItem1.textContent = siteContent['nav']['nav-item-1'];
let navItem2 = document.querySelector('nav a:nth-of-type(2)')
navItem2.textContent = siteContent['nav']['nav-item-2'];
let navItem3 = document.querySelector('nav a:nth-of-type(3)')
navItem3.textContent = siteContent['nav']['nav-item-3'];
let navItem4 = document.querySelector('nav a:nth-of-type(4)')
navItem4.textContent = siteContent['nav']['nav-item-4'];
let navItem5 = document.querySelector('nav a:nth-of-type(5)')
navItem5.textContent = siteContent['nav']['nav-item-5'];
let navItem6 = document.querySelector('nav a:nth-of-type(6)')
navItem6.textContent = siteContent['nav']['nav-item-6'];
navItem1.style.color = 'green';
navItem2.style.color = 'green';
navItem3.style.color = 'green';
navItem4.style.color = 'green';
navItem5.style.color = 'green';
navItem6.style.color = 'green';

//CTA MANIPULATION
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
let ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent['cta']['h1'];
let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

//MAIN SECTION MANIPULATION
let middleImage = document.getElementById('middle-img');

//FIRST BLOCK
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);
let mainHeader1 = document.querySelector('.text-content:nth-of-type(1) h4');
mainHeader1.textContent = siteContent['main-content']['features-h4'];
let mainP1 = document.querySelector('.text-content:nth-of-type(1) p');
mainP1.textContent = siteContent['main-content']['features-content'];
//SECOND BLOCK
let mainHeader2 = document.querySelector('.text-content:nth-of-type(2) h4');
mainHeader2.textContent = siteContent['main-content']['about-h4'];
let mainP2 = document.querySelector('.text-content:nth-of-type(2) p');
mainP2.textContent = siteContent['main-content']['about-content'];
//THIRD BLOCK - BOTTOM
let bottomHeader1 = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
bottomHeader1.textContent = siteContent['main-content']['services-h4'];
let bottomP1 = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
bottomP1.textContent = siteContent['main-content']['services-content'];
//FOURTH BLOCK - BOTTOM
let bottomHeader2 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
bottomHeader2.textContent = siteContent['main-content']['product-h4'];
let bottomP2 = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
bottomP2.textContent = siteContent['main-content']['product-content'];
//FIFTH BLOCK - BOTTOM
let bottomHeader3 = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
bottomHeader3.textContent = siteContent['main-content']['vision-h4'];
let bottomP3 = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
bottomP3.textContent = siteContent['main-content']['vision-content'];



let  contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];
let  contactAddress = document.querySelector('.contact p:nth-of-type(1)');
contactAddress.textContent = siteContent['contact']['address'];
let  contactPhone = document.querySelector('.contact p:nth-of-type(2)');
contactPhone.textContent = siteContent['contact']['phone'];
let  contactEmail = document.querySelector('.contact p:nth-of-type(3)');
contactEmail.textContent = siteContent['contact']['email'];

let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];


//ADDING NAV ELEMENTS
const navElement = document.createElement('a'); //THIS IS ONLY IN JS
navElement.textContent = 'SOMETHING';
navElement.href = '#';
document.querySelector('nav').appendChild(navElement);
const navElement2 = document.createElement('a'); //THIS IS ONLY IN JS
navElement2.textContent = 'SOMETHING 2';
navElement2.href = '#';
document.querySelector('nav').prepend(navElement2);
