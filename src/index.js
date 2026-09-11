import { loadAbout } from "./About.js";
import { loadContact } from "./Contact.js";
import { loadHome } from "./Home.js";
import { loadMenu } from "./Menu.js";
import { loadAllMenu } from "./menuAll.js";
import { loadAllBreakfast } from "./menuBreakfast.js";
import { loadBreakfastSides } from "./menuBreakfastSides.js";
import { loadDinner } from "./menuDinner.js";
import { loadDinnerSides } from "./menuDinnerSides.js";
import { loadAllSides } from "./menuSides.js";



const content = document.querySelector('#content');


const menuButton = document.querySelector('#menu-btn')
menuButton.addEventListener('click', () => {
    content.innerHTML = "";
    loadMenu();
});

const contactButton = document.querySelector('#contact-btn')
contactButton.addEventListener('click', () => {
    content.innerHTML = "";
    content.style.backgroundImage = ""
    loadContact();
});


const aboutButton = document.querySelector('#about-btn')
aboutButton.addEventListener('click', () => {
    content.innerHTML = "";
    content.style.backgroundImage = ""
    loadAbout();
});


const homeButton = document.querySelector('#home-btn')
homeButton.addEventListener('click', () => {
    content.innerHTML = "";
    content.style.backgroundImage = ""
    loadHome();
});


//      Menu Nav Buttons

// For the Breakfast Combo button
document.addEventListener('click', function(event){
    if(event.target && event.target.id === 'breakfast-menu'){
        
        content.textContent = "";
        loadAllBreakfast();
    }
})


// For the Breakfast Sides button
document.addEventListener('click', function(event){
    if(event.target && event.target.id === 'breakfast-side-menu'){
        
        content.textContent = "";
        loadBreakfastSides();
    }
})

// For the Dinner button
document.addEventListener('click', function(event){
    if(event.target && event.target.id === 'dinner-menu'){
        
        content.textContent = "";
        loadDinner();
    }
})

// For the Dinner sides button
document.addEventListener('click', function(event){
    if(event.target && event.target.id === 'dinner-side-menu'){
        
        content.textContent = "";
        loadDinnerSides();
    }
})

// For all sides button
document.addEventListener('click', function(event){
    if(event.target && event.target.id === 'sides-menu'){
        
        content.textContent = "";
        loadAllSides();
    }
})

// For All menu Items
document.addEventListener('click', function(event){
    if(event.target && event.target.id === 'all-menu'){
        
        content.textContent = "";
        loadAllMenu();
    }
})