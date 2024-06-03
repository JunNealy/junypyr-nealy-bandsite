class ConvertTimeCode {
  constructor(timeStamp) {
    this.timeStamp = timeStamp;
    this.monthsAbbrev = [
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
    this.daysOfWeekAbbrev = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  }

  twoDigitMonth(date) {
    let month = date.getMonth() + 1;
    month = month.toString();
    return (month = month.padStart(2, '0'));
  }

  twoDigitDate(convertDate) {
    let date = convertDate.getDate();
    date = date.toString();
    return (date = date.padStart(2, '0'));
  }

  toDsMsDDYY(timeStamp) {
    let fullDate = new Date(this.timeStamp);
    console.log(fullDate);
    let month = fullDate.getMonth() + 1;
    let monthString = this.monthsAbbrev[month];
    let dayOfWeek = fullDate.getDay();
    let dayOfWeekString = this.daysOfWeekAbbrev[dayOfWeek];
    let date = this.twoDigitDate(fullDate);
    let year = fullDate.getFullYear();

    return `${dayOfWeekString} ${monthString} ${date} ${year}`;
  }
}

const concertDate = new ConvertTimeCode('1725854400000');

console.log(concertDate.toDsMsDDYY());

export default ConvertTimeCode;
