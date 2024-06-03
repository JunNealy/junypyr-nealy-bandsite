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
  }

  twoDigitMonth(date) {
    let month = date.getMonth() + 1;
    month = month.toString();
    month = month.padStart(2, '0');
  }

  twoDigitDate(convertDate) {
    let date = convertDate.getDate();
    if (date.length === 1) {
      date = date.padStart(2, '0');
      return date;
    } else {
      return date;
    }
  }

  toDsMsDDYY(timeStamp) {
    let fullDate = new Date(timeStamp);
    let monthString = this.twoDigitMonth(fullDate);
    let dayOfWeek = fullDate.getDay();
    let date = this.twoDigitDate(fullDate);
    let year = fullDate.getFullYear();

    return `${dayOfWeek} ${monthString} ${date} ${year}`;
  }
}

const concertDate = new ConvertTimeCode('1717456804');

console.log(concertDate.toDsMsDDYY());

export default ConvertTimeCode;
