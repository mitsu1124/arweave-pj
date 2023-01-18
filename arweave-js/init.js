const Arweave = require('arweave');

// If you want to connect directly to a node
// const arweave = Arweave.init({
//     host: '127.0.0.1',
//     port: 1984,
//     protocol: 'http'
// });

// Or to specify a gateway when running from NodeJS you might use
const arweave = Arweave.init({
  host: 'arweave.net' 
});

arweave.wallets.generate().then((key) => {
    console.log(key);
    // {
    //     "kty": "RSA",
    //     "n": "3WquzP5IVTIsv3XYJjfw5L-t4X34WoWHwOuxb9V8w...",
    //     "e": ...
});
