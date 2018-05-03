# Tierion Network Token (TNT) Ethereum Smart Contract

An `ERC20` standard token. Built on the [OpenZeppelin](https://openzeppelin.org/) framework.

## Deployment

Contract Owner Address:

[0x5E9c071070343395106991556D3Eb0651eDFf8cF](https://etherscan.io/address/0x5E9c071070343395106991556D3Eb0651eDFf8cF)

Deploy TX:

[0x133eea1aa3abfcc52e07c80d8b1406c058ba3640389686c86e1f3dd572ba298b](https://etherscan.io/tx/0x133eea1aa3abfcc52e07c80d8b1406c058ba3640389686c86e1f3dd572ba298b)

Contract Address:

[0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8](https://etherscan.io/address/0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8)

Etherscan TNT Token Viewer:
[https://etherscan.io/token/0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8](https://etherscan.io/token/0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8)

## Development

The production build was compiled with the following Truffle version:

```
➜  tierion-erc20-smart-contract git:(master) ./node_modules/.bin/truffle version
Truffle v3.4.9 (core: 3.4.8)
Solidity v0.4.15 (solc-js)
```

### Setup

You'll need the [yarn tool installed](https://yarnpkg.com/lang/en/docs/install/).

Install dev dependencies:

```
cd tierion-erc20-smart-contract
yarn
```

### Test

Running `yarn test` will also take care of starting/stopping `testrpc`.

```
yarn test
```

0x1abf1bc72a3689c71640dc10171333a456ceb9cb
 

geth --networkid=4 --datadir=/viv/rinkeby --syncmode=light --ethstats='yournode:Respect my authoritah!@stats.rinkeby.io' --bootnodes=enode://a24ac7c5484ef4ed0c5eb2d36620ba4e4aa13b8c84684e1b4aab0cebea2ae45cb4d375b77eab56516d34bfbd3c1a833fc51296ff084b770b94fb9028c4d25ccf@52.169.42.101:30303
