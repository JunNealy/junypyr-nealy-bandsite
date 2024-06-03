function convert(timeStamp) {
  let monthsAbbrev = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  let convertedDate = '';
  let fullDate = new Date(timeStamp);
  let month = fullDate.getMonth() + 1;
  let date = fullDate.getDate();
  let day = fullDate.getDate();
  let year = fullDate.toLocaleString('en-US', { year: 'numeric' });
  convertedDate = `${day}  ${month}/${date}/${year}`;
  console.log(convertedDate);
  return convertedDate;
}

export default convert;
