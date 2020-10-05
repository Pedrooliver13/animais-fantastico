export default class Countdown {
  constructor(futureDays) {
    this.futureDays = futureDays;
  }

  static get _actualDate() {
    return new Date();
  }
  
  get _futureDate() {
    return new Date(this.futureDays);
  }
  
  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }
  
  get day() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
  }
  
  get hours() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
  }
  
  get minutes() {
    return Math.floor(this._timeStampDiff / (60 * 1000));
  }
  
  get second() {
    return Math.floor(this._timeStampDiff / 1000);
  }
  
  get total() {
    const { day } = this.day;
    const hours = this.hours % 60;
    const minutes = this.minutes % 60;
    const second = this.second % 1000;
    
    return {
      day,
      hours,
      minutes,
      second,
    };
  }
}
