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

let shows = document.getElementById('shows');

function createBuyButton() {
  let buyButton = document.createElement('button');
  buyButton.innerText = 'BUY TICKETS';
  console.log(buyButton);
  return buyButton;
}

function createSectionTitle() {
  console.log('run create');
  let sectionTitle = document.createElement('h1');
  sectionTitle.classList.add('shows__title');
  console.log(sectionTitle);
  sectionTitle.innerText = 'Shows';
  shows.appendChild(sectionTitle);
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

    let dateTitle = createParagraphElement('DATE');
    let showDate = createParagraphElement(`${array[i].date}`);

    let venueTitle = createParagraphElement('VENUE');
    let showVenue = createParagraphElement(`${array[i].venue}`);

    let locationTitle = createParagraphElement('LOCATION');
    let showLocation = createParagraphElement(`${array[i].location}`);

    addClass('dogs', dateTitle, venueTitle, locationTitle);

    showDiv.append(
      dateTitle,
      showDate,
      venueTitle,
      showVenue,
      locationTitle,
      showLocation,
      createBuyButton()
    );

    shows.appendChild(showDiv);
  }
}

function buildShowPage() {
  createSectionTitle();
  createShows(showList);
}

buildShowPage();
