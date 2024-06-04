import { BandSiteApi, apiKey } from './band-site-api.js';
import convertDate from './unix-timestamp-convert.js';

let showsContainer = document.querySelector('#shows');

let showsList = document.querySelector('.show-list');

let showBandSiteApi = new BandSiteApi(apiKey);

async function retrieveShows() {
  try {
    let showsArr = await showBandSiteApi.getShows();
    return showsArr;
  } catch (e) {
    console.log(e);
  }
}

let showList = await retrieveShows();

function createBuyButton() {
  let buyButton = document.createElement('button');
  buyButton.innerText = 'BUY TICKETS';

  return buyButton;
}

function createSectionTitle() {
  let sectionTitle = document.createElement('h1');
  sectionTitle.classList.add('shows__title');
  sectionTitle.innerText = 'Shows';
  showsContainer.prepend(sectionTitle);
}

function createParagraphElement(innerText) {
  let paragraphElement = document.createElement('p');
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
    const dateConverter = new convertDate(array[i].date);
    let dateTitle = createParagraphElement('DATE');
    let convertedDate = dateConverter.toDsMsDDYY(`${array[i].date}`);

    let showDate = createParagraphElement(convertedDate);

    let venueTitle = createParagraphElement('VENUE');
    let showVenue = createParagraphElement(`${array[i].place}`);

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
