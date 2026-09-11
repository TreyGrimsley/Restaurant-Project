export function loadHome(){


const content = document.querySelector('#content');

content.style.backgroundColor = "rgb(14, 68, 176)";


const divContent1 = document.createElement('div');
divContent1.classList = 'home-div-content';

const headingAndButtonDiv = document.createElement('div')
headingAndButtonDiv.id = 'heading-div';

const contentHeading1 = document.createElement('h1');
contentHeading1.classList = 'content-heading';
contentHeading1.textContent = "Shop to Support Your Local MakoGo!";


const buyNowBtn = document.createElement('button');
buyNowBtn.classList = 'buy-now-btn';
buyNowBtn.textContent = "BUY NOW";

// Making a carousel of images to show of apperal for gift store

const imgContainer = document.createElement('div');
imgContainer.classList = 'apperal-img-container';

const imgSlides = document.createElement('div')
imgSlides.classList = 'apperal-slides';

const imgDiv1 = document.createElement('div');
imgDiv1.classList = 'apperal-img active';
const img1 = document.createElement('img');
    img1.alt = "MakoGo apperal";
    img1.src = "./Images/apperal1.png";

const imgDiv2 = document.createElement('div');
imgDiv2.classList = 'apperal-img';
const img2 = document.createElement('img');
    img2.alt = "MakoGo apperal";
    img2.src = "./Images/apperal2.png";

const imgDiv3 = document.createElement('div');
imgDiv3.classList = 'apperal-img';
const img3 = document.createElement('img');
    img3.alt = "MakoGo apperal";
    img3.src = "./Images/apperal3.png";

const imgDiv4 = document.createElement('div');
imgDiv4.classList = 'apperal-img';
const img4 = document.createElement('img');
    img4.alt = "MakoGo apperal";
    img4.src = "./Images/apperal4.png";


const eventDiv = document.createElement('div');
eventDiv.id = 'event-div';

const event = document.createElement('h1');
event.classList = 'event';
event.textContent = "Events and Deals"

const eventHeading = document.createElement('h1');
eventHeading.classList = 'event-heading';
eventHeading.textContent = "Mako Hours"

const eventDesc = document.createElement('p');
eventDesc.classList = 'event-desc';
eventDesc.textContent = "For the last two hours on Saturday, get 50% off on any menu items!";

const eventHeading2 = document.createElement('h1');
eventHeading2.classList = 'event-heading';
eventHeading2.textContent = "Morning Rush";

const eventDesc2 = document.createElement('p');
eventDesc2.classList = 'event-desc';
eventDesc2.textContent = "Within the first hour of opening, Get a free side of your choosing!";

const eventHeading3 = document.createElement('h1');
eventHeading3.classList = 'event-heading';
eventHeading3.textContent = "Sweet Tooth";

const eventDesc3 = document.createElement('p');
eventDesc3.classList = 'event-desc';
eventDesc3.textContent = "For limited time only, Get a Sea Salt Caramel Cheesecake for $5.99!";




content.append(divContent1);

divContent1.append(headingAndButtonDiv);

headingAndButtonDiv.append(contentHeading1, buyNowBtn);

divContent1.append(imgContainer);

imgContainer.append(imgSlides);

imgSlides.append(imgDiv1);
imgDiv1.append(img1);

imgSlides.append(imgDiv2);
imgDiv2.append(img2);

imgSlides.append(imgDiv3);
imgDiv3.append(img3);

imgSlides.append(imgDiv4);
imgDiv4.append(img4);


content.append(eventDiv);
eventDiv.append(event, eventHeading, eventDesc, eventHeading2, eventDesc2, eventHeading3, eventDesc3);

























let currentSlideIndexHome = 0;
const slides = document.querySelectorAll('.apperal-img');

function moveSlide(direction){
    slides[currentSlideIndexHome].classList.remove('active');
    currentSlideIndexHome += direction;

    if (currentSlideIndexHome >= slides.length){
    currentSlideIndexHome = 0;
    } else if (currentSlideIndexHome < 0){
    currentSlideIndexHome = slides.length - 1;
    }
    slides[currentSlideIndexHome].classList.add('active');

    }
    setInterval(() => moveSlide(1), 4000);
}