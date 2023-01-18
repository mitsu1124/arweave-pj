const Arweave = require('arweave');

// Or to specify a gateway when running from NodeJS you might use
const arweave = Arweave.init({
  host: 'arweave.net' 
});

arweave.wallets.getBalance('1seRanklLU_1VTGkEk7P0xAwMJfA7owA1JHW5KyZKlY').then((balance) => {
    let winston = balance;
    let ar = arweave.ar.winstonToAr(balance);

    console.log(winston);
    //125213858712

    console.log(ar);
    //0.125213858712
});