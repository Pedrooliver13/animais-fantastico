export default class Bitcoin {
  constructor(url, target) {
    this.target = document.querySelector(target);
    this.url = url
  }

  static async handleFetch() {
    const results = await fetch(this.url);
    const resultsJson = await results.json();

    return resultsJson;
  }

  async insertBitcoin() {
    const resultsJson = await this.handleFetch();

    this.target.innerHTML = (1000 / resultsJson.BRL.buy).toFixed(4);
  }

  init() {
    if(this.target)
      this.insertBitcoin();

    return this;
  }
}