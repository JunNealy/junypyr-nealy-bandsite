let showList = [
  {
    date: 'Mon Spet 09 2024',
    venue: 'Ronald Lane',
    location: 'San Francisco, CA',
  },
  {
    date: 'Mon Spet 09 2024',
    venue: 'Ronald Lane',
    location: 'San Francisco, CA',
  },
  {
    date: 'Tue Sept 17 2024 ',
    venue: 'Pier 3 East ',
    location: 'San Francisco, CA ',
  },
  {
    date: 'Sat Oct 12 2024',
    venue: 'View Lounge',
    location: 'San Francisco, CA',
  },
  {
    date: 'Sat Nov 16 2024',
    venue: 'Hyatt Agency',
    location: 'San Francisco, CA',
  },
  {
    date: 'Fri Nov 29 2024',
    venue: 'Moscow Center',
    location: 'San Francisco, CA',
  },
  {
    date: 'Wed Dec 18 2024',
    venue: 'Press Club',
    location: 'San Francisco, CA',
  },
];

let showsContainer = document.querySelector('#shows');

let showsList = document.querySelector('.show-list');

function createBuyButton() {
  let buyButton = document.createElement('button');
  buyButton.innerText = 'BUY TICKETS';
  console.log(buyButton);
  return buyButton;
}

function createSectionTitle() {
  let sectionTitle = document.createElement('h1');
  sectionTitle.classList.add('shows__title');
  sectionTitle.innerText = 'Shows';
  showsContainer.prepend(sectionTitle);
}

function createParagraphElement(innerText) {
  paragraphElement = document.createElement('p');
  paragraphElement.innerText = innerText;
  return paragraphElement;
}

function addClass(className, ...elements) {
  elements.forEach((element) => {
    element.classList.add(className);
  });
}

function createShows(array) {
  for (let i = 0; i < array.length; i++) {
    let showDiv = document.createElement('div');
    addClass('show-list__item', showDiv);

    if (i === 0) {
      let titleDiv = document.createElement('div');
      addClass('shows-list__title-div', titleDiv);
      showsList.append(titleDiv);
      let dateTitleDiv = createParagraphElement('DATE');
      addClass('shows-list__title-div--date', dateTitleDiv);
      let venueTitleDiv = createParagraphElement('VENUE');
      addClass('shows-list__title-div--venue', venueTitleDiv);
      let locationTitleDiv = createParagraphElement('LOCATION');
      addClass('shows-list__title-div--location', locationTitleDiv);
      titleDiv.append(dateTitleDiv, venueTitleDiv, locationTitleDiv);
    }

    let dateTitle = createParagraphElement('DATE');
    let showDate = createParagraphElement(`${array[i].date}`);

    let venueTitle = createParagraphElement('VENUE');
    let showVenue = createParagraphElement(`${array[i].venue}`);

    let locationTitle = createParagraphElement('LOCATION');
    let showLocation = createParagraphElement(`${array[i].location}`);

    let buyButton = createBuyButton();

    addClass(
      'show-list__item-info-title',
      dateTitle,
      venueTitle,
      locationTitle
    );
    addClass('show-list__item-info', showDate, showVenue, showLocation);
    addClass('show-list__item-button', buyButton);

    showDiv.append(
      dateTitle,
      showDate,
      venueTitle,
      showVenue,
      locationTitle,
      showLocation,
      buyButton
    );

    showsList.appendChild(showDiv);
  }
}

function buildShowPage() {
  createSectionTitle();
  createShows(showList);
}

buildShowPage();
