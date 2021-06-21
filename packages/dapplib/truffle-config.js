require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remember hospital heavy private swift ghost'; 
let testAccounts = [
"0xee09ef823bbddf9eef3ffb42106e8245cf28b566e7a7fd6e4826dac3957d9724",
"0x7f0427ca3e63c6416697b81585cfb376221a01535e7e83b6cf7cdfc06fa6b636",
"0xe4121127fbadc9f89086276daf0f5fa6a5fad982613c544ed398dfba669c68fd",
"0x1b0f9e8096a34bbce1235d2efdb03cb158521b9500f5da4f8202b7137d6c9b6a",
"0x08f51e4584cd2e7ec359fc80c678c168114a6d2b7b2b17359656b3fa94717cb0",
"0x536e7c9d5ff4eb9a7c08361ee378f0939dbb93f9a3cfcee2a3a37e8bf895d6a1",
"0x4d0cbfc8ebc98607e47ddd13dd581dc712047559fcbf97eba35e1ba4f0e8491c",
"0x3ce4c59c8a58dc68231ff319f85d3670d60a9cc63578ee27651202b1241a9afd",
"0x0c5cca6ab855ddc5d271fd19dab1a368d7bcf0346cc2fcf085161256031793db",
"0x768c3a8dba00b9ecea4698a521e42665f8147481fe9d419f79c1cab1cac173a6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

