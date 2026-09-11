export function loadBreakfastSides(){
const menuContentDiv = document.querySelector('#content');
    menuContentDiv.style.backgroundImage = "url(Images/Menu-Background.png)"

 /* Breakfast Menu heading */
    const breakfastMenu = document.createElement("h2");
    breakfastMenu.textContent = "Breakfast Menu"
    breakfastMenu.id = 'breakfast-menu-heading'

 /* Breakfast Sides */
        const breakfastSideHeading = document.createElement('h2');
        breakfastSideHeading.textContent = "Breakfast Sides";
        // First side
            const breakfastSide1 = document.createElement('div')
            breakfastSide1.classList = 'menu-combo';
            breakfastSide1.textContent = "Shark-Fin Rounds";
            const ComboIMG8 = document.createElement('img');
            ComboIMG8.src = "./Images/Shark-FinRounds.png";
            ComboIMG8.alt = "Shark-Fin Rounds";
            ComboIMG8.classList = 'food-img';
            const breakfastSide1Desc = document.createElement('p');
            breakfastSide1Desc.classList = 'food-description';
            breakfastSide1Desc.textContent = "A hash-round patty with a hint of dangerous."
            const BFSide1Price = document.createElement('p');
            BFSide1Price.classList = 'food-price';
            BFSide1Price.textContent = "$3.49";
            const orderBTN8 = document.createElement('button');
            orderBTN8.classList = 'order-btn';
            orderBTN8.textContent = "ADD TO ORDER";

        // Second side
        const breakfastSide2 = document.createElement('div')
            breakfastSide2.classList = 'menu-combo';
            breakfastSide2.textContent = "Grits";
            const ComboIMG9 = document.createElement('img');
            ComboIMG9.src = "./Images/Grits.png";
            ComboIMG9.alt = "Grits";
            ComboIMG9.classList = 'food-img';
            const breakfastSide2Desc = document.createElement('p');
            breakfastSide2Desc.classList = 'food-description';
            breakfastSide2Desc.textContent = "Classic Southern Grits is always a great to keep on your side."
            const BFSide2Price = document.createElement('p');
            BFSide2Price.classList = 'food-price';
            BFSide2Price.textContent = "$3.49";
            const orderBTN9 = document.createElement('button');
            orderBTN9.classList = 'order-btn';
            orderBTN9.textContent = "ADD TO ORDER";

        // Thrid Side
        const breakfastSide3 = document.createElement('div')
            breakfastSide3.classList = 'menu-combo';
            breakfastSide3.textContent = "Bacon, Sausage, or Shrimp";
            const ComboIMG10 = document.createElement('img');
            ComboIMG10.src = "./Images/BaconSausageShrimp.png";
            ComboIMG10.alt = "Bacon, sausage, or shrimp";
            ComboIMG10.classList = 'food-img';
            const breakfastSide3Desc = document.createElement('p');
            breakfastSide3Desc.classList = 'food-description';
            breakfastSide3Desc.textContent = "Grab any one of these meats as a great add-on to your breakfast."
            const BFSide3Price = document.createElement('p');
            BFSide3Price.classList = 'food-price';
            BFSide3Price.textContent = "$1 per piece";
            const orderBTN10 = document.createElement('button');
            orderBTN10.classList = 'order-btn';
            orderBTN10.textContent = "ADD TO ORDER";


const menuNav = document.createElement('nav');
    menuNav.id = 'menu-nav'

    const allMenuBtn = document.createElement('button');
    allMenuBtn.classList = 'menu-nav-btn';
    allMenuBtn.id = 'all-menu'
    allMenuBtn.textContent = "All Menu Items";

    const allSidesBtn = document.createElement('button');
    allSidesBtn.classList = 'menu-nav-btn';
    allSidesBtn.id = 'sides-menu';
    allSidesBtn.textContent = "All Side Items";

    const breakfastCombosBtn = document.createElement('button');
    breakfastCombosBtn.classList = 'menu-nav-btn';
    breakfastCombosBtn.id = 'breakfast-menu';
    breakfastCombosBtn.textContent = "Breakfast Combos";

    const breakfastSidesBtn = document.createElement('button');
    breakfastSidesBtn.classList = 'menu-nav-btn';
    breakfastSidesBtn.id = 'breakfast-side-menu'
    breakfastSidesBtn.textContent = "Breakfast Sides";

    const dinnerCombosBtn = document.createElement('button');
    dinnerCombosBtn.classList = 'menu-nav-btn';
    dinnerCombosBtn.id = 'dinner-menu';
    dinnerCombosBtn.textContent = "Lunch / Dinner Combos";

    const dinnerSidesBtn = document.createElement('button');
    dinnerSidesBtn.classList = 'menu-nav-btn';
    dinnerSidesBtn.id = 'dinner-side-menu';
    dinnerSidesBtn.textContent = "Lunch / Dinner Sides";

    // just a div to clean up wave interference with nav
    const divBlock = document.createElement('div');
    divBlock.id = 'block';
menuContentDiv.append(divBlock);

menuContentDiv.append(menuNav);
menuNav.append(allMenuBtn,allSidesBtn,breakfastCombosBtn,breakfastSidesBtn,dinnerCombosBtn,dinnerSidesBtn);


menuContentDiv.append(breakfastSideHeading, breakfastSide1);
breakfastSide1.append(ComboIMG8, breakfastSide1Desc, BFSide1Price, orderBTN8);

menuContentDiv.append(breakfastSide2);
breakfastSide2.append(ComboIMG9, breakfastSide2Desc, BFSide2Price, orderBTN9);

menuContentDiv.append(breakfastSide3);
breakfastSide3.append(ComboIMG10, breakfastSide3Desc, BFSide3Price, orderBTN10);








const navBtnActive = document.querySelector('#breakfast-side-menu');
    navBtnActive.classList.add('active');

}