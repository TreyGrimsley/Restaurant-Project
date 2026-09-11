export function loadContact(){
const content = document.querySelector('#content');
content.style.backgroundColor = "rgb(14, 68, 176)";

    const heading = document.createElement('header');
    heading.id = 'contact-header';
    heading.textContent = "Meet us by the ocean!"


    // Grid for all contact Information
    const contactInfoGrid = document.createElement('div');
    contactInfoGrid.id = 'info-grid-container';

// Three cards to hold info in each
    const contactInfoGridCard = document.createElement('div');
    contactInfoGridCard.classList = 'info-grid-card';

    const contactInfoGridCard2 = document.createElement('div');
    contactInfoGridCard2.classList = 'info-grid-card';
    contactInfoGridCard2.id = 'medium-info-card';

    const contactInfoGridCard3 = document.createElement('div');
    contactInfoGridCard3.classList = 'info-grid-card';
    contactInfoGridCard3.id = 'long-info-card';
//


    const orderHeading = document.createElement('h1');
    orderHeading.textContent = "Call here to order:"
    orderHeading.classList = 'contact-subheading'

    const orderNumber = document.createElement('p');
    orderNumber.classList = 'contact';
    orderNumber.textContent = "(123)-456-7899";

    const supportHeading = document.createElement('h1');
    supportHeading.textContent = "Call customer support at:"
    supportHeading.classList = 'contact-subheading'

    const supportNumber = document.createElement('p');
    supportNumber.classList = 'contact';
    supportNumber.textContent = "(123)-998-7643";
    
    const emailAddressHeading = document.createElement('h1');
    emailAddressHeading.textContent = "E-mail here for catering inquiries, receipts, or order issues:";
    emailAddressHeading.classList = 'contact-subheading'

    const emailAddress = document.createElement('p');
    emailAddress.classList = 'contact';
    emailAddress.textContent = "RestaurantStuff123@MakoGo.com";

    const operatingHoursHeading = document.createElement('h1')
    operatingHoursHeading.textContent = "Our Operating Hours:";
    operatingHoursHeading.id = 'op-hours-h1';

    //Make a grid for Sunday - Friday here
    const gridContainer = document.createElement('div');
    gridContainer.id = 'grid-container';


// grid card goes into container
    const gridCard =  document.createElement('div');
    gridCard.classList = 'grid-card'
    // The information that goes into the grid cards
    const dayOfWeek = document.createElement('p');
    dayOfWeek.classList = 'week-day';
    dayOfWeek.textContent = 'Sunday';
    const operatingHours = document.createElement('p');
    operatingHours.classList = 'operating-hours';
    operatingHours.textContent = "Closed";


    // grid card goes into container
    const gridCard2 =  document.createElement('div');
    gridCard2.classList = 'grid-card'
    // The information that goes into the grid cards
    const dayOfWeek2 = document.createElement('p');
    dayOfWeek2.classList = 'week-day';
    dayOfWeek2.textContent = 'Monday';
    const operatingHours2 = document.createElement('p');
    operatingHours2.classList = 'operating-hours';
    operatingHours2.textContent = "Closed";


    // grid card goes into container
    const gridCard3 =  document.createElement('div');
    gridCard3.classList = 'grid-card'
    // The information that goes into the grid cards
    const dayOfWeek3 = document.createElement('p');
    dayOfWeek3.classList = 'week-day';
    dayOfWeek3.textContent = 'Tuesday';
    const operatingHours3 = document.createElement('p');
    operatingHours3.classList = 'operating-hours';
    operatingHours3.textContent = "8 am - 11 pm";


    // grid card goes into container
    const gridCard4 =  document.createElement('div');
    gridCard4.classList = 'grid-card'
    // The information that goes into the grid cards
    const dayOfWeek4 = document.createElement('p');
    dayOfWeek4.classList = 'week-day';
    dayOfWeek4.textContent = 'Wednesday';
    const operatingHours4 = document.createElement('p');
    operatingHours4.classList = 'operating-hours';
    operatingHours4.textContent = "8 am - 11 pm";


// grid card goes into container
    const gridCard5 =  document.createElement('div');
    gridCard5.classList = 'grid-card'
    // The information that goes into the grid cards
    const dayOfWeek5 = document.createElement('p');
    dayOfWeek5.classList = 'week-day';
    dayOfWeek5.textContent = 'Thursday';
    const operatingHours5 = document.createElement('p');
    operatingHours5.classList = 'operating-hours';
    operatingHours5.textContent = "8 am - 11 pm";


    // grid card goes into container
    const gridCard6 =  document.createElement('div');
    gridCard6.classList = 'grid-card'
    // The information that goes into the grid cards
    const dayOfWeek6 = document.createElement('p');
    dayOfWeek6.classList = 'week-day';
    dayOfWeek6.textContent = 'Friday';
    const operatingHours6 = document.createElement('p');
    operatingHours6.classList = 'operating-hours';
    operatingHours6.textContent = "8 am - 11 pm";



    // grid card goes into container
    const gridCard7 =  document.createElement('div');
    gridCard7.classList = 'grid-card'
    // The information that goes into the grid cards
    const dayOfWeek7 = document.createElement('p');
    dayOfWeek7.classList = 'week-day';
    dayOfWeek7.textContent = 'Saturday';
    const operatingHours7 = document.createElement('p');
    operatingHours7.classList = 'operating-hours';
    operatingHours7.textContent = "8 am - 12 am";



content.append(heading);

content.append(contactInfoGrid);

contactInfoGrid.append(contactInfoGridCard);
contactInfoGridCard.append(orderHeading,orderNumber);

contactInfoGrid.append(contactInfoGridCard2);
contactInfoGridCard2.append(supportHeading, supportNumber);

contactInfoGrid.append(contactInfoGridCard3);
contactInfoGridCard3.append(emailAddressHeading, emailAddress);

content.append(operatingHoursHeading);

content.append(gridContainer);

gridContainer.append(gridCard);
gridCard.append(dayOfWeek, operatingHours);

gridContainer.append(gridCard2);
gridCard2.append(dayOfWeek2, operatingHours2);

gridContainer.append(gridCard3);
gridCard3.append(dayOfWeek3, operatingHours3);

gridContainer.append(gridCard4);
gridCard4.append(dayOfWeek4, operatingHours4);

gridContainer.append(gridCard5);
gridCard5.append(dayOfWeek5, operatingHours5);

gridContainer.append(gridCard6);
gridCard6.append(dayOfWeek6, operatingHours6);

gridContainer.append(gridCard7);
gridCard7.append(dayOfWeek7, operatingHours7);

}