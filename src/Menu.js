

export function loadMenu(){
    const menuContentDiv = document.querySelector('#content');
    menuContentDiv.style.backgroundImage = "url(Images/Menu-Background.png)"


    









    /* menu heading */
    const menuHeading = document.createElement('h1');
    menuHeading.textContent = "Menu"
    menuHeading.id = 'menu-heading'
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

/* lunch/Dinner Menu */
    const dinnerHeading = document.createElement('h2');
    dinnerHeading.textContent = "Lunch / Dinner Menu"

    const subDiv = document.createElement('div');
        subDiv.id = 'custom-div';
            /* Header for sub and sandwich and its description */
        const subItem = document.createElement('h4');
        subItem.id = 'custom-header';
        subItem.textContent = "Sub or Sandwich?";
        const subDescription1 = document.createElement('p');
        subDescription1.textContent = "Choose up to four items to go on your sub or sandwich."
        const subDescription2 = document.createElement('p');
        subDescription2.textContent = "(Each extra item will have a 50 cent overcharge. Max 5 items total.)"
                /* list of options to put on sub/sandwich */
                const optionMSG2 = document.createElement('p');
                optionMSG2.textContent = "All options include:";
        const subOptionList = document.createElement('ul');
        const OptionCheese2 = document.createElement('li');
        OptionCheese2.textContent = "Cheese";
        const optionShrimp = document.createElement('li');
        optionShrimp.textContent = "Shrimp";
        const optionBacon2 = document.createElement('li');
        optionBacon2.textContent = "Bacon";
        const optionFish2 = document.createElement('li');
        optionFish2.textContent = "Fish";
        const optionLettuce = document.createElement('li');
        optionLettuce.textContent = "Lettuce";
        const optionTomatoes = document.createElement('li');
        optionTomatoes.textContent = "tomatoes";
        const customizeSubBTN = document.createElement('button');
        customizeSubBTN.id = 'customize-btn';
        customizeSubBTN.textContent = "CUSTOMIZE";

        

    // Ship wrecked dinner section
    const comboHeading3 = document.createElement('h2');
    comboHeading3.textContent = "Still Ship-Wrecked"; 
    comboHeading3.id = 'combo-heading';
    const LandLoverPhrase2 = document.createElement('p');
    LandLoverPhrase2.classList = 'heading-phrase'
    LandLoverPhrase2.textContent = "It looks like you're going to be here awhile."
    const comboInfo = document.createElement('p');
    comboInfo.id = 'combo-info'
    comboInfo.textContent = "Each combo comes with 1 side and beverage";

        //First item
        const dinnerCombo1 = document.createElement('div')
            dinnerCombo1.classList = 'menu-combo';
            dinnerCombo1.textContent = "Crispy Chicken Sandwich";
            const ComboIMG11 = document.createElement('img');
            ComboIMG11.src = "./Images/ChickenSandwich.png";
            ComboIMG11.alt = "Crispy chicken Sandwich";
            ComboIMG11.classList = 'food-img';
            const dinnerCombo1Desc = document.createElement('p');
            dinnerCombo1Desc.classList = 'food-description';
            dinnerCombo1Desc.textContent = "Its ok, we won't judge..."
            const dinnerCombo1Price = document.createElement('p');
            dinnerCombo1Price.classList = 'food-price';
            dinnerCombo1Price.textContent = "$11.95";
            const orderBTN11 = document.createElement('button');
            orderBTN11.classList = 'order-btn';
            orderBTN11.textContent = "ADD TO ORDER";

        // second item
        const dinnerCombo2 = document.createElement('div')
            dinnerCombo2.classList = 'menu-combo';
            dinnerCombo2.textContent = "BLT Sandwich";
            const ComboIMG12 = document.createElement('img');
            ComboIMG12.src = "./Images/BLT.png";
            ComboIMG12.alt = "BLT";
            ComboIMG12.classList = 'food-img';
            const dinnerCombo2Desc = document.createElement('p');
            dinnerCombo2Desc.classList = 'food-description';
            dinnerCombo2Desc.textContent = "Classic BLT with no seafood involved...we think."
            const dinnerCombo2Price = document.createElement('p');
            dinnerCombo2Price.classList = 'food-price';
            dinnerCombo2Price.textContent = "$7.45";
            const orderBTN12 = document.createElement('button');
            orderBTN12.classList = 'order-btn';
            orderBTN12.textContent = "ADD TO ORDER";


// the seafood portion of the menu for lunch and dinner
    const comboHeading4 = document.createElement('h2');
    comboHeading4.textContent = "SEAFOOD AHEAD!"; 
    comboHeading4.id = 'combo-heading';
    const headingPhrase = document.createElement('p');
    headingPhrase.classList = 'heading-phrase'
    headingPhrase.textContent = "There's something in the water... and it looks delicious!"
    const comboInfo2 = document.createElement('p');
    comboInfo2.id = 'combo-info'
    comboInfo2.textContent = "Each combo comes with 1 side and beverage";

        // third item
        const dinnerCombo3 = document.createElement('div')
            dinnerCombo3.classList = 'menu-combo';
            dinnerCombo3.textContent = "Shrimp Tacos";
            const ComboIMG13 = document.createElement('img');
            ComboIMG13.src = "./Images/ShrimpTacos.png";
            ComboIMG13.alt = "ShrimpTacos";
            ComboIMG13.classList = 'food-img';
            const dinnerCombo3Desc = document.createElement('p');
            dinnerCombo3Desc.classList = 'food-description';
            dinnerCombo3Desc.textContent = "Three soft shell tacos overloaded with seasoned shrimp"
            const dinnerCombo3Price = document.createElement('p');
            dinnerCombo3Price.classList = 'food-price';
            dinnerCombo3Price.textContent = "$16.30";
            const orderBTN13 = document.createElement('button');
            orderBTN13.classList = 'order-btn';
            orderBTN13.textContent = "ADD TO ORDER";

        // Fourth Item
        const dinnerCombo4 = document.createElement('div')
            dinnerCombo4.classList = 'menu-combo';
            dinnerCombo4.textContent = "Shrimp Po'Boy";
            const ComboIMG14 = document.createElement('img');
            ComboIMG14.src = "./Images/ShrimpPoBoy.png";
            ComboIMG14.alt = "Shrimp Po'Boy";
            ComboIMG14.classList = 'food-img';
            const dinnerCombo4Desc = document.createElement('p');
            dinnerCombo4Desc.classList = 'food-description';
            dinnerCombo4Desc.textContent = "Giant Shrimp sub with alot of sauce."
            const dinnerCombo4Price = document.createElement('p');
            dinnerCombo4Price.classList = 'food-price';
            dinnerCombo4Price.textContent = "$12.50";
            const orderBTN14 = document.createElement('button');
            orderBTN14.classList = 'order-btn';
            orderBTN14.textContent = "ADD TO ORDER";
        
        //Fifth Item
        const dinnerCombo5 = document.createElement('div')
            dinnerCombo5.classList = 'menu-combo';
            dinnerCombo5.textContent = "Seafood Basket";
            const ComboIMG15 = document.createElement('img');
            ComboIMG15.src = "./Images/SeafoodBasket.png";
            ComboIMG15.alt = "Seafood Basket";
            ComboIMG15.classList = 'food-img';
            const dinnerCombo5Desc = document.createElement('p');
            dinnerCombo5Desc.classList = 'food-description';
            dinnerCombo5Desc.textContent = "Fish, shrimp, and lobster in a fancy basket."
            const dinnerCombo5Price = document.createElement('p');
            dinnerCombo5Price.classList = 'food-price';
            dinnerCombo5Price.textContent = "$21.99";
            const orderBTN15 = document.createElement('button');
            orderBTN15.classList = 'order-btn';
            orderBTN15.textContent = "ADD TO ORDER";

        //Sixth Item
        const dinnerCombo6 = document.createElement('div')
            dinnerCombo6.classList = 'menu-combo';
            dinnerCombo6.textContent = "Seafood Salad";
            const ComboIMG16 = document.createElement('img');
            ComboIMG16.src = "./Images/SeafoodSalad.png";
            ComboIMG16.alt = "Seafood Salad";
            ComboIMG16.classList = 'food-img';
            const dinnerCombo6Desc = document.createElement('p');
            dinnerCombo6Desc.classList = 'food-description';
            dinnerCombo6Desc.textContent = "Classic house salad and seafood clash in one big bowl."
            const dinnerCombo6Price = document.createElement('p');
            dinnerCombo6Price.classList = 'food-price';
            dinnerCombo6Price.textContent = "$15.50";
            const orderBTN16 = document.createElement('button');
            orderBTN16.classList = 'order-btn';
            orderBTN16.textContent = "ADD TO ORDER";
        
        // Seventh Item 
        const dinnerCombo7 = document.createElement('div')
            dinnerCombo7.classList = 'menu-combo';
            dinnerCombo7.textContent = "Fish and Shrimp";
            const ComboIMG17 = document.createElement('img');
            ComboIMG17.src = "./Images/Fish&ShrimpCombo.png";
            ComboIMG17.alt = "Fish and Shrimp";
            ComboIMG17.classList = 'food-img';
            const dinnerCombo7Desc = document.createElement('p');
            dinnerCombo7Desc.classList = 'food-description';
            dinnerCombo7Desc.textContent = "Two ocean favorites are better, together."
            const dinnerCombo7Price = document.createElement('p');
            dinnerCombo7Price.classList = 'food-price';
            dinnerCombo7Price.textContent = "$17.95";
            const orderBTN17 = document.createElement('button');
            orderBTN17.classList = 'order-btn';
            orderBTN17.textContent = "ADD TO ORDER";
        
        //Eight Item
        const dinnerCombo8 = document.createElement('div')
            dinnerCombo8.classList = 'menu-combo';
            dinnerCombo8.textContent = "Fish and Chips";
            const ComboIMG18 = document.createElement('img');
            ComboIMG18.src = "./Images/FishAndChips.png";
            ComboIMG18.alt = "Fish and Chips";
            ComboIMG18.classList = 'food-img';
            const dinnerCombo8Desc = document.createElement('p');
            dinnerCombo8Desc.classList = 'food-description';
            dinnerCombo8Desc.textContent = "Generous portion of fish with fancy chips(fries)."
            const dinnerCombo8Price = document.createElement('p');
            dinnerCombo8Price.classList = 'food-price';
            dinnerCombo8Price.textContent = "$16.50";
            const orderBTN18 = document.createElement('button');
            orderBTN18.classList = 'order-btn';
            orderBTN18.textContent = "ADD TO ORDER";

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

menuContentDiv.append(dinnerHeading);
menuContentDiv.append(subDiv);

subDiv.append(subItem, subDescription1, subDescription2, optionMSG2, subOptionList);
subOptionList.append(optionBacon2, optionShrimp, OptionCheese2, optionFish2, optionLettuce, optionTomatoes);
subOptionList.append(customizeSubBTN);

menuContentDiv.append(comboHeading3, LandLoverPhrase2, comboInfo);

menuContentDiv.append(dinnerCombo1);
dinnerCombo1.append(ComboIMG11, dinnerCombo1Desc, dinnerCombo1Price, orderBTN11);

menuContentDiv.append(dinnerCombo2);
dinnerCombo2.append(ComboIMG12, dinnerCombo2Desc, dinnerCombo2Price, orderBTN12);

menuContentDiv.append(comboHeading4, headingPhrase, comboInfo2);

menuContentDiv.append(dinnerCombo3);
dinnerCombo3.append(ComboIMG13, dinnerCombo3Desc, dinnerCombo3Price, orderBTN13);

menuContentDiv.append(dinnerCombo4);
dinnerCombo4.append(ComboIMG14, dinnerCombo4Desc, dinnerCombo4Price, orderBTN14);

menuContentDiv.append(dinnerCombo5);
dinnerCombo5.append(ComboIMG15, dinnerCombo5Desc, dinnerCombo5Price, orderBTN15);

menuContentDiv.append(dinnerCombo6);
dinnerCombo6.append(ComboIMG16, dinnerCombo6Desc, dinnerCombo6Price, orderBTN16);

menuContentDiv.append(dinnerCombo7);
dinnerCombo7.append(ComboIMG17, dinnerCombo7Desc, dinnerCombo7Price, orderBTN17);

menuContentDiv.append(dinnerCombo8);
dinnerCombo8.append(ComboIMG18, dinnerCombo8Desc, dinnerCombo8Price, orderBTN18);

menuContentDiv.append(dinnerSideHeading);

menuContentDiv.append(dinnerside1)
dinnerside1.append(ComboIMG19, dinnersideDesc1, dinnerside1Price, orderBTN19);


menuContentDiv.append(dinnerside2);
dinnerside2.append(ComboIMG20, dinnersideDesc2, dinnerside2Price, orderBTN20);

menuContentDiv.append(dinnerside3);
dinnerside3.append(ComboIMG21, dinnersideDesc3, dinnerside3Price, orderBTN21);

menuContentDiv.append(dinnerside4);
dinnerside4.append(ComboIMG22, dinnersideDesc4, dinnerside4Price, orderBTN22);





}
