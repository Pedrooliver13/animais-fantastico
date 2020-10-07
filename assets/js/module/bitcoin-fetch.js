export default class Bitcoin {
  constructor(url, target) {
    this.target = document.querySelector(target);
    this.url = url
  }

  // faz o uso da api
  static async handleFetch() {
    const results = await fetch(this.url);
    const resultsJson = await results.json();

    return resultsJson;
  }

  // adiciona ao html
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