export default function initFetchBitcoin() {}
const btcPreco = document.querySelector(".btc-preco");

fetch("https://blockchain.info/ticker").then((r) => {
  r.json()
    .then((body) => {
      const bitcoin = (1000 / body.BRL.buy).toFixed(4);
      btcPreco.innerText = bitcoin;
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
});
