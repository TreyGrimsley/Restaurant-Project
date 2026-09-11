export function loadAllBreakfast(){

const menuContentDiv = document.querySelector('#content');
    menuContentDiv.style.backgroundImage = "url(Images/Menu-Background.png)"

/* Putting all Breakfast combos in a div */
    const breakfastMenuDiv = document.createElement('div');
    breakfastMenuDiv.id = 'breakfast-menu-div';
    
    /* Breakfast Menu heading */
    const breakfastMenu = document.createElement("h2");
    breakfastMenu.textContent = "Breakfast Menu"
    breakfastMenu.id = 'breakfast-menu-heading'

    /* First menu item ---- each item has its own div */
        const biscuitDiv = document.createElement('div');
        biscuitDiv.id = 'custom-div';
            /* Header for bicuit and its description */
        const biscuitItem = document.createElement('h4');
        biscuitItem.id = 'custom-header';
        biscuitItem.textContent = "Build Your Biscuit";
        const biscuitDescription1 = document.createElement('p');
        biscuitDescription1.textContent = "Choose up to three items to go on your biscuit."
        const biscuitDescription2 = document.createElement('p');
        biscuitDescription2.textContent = "(Each extra item will have a 50 cent overcharge. Max 5 items per biscuit)"
                /* list of options to put on biscuit */
                const optionMSG = document.createElement('p');
                optionMSG.textContent = "All options include:";
        const biscuitOptionList = document.createElement('ul');
        const OptionCheese = document.createElement('li');
        OptionCheese.textContent = "Cheese";
        const optionEgg = document.createElement('li');
        optionEgg.textContent = "Egg";
        const optionBacon = document.createElement('li');
        optionBacon.textContent = "Bacon";
        const optionSausage = document.createElement('li');
        optionSausage.textContent = "Sausage";
        const optionFish = document.createElement('li');
        optionFish.textContent = "Fish";
        const optionGravy = document.createElement('li');
        optionGravy.textContent = "Gravy";
        const customizeBiscuitBTN = document.createElement('button');
        customizeBiscuitBTN.id = 'customize-btn';
        customizeBiscuitBTN.textContent = "CUSTOMIZE";

    /* Combos heading for Land Lovers section of breakfast menu */
    const comboHeading = document.createElement('h2');
    comboHeading.textContent = "Ship-Wrecked Breakfast"; // it was called Land Lover section but I changed it afterwards...
    comboHeading.id = 'combo-heading';
    const LandLoverPhrase = document.createElement('p');
    LandLoverPhrase.classList = 'heading-phrase'
    LandLoverPhrase.textContent = "For those stranded on dry land...In the morning."
    const comboIncludesBreakfast = document.createElement('p');
    comboIncludesBreakfast.id = 'combo-info'
    comboIncludesBreakfast.textContent = "Each combo comes with 1 side and beverage";

        /* First combo for Land Lover section */
        const BFLLCombo1 = document.createElement('div');
        BFLLCombo1.classList = 'menu-combo';
        BFLLCombo1.textContent = "Biscuit Combo";
        const ComboIMG1 = document.createElement('img');
        ComboIMG1.src = "./Images/BreakfastBiscuit.png";
        ComboIMG1.alt = "Breakfast Biscuit";
        ComboIMG1.classList = 'food-img';
        const BFLLCombo1Desc = document.createElement('p')
        BFLLCombo1Desc.classList = 'food-description'
        BFLLCombo1Desc.textContent = "Flaky buttermilk biscuit completely customized by you (Refer to top of page)."
        const BFLLCombo1Price = document.createElement('p');
        BFLLCombo1Price.classList = 'food-price'
        BFLLCombo1Price.textContent = "$9.50"
        const orderBTN = document.createElement('button');
        orderBTN.classList = 'order-btn';
        orderBTN.textContent = "ADD TO ORDER";

        /* Second Combo */
        const BFLLCombo2 = document.createElement('div');
        BFLLCombo2.classList = 'menu-combo';
        BFLLCombo2.textContent = "Loaded Land Skillet Combo";
        const ComboIMG2 = document.createElement('img');
        ComboIMG2.src = "./Images/Firefly_Gemini Flash_ breakfast skillet for fast food 123944.png";
        ComboIMG2.alt = "Breakfast Skillet";
        ComboIMG2.classList = 'food-img';
        const BFLLCombo2Desc = document.createElement('p')
        BFLLCombo2Desc.classList = 'food-description'
        BFLLCombo2Desc.textContent = "Layers of Hashbrowns, eggs, cheese, and bacon all in one bowl."
        const BFLLCombo2Price = document.createElement('p');
        BFLLCombo2Price.classList = 'food-price'
        BFLLCombo2Price.textContent = "$11.59";
        const orderBTN2 = document.createElement('button');
        orderBTN2.classList = 'order-btn';
        orderBTN2.textContent = "ADD TO ORDER";

         /* Third Combo */
        const BFLLCombo3 = document.createElement('div');
        BFLLCombo3.classList = 'menu-combo';
        BFLLCombo3.textContent = "Sunrise Breakfast Wrap";
        const ComboIMG3 = document.createElement('img');
        ComboIMG3.src = "./Images/SunriseBreakfastWrap.png";
        ComboIMG3.alt = "Breakfast wrap";
        ComboIMG3.classList = 'food-img';
        const BFLLCombo3Desc = document.createElement('p')
        BFLLCombo3Desc.classList = 'food-description'
        BFLLCombo3Desc.textContent = "A warm flour tortilla packed with sausage, bacon, scrambled eggs, and cheese."
        const BFLLCombo3Price = document.createElement('p');
        BFLLCombo3Price.classList = 'food-price'
        BFLLCombo3Price.textContent = "$10.59";
        const orderBTN3 = document.createElement('button');
        orderBTN3.classList = 'order-btn';
        orderBTN3.textContent = "ADD TO ORDER";

        /* Fourth Combo */
        const BFLLCombo4 = document.createElement('div');
        BFLLCombo4.classList = 'menu-combo';
        BFLLCombo4.textContent = "SOS Breakfast Platter";
        const ComboIMG4 = document.createElement('img');
        ComboIMG4.src = "./Images/SOSBreakfastPlatter.png";
        ComboIMG4.alt = "Breakfast platter";
        ComboIMG4.classList = 'food-img';
        const BFLLCombo4Desc = document.createElement('p')
        BFLLCombo4Desc.classList = 'food-description'
        BFLLCombo4Desc.textContent = "Choose any three meats and any three sides. Served with a biscuit."
        const BFLLCombo4Price = document.createElement('p');
        BFLLCombo4Price.classList = 'food-price'
        BFLLCombo4Price.textContent = "$12.99";
        const orderBTN4 = document.createElement('button');
        orderBTN4.classList = 'order-btn';
        orderBTN4.textContent = "ADD TO ORDER";

        // The seafood specials for breakfast
    const comboHeading2 = document.createElement('h2');
    comboHeading2.textContent = "The Morning Mako-ver"; 
    comboHeading2.id = 'combo-heading';
    const seafoodPhrase = document.createElement('p');
    seafoodPhrase.classList = 'heading-phrase'
    seafoodPhrase.textContent = "Don't be a bird, be a mako."

        // First seafood breakfast combo
        const BFCombo1 = document.createElement('div');
        BFCombo1.classList = 'menu-combo';
        BFCombo1.textContent = "Shrimp and Grits";
        const ComboIMG5 = document.createElement('img');
        ComboIMG5.src = "./Images/ShrimpAndGrits.png";
        ComboIMG5.alt = "Shrimp and Grits";
        ComboIMG5.classList = 'food-img';
        const BFCombo1Desc = document.createElement('p')
        BFCombo1Desc.classList = 'food-description'
        BFCombo1Desc.textContent = "Classic southern grits with a hint of seafood."
        const BFCombo1Price = document.createElement('p');
        BFCombo1Price.classList = 'food-price'
        BFCombo1Price.textContent = "$9.05";
        const orderBTN5 = document.createElement('button');
        orderBTN5.classList = 'order-btn';
        orderBTN5.textContent = "ADD TO ORDER";

         // second seafood breakfast combo
        const BFCombo2 = document.createElement('div');
        BFCombo2.classList = 'menu-combo';
        BFCombo2.textContent = "Shrimp Breakfast Burrito";
        const ComboIMG6 = document.createElement('img');
        ComboIMG6.src = "./Images/ShrimpBreakfastBurrito.png";
        ComboIMG6.alt = "Shrimp Breakfast Burrito";
        ComboIMG6.classList = 'food-img';
        const BFCombo2Desc = document.createElement('p')
        BFCombo2Desc.classList = 'food-description'
        BFCombo2Desc.textContent = "A warm flour tortilla packed with eggs, cheese, hashbrowns, and chopped shrimp."
        const BFCombo2Price = document.createElement('p');
        BFCombo2Price.classList = 'food-price'
        BFCombo2Price.textContent = "$11.05";
        const orderBTN6 = document.createElement('button');
        orderBTN6.classList = 'order-btn';
        orderBTN6.textContent = "ADD TO ORDER";

         // Third seafood breakfast combo
        const BFCombo3 = document.createElement('div');
        BFCombo3.classList = 'menu-combo';
        BFCombo3.textContent = "Seafood Skillet Combo";
        const ComboIMG7 = document.createElement('img');
        ComboIMG7.src = "./Images/SeafoodSkilletCombo.png";
        ComboIMG7.alt = "Seafood Skillet Combo";
        ComboIMG7.classList = 'food-img';
        const BFCombo3Desc = document.createElement('p')
        BFCombo3Desc.classList = 'food-description'
        BFCombo3Desc.textContent = "Layers of hashbrowns, eggs, cheese, shrimp, and lobster all in one bowl."
        const BFCombo3Price = document.createElement('p');
        BFCombo3Price.classList = 'food-price'
        BFCombo3Price.textContent = "$15.59";
        const orderBTN7 = document.createElement('button');
        orderBTN7.classList = 'order-btn';
        orderBTN7.textContent = "ADD TO ORDER";

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

menuContentDiv.append(breakfastMenu);
menuContentDiv.append(biscuitDiv);

biscuitDiv.append(biscuitItem, biscuitDescription1, biscuitDescription2, optionMSG, biscuitOptionList);
biscuitOptionList.append(optionBacon, optionEgg, OptionCheese, optionSausage, optionFish, optionGravy);
biscuitOptionList.append(customizeBiscuitBTN);

menuContentDiv.append(comboHeading, LandLoverPhrase, comboIncludesBreakfast, BFLLCombo1);
BFLLCombo1.append(ComboIMG1, BFLLCombo1Desc, BFLLCombo1Price, orderBTN);

menuContentDiv.append(BFLLCombo2);
BFLLCombo2.append(ComboIMG2, BFLLCombo2Desc,BFLLCombo2Price, orderBTN2);

menuContentDiv.append(BFLLCombo3);
BFLLCombo3.append(ComboIMG3, BFLLCombo3Desc,BFLLCombo3Price, orderBTN3);

menuContentDiv.append(BFLLCombo4);
BFLLCombo4.append(ComboIMG4, BFLLCombo4Desc,BFLLCombo4Price, orderBTN4);

menuContentDiv.append(comboHeading2, seafoodPhrase, BFCombo1);
BFCombo1.append(ComboIMG5, BFCombo1Desc, BFCombo1Price, orderBTN5);

menuContentDiv.append(BFCombo2);
BFCombo2.append(ComboIMG6, BFCombo2Desc, BFCombo2Price, orderBTN6);

menuContentDiv.append(BFCombo3);
BFCombo3.append(ComboIMG7, BFCombo3Desc, BFCombo3Price, orderBTN7);

menuContentDiv.append(breakfastSideHeading, breakfastSide1);
breakfastSide1.append(ComboIMG8, breakfastSide1Desc, BFSide1Price, orderBTN8);

menuContentDiv.append(breakfastSide2);
breakfastSide2.append(ComboIMG9, breakfastSide2Desc, BFSide2Price, orderBTN9);

menuContentDiv.append(breakfastSide3);
breakfastSide3.append(ComboIMG10, breakfastSide3Desc, BFSide3Price, orderBTN10);



    const navBtnActive = document.querySelector('#breakfast-menu');
    navBtnActive.classList.add('active');


};

