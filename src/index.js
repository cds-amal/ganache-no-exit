const wtf = require("wtfnode");
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

  const value = (await deployed.data()).toString();
  console.log(`Read value from deployed contract: ${value}`);

  console.log('DISCONNECT Provider ...');
  await provider.disconnect();
  console.log('...returned from `await provider.disconnect()`');

  setInterval(() => console.log('Does this process exit? (try commenting out the `provider.disconnect()` call on next run)'), 3000).unref();
}


test().then(() => {
  wtf.dump();
});
