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
    let month = fullDate.getMonth();
    let monthString = this.monthsAbbrev[month];
    let dayOfWeek = fullDate.getDay();
    let dayOfWeekString = this.daysOfWeekAbbrev[dayOfWeek];
    let date = this.twoDigitDate(fullDate);
    let year = fullDate.getFullYear();

    return `${dayOfWeekString} ${monthString} ${date} ${year}`;
  }

  toMMDDYYY(timeStamp) {
    let fullDate = new Date(timeStamp);
    let month = this.twoDigitMonth(fullDate);
    let day = this.twoDigitDate(fullDate);
    let year = fullDate.getFullYear();
    return `${month}/${day}/${year}`;
  }
}

export default ConvertTimeCode;
