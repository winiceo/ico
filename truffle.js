
var HDWalletProvider = require("truffle-hdwallet-provider"); // 在这里我们需要通过 js 调用以太坊钱包，通过 npm install truffle-hdwallet-provider 安装这个库

var infura_apikey = "ubQWERwasd"; // infura 为你提供的 apikey 请与你申请到的 key 保持一致，此处仅为示例
var mnemonic = "mom lend post hidden family trash canoe physical knock crane rapid debris"; // 你以太坊钱包的 mnemonic ，可以从 Metamask 当中导出，mnemonic 可以获取你钱包的所有访问权限，请妥善保存，在开发中切勿提交到 git

module.exports = {
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      network_id: '*' // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/XyRNUV3vyFAmldVaRIjO")
      },
      network_id: 4,
      gas: 3012388,
      gasPrice: 30000000000

    },
    mainnet: {
      network_id: 1,
      from: '...',
      host: "localhost",
      port: 8546   // Different than the default
    }
  }
}