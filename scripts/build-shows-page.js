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

createSectionTitle();

function createShows(array) {
  for (let i = 0; i < array.length; i++) {
    let showDiv = document.createElement('div');

    let dateTitle = document.createElement('p');
    let showDate = document.createElement('p');
    showDate.innerText = `${array[i].date}`;

    let venueTitle = document.createElement('p');
    let showVenue = document.createElement('p');
    showVenue.innerText = `${array[i].venue}`;

    let locationTitle = document.createElement('p');

    dateTitle.innerText = 'DATE';
    venueTitle.innerText = 'VENUE';
    locationTitle.innerText = 'LOCATION';
    showDiv.appendChild(dateTitle);
    showDiv.appendChild(showDate);
    showDiv.appendChild(venueTitle);
    showDiv.appendChild(showVenue);
    showDiv.appendChild(locationTitle);
    shows.appendChild(showDiv);
  }
}

createShows(showList);
