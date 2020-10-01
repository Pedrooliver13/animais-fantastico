export default function initFetchBitcoin() {

  class Bitcoin {
    constructor(tag) {
      this.tag = document.querySelector(tag);
    }
    async handleFetch() {
      const results = await fetch('https://blockchain.info/ticker')
      const resultsJson = await results.json();
  
      return resultsJson;
    }
    async insertBitcoin() {
      const resultsJson = await this.handleFetch();

      this.tag.innerHTML =  (1000 / resultsJson.BRL.buy).toFixed(4);
    }
  }

  new Bitcoin('[data-bitcoin]').insertBitcoin();

}