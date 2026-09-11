export function loadAllSides(){

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

// lunch and dinner sides
        const dinnerSideHeading = document.createElement('h2');
        dinnerSideHeading.textContent = "Lunch / Dinner Sides";

            // side 1
            const dinnerside1 = document.createElement('div')
            dinnerside1.classList = 'menu-combo';
            dinnerside1.textContent = "Mako Rings";
            const ComboIMG19 = document.createElement('img');
            ComboIMG19.src = "./Images/MakoRings.png";
            ComboIMG19.alt = "Mako Onion Rings";
            ComboIMG19.classList = 'food-img';
            const dinnersideDesc1 = document.createElement('p');
            dinnersideDesc1.classList = 'food-description';
            dinnersideDesc1.textContent = "Onion rings with Old Bay Seasoning."
            const dinnerside1Price = document.createElement('p');
            dinnerside1Price.classList = 'food-price';
            dinnerside1Price.textContent = "$2.95";
            const orderBTN19 = document.createElement('button');
            orderBTN19.classList = 'order-btn';
            orderBTN19.textContent = "ADD TO ORDER";

            //side 2
            const dinnerside2 = document.createElement('div')
            dinnerside2.classList = 'menu-combo';
            dinnerside2.textContent = "Mako Fries";
            const ComboIMG20 = document.createElement('img');
            ComboIMG20.src = "./Images/MakoFries.png";
            ComboIMG20.alt = "Mako Fries";
            ComboIMG20.classList = 'food-img';
            const dinnersideDesc2 = document.createElement('p');
            dinnersideDesc2.classList = 'food-description';
            dinnersideDesc2.textContent = "Crinkle Cut Fries with Old Bay Seasoning."
            const dinnerside2Price = document.createElement('p');
            dinnerside2Price.classList = 'food-price';
            dinnerside2Price.textContent = "$2.95";
            const orderBTN20 = document.createElement('button');
            orderBTN20.classList = 'order-btn';
            orderBTN20.textContent = "ADD TO ORDER";

            // side 3
            const dinnerside3 = document.createElement('div')
            dinnerside3.classList = 'menu-combo';
            dinnerside3.textContent = "Hushpuppies";
            const ComboIMG21 = document.createElement('img');
            ComboIMG21.src = "./Images/Hushpuppies.png";
            ComboIMG21.alt = "Hushpuppies";
            ComboIMG21.classList = 'food-img';
            const dinnersideDesc3 = document.createElement('p');
            dinnersideDesc3.classList = 'food-description';
            dinnersideDesc3.textContent = "Crispy, Golden Hushpuppies"
            const dinnerside3Price = document.createElement('p');
            dinnerside3Price.classList = 'food-price';
            dinnerside3Price.textContent = "$2.75";
            const orderBTN21 = document.createElement('button');
            orderBTN21.classList = 'order-btn';
            orderBTN21.textContent = "ADD TO ORDER";

            //side 4
            const dinnerside4 = document.createElement('div')
            dinnerside4.classList = 'menu-combo';
            dinnerside4.textContent = "Mako Mac";
            const ComboIMG22 = document.createElement('img');
            ComboIMG22.src = "./Images/MakoMac.png";
            ComboIMG22.alt = "Mako Mac and Cheese";
            ComboIMG22.classList = 'food-img';
            const dinnersideDesc4 = document.createElement('p');
            dinnersideDesc4.classList = 'food-description';
            dinnersideDesc4.textContent = "Creamy, baked mac and cheese"
            const dinnerside4Price = document.createElement('p');
            dinnerside4Price.classList = 'food-price';
            dinnerside4Price.textContent = "$2.95";
            const orderBTN22 = document.createElement('button');
            orderBTN22.classList = 'order-btn';
            orderBTN22.textContent = "ADD TO ORDER";


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


menuContentDiv.append(dinnerSideHeading);

menuContentDiv.append(dinnerside1)
dinnerside1.append(ComboIMG19, dinnersideDesc1, dinnerside1Price, orderBTN19);


menuContentDiv.append(dinnerside2);
dinnerside2.append(ComboIMG20, dinnersideDesc2, dinnerside2Price, orderBTN20);

menuContentDiv.append(dinnerside3);
dinnerside3.append(ComboIMG21, dinnersideDesc3, dinnerside3Price, orderBTN21);

menuContentDiv.append(dinnerside4);
dinnerside4.append(ComboIMG22, dinnersideDesc4, dinnerside4Price, orderBTN22);



    const navBtnActive = document.querySelector('#sides-menu');
    navBtnActive.classList.add('active');

}