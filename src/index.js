const Contract = require("@truffle/contract");
const Ganache = require("ganache");

function getProvider() {
  const providerOptions = {

    // EXITS in strict mode
    miner: { instamine: "eager" },
    mnemonic:
      "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat",
    total_accounts: 1,
    default_ether_balance: 100,
    logging: { quiet: true }
  };
  return Ganache.provider(providerOptions);
}

// First address generated from the above mnemonic
const fromAddress = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57";

async function test() {
  const provider = getProvider();
  console.log('provider created');

  const artifact = require("./SimpleStorage.json");;
  const contract = Contract(artifact);
  contract.setProvider(provider);
  
  const deployed = await contract.new({from: fromAddress});
  console.log(`new contract deployed: ${deployed.address}`);

  async function mine() {
    await provider.send("evm_mine");
    const number = await provider.send("eth_blockNumber");
    console.log({number});
    if (number == 25) {{
      // wait another second just to be for sure
      setTimeout(() => provider.disconnect(), 1000);
    }}
    setTimeout(mine, 100);
  }
  mine();
}


test();
