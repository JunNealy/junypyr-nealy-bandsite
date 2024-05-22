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

function createBuyButton() {}

function createShowBoilerplate() {}

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

function createShows(array) {
  for (let i = 0; i < array.length; i++) {
    let showDiv = document.createElement('div');

    let dateTitle = createParagraphElement('DATE');
    let showDate = createParagraphElement(`${array[i].date}`);

    let venueTitle = createParagraphElement('VENUE');
    let showVenue = createParagraphElement(`${array[i].venue}`);

    let locationTitle = createParagraphElement('LOCATION');
    let showLocation = createParagraphElement(`${array[i].location}`);

    showDiv.append(
      dateTitle,
      showDate,
      venueTitle,
      showVenue,
      locationTitle,
      showLocation
    );
    // showDiv.appendChild(dateTitle);
    // showDiv.appendChild(showDate);
    // showDiv.appendChild(venueTitle);
    // showDiv.appendChild(showVenue);
    // showDiv.appendChild(locationTitle);
    // showDiv.appendChild(showLocation);
    shows.appendChild(showDiv);
  }
}

createSectionTitle();
createShows(showList);
