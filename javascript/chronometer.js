class Chronometer {
  constructor() {
    // ... your code goes here
    // Propriedades ou atributos da classe
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++; // incrementa em 1
      callback();
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime / 100) % 60;
  }

  getMilliseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    // if (value < 10) {
    //   return `0${value}`;
    // }

    // return value.toString();

    return value.toString().padStart(2, '0');
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    // DRY = Don't Repeat Yourself
    const seconds = this.getSeconds();
    const minutes = this.getMinutes();

    return `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(
      seconds
    )}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
