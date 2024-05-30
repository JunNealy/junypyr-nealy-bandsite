function convert(timeStamp) {
  let monthsAbbrev = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  let convertedDate = '';
  let fullDate = new Date(timeStamp);
  let month = fullDate.getMonth() + 1;
  let date = fullDate.getDate();
  let year = fullDate.toLocaleString('en-US', { year: 'numeric' });
  convertedDate = `${month}/${date}/${year}`;
  console.log(convertedDate);
  return convertedDate;
}

export default convert;
