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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


navLink1 = document.querySelector('nav a');
navLink2 = navLink1.nextElementSibling;
navLink3 = navLink2.nextElementSibling;
navLink4 = navLink3.nextElementSibling;
navLink5 = navLink4.nextElementSibling;
navLink6 = navLink5.nextElementSibling;

navLink1.textContent = siteContent['nav']['nav-item-1'];
navLink2.textContent = siteContent['nav']['nav-item-2'];
navLink3.textContent = siteContent['nav']['nav-item-3'];
navLink4.textContent = siteContent['nav']['nav-item-4'];
navLink5.textContent = siteContent['nav']['nav-item-5'];
navLink6.textContent = siteContent['nav']['nav-item-6'];

const ctaText = document.querySelector('.cta-text h1');
const ctaButton = document.querySelector('.cta-text button');
const ctaImg = document.querySelector('#cta-img');
ctaText.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;
ctaImg.src = 'img/header-img.png';


const featuresH4 = document.querySelector('.top-content .text-content h4');
const featuresP = document.querySelector('.top-content .text-content p');
featuresH4.textContent = siteContent['main-content']['features-h4'];
featuresP.textContent = siteContent['main-content']['features-content'];

const aboutH4 = document.querySelector('.text-content:nth-of-type(2) h4');
const aboutP = document.querySelector('.text-content:nth-of-type(2) p');

const midImg = document.querySelector('.middle-img');
midImg.src = 'img/mid-page-accent.jpg';


aboutH4.textContent = siteContent['main-content']['about-h4'];
aboutP.textContent = siteContent['main-content']['about-content'];

const servicesH4 = document.querySelector('.bottom-content .text-content h4');
servicesH4.textContent = siteContent['main-content']['services-h4'];

const servicesP = document.querySelector('.bottom-content .text-content p');
servicesP.textContent = siteContent['main-content']['services-content'];

const productH4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
productH4.textContent = siteContent['main-content']['product-h4'];

const productP = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
productP.textContent = siteContent['main-content']['product-content'];





const visionH4 = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
visionH4.textContent = siteContent['main-content']['vision-h4'];

const visionP = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
visionP.textContent = siteContent['main-content']['vision-content'];

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];
const contactP1 = document.querySelector('.contact p');
const contactP2 = contactP1.nextElementSibling;
const contactP3 = contactP2.nextElementSibling;

contactP1.textContent = siteContent['contact']['address'];
contactP2.textContent = siteContent['contact']['phone'];
contactP3.textContent = siteContent['contact']['email'];


const footer = document.querySelector('footer p');

footer.textContent = siteContent['footer']['copyright'];
