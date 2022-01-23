require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remain huge include arctic swift soon'; 
let testAccounts = [
"0xe35649377894a0706dbc3a989710b246da3ce2967e9247cdcb9fa5c7b1ed481b",
"0x0977bebb02a9cf1ed72b7d7462f53a251a5b7fd1e80d75cb70154ccbf5b6722a",
"0x1aac61dffa1a0a3bb6106107e33e9471f359a6617d6ba8677bf43d29a55a8751",
"0x6c9bc719cc554a0aa2a32501a4c8b5740a65bdc35d3d0a55a696bc4b188242f2",
"0x3de9cdeb50ec3e51d8c527ccae7c77f7a573858fae3f00a22349800d3db2e370",
"0xb92f4e2b617ad12cc82cd941f93735827f89d8b32acc9be6185f0714a9dcc29b",
"0x337c283b7ecf1ae1428ce53f84bae774b90007a1e711fd36aeb596ebfe96438e",
"0x8feb965370283867d73f5dd3ef1ef25a87c5356de63736f98aa3ce316c964fe3",
"0xa689a3e7c032bcae5e37e1b4af041684db729a5546cd60b824d4cc08b8e88b60",
"0x3dd17a2571cc718d6359e830927118023f7baea91494bfdf27f4e6ce6d5260ff"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


