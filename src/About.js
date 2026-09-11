export function loadAbout(){

const content = document.querySelector('#content');
content.style.backgroundColor = "rgb(14, 68, 176)";

    const heading = document.createElement('header');
    heading.id = 'about-header';
    heading.textContent = "Established in 2026"

    const briefDescription = document.createElement('p');
    briefDescription.classList = 'brief-desc';
    briefDescription.textContent = "This is a totally fake restaurant for the Odin Project. All pictures are AI generated. It took me awhile, but I think that I did ok so far. It was fun while it lasted. Please don't steal my idea because I might just use this oneday...";


    const briefDescription2 = document.createElement('p');
    briefDescription2.classList = 'brief-desc';
    briefDescription2.textContent = "MakoGo is an ocean side fast food restaurant that serves great and fresh seafood. There are also items available for non-seafood lovers to still enjoy the ocean-side drive through experience. There are currently four locations as of 2026 with plans to bring more ocean views and fast, on the go seafood to you very soon!"
    briefDescription2.id = 'brief-desc-top';

    const locationHeading = document.createElement('h1');
    locationHeading.id = 'location-heading';
    locationHeading.textContent = "No two locations are the same!";



    const locationDivContainer = document.createElement('div');
    locationDivContainer.classList = 'image-container';

    const divImageSlides = document.createElement('div');
    divImageSlides.classList = 'image-slides';

    const divSlide1 = document.createElement('div')
    divSlide1.classList = 'slide-img active'
    const img1 = document.createElement('img');
    img1.alt = "MakoGo Location";
    img1.src = "./Images/location1.png";

    const divSlide2 = document.createElement('div')
    divSlide2.classList = 'slide-img'
    const img2 = document.createElement('img');
    img2.alt = "MakoGo Location";
    img2.src = "./Images/location2.png";

    const divSlide3 = document.createElement('div')
    divSlide3.classList = 'slide-img'
    const img3 = document.createElement('img');
    img3.alt = "MakoGo Location";
    img3.src = "./Images/location3.png";

    const divSlide4 = document.createElement('div')
    divSlide4.classList = 'slide-img'
    const img4 = document.createElement('img');
    img4.alt = "MakoGo Location";
    img4.src = "./Images/location4.png";


    const btnPrev = document.createElement('button');
    btnPrev.onclick = 'moveSlide(-1)'
    btnPrev.textContent = "";
    btnPrev.classList = 'carousel-btn prev';

    const btnNext = document.createElement('button');
    btnNext.onclick = 'moveSlide(1)'
    btnNext.textContent = '';
    btnNext.classList = 'carousel-btn next';


content.append(heading,briefDescription2, briefDescription, locationHeading);

content.append(locationDivContainer);
locationDivContainer.append(divImageSlides);

divImageSlides.append(divSlide1);
divSlide1.append(img1);

divImageSlides.append(divSlide2);
divSlide2.append(img2);

divImageSlides.append(divSlide3);
divSlide3.append(img3);

divImageSlides.append(divSlide4);
divSlide4.append(img4);
divImageSlides.append(btnPrev, btnNext);















let currentSlideIndexAbout = 0;
const slides = document.querySelectorAll('.slide-img');

function moveSlide(direction){
    slides[currentSlideIndexAbout].classList.remove('active');
    currentSlideIndexAbout += direction;

    if (currentSlideIndexAbout >= slides.length){
    currentSlideIndexAbout = 0;
    } else if (currentSlideIndexAbout < 0){
    currentSlideIndexAbout = slides.length - 1;
    }
    slides[currentSlideIndexAbout].classList.add('active');

    }
    setInterval(() => moveSlide(1), 4000);
}