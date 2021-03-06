const chain = "208dacab3cd2e181c86841613cf05d9c60786c677e4ce86b266d0a58884968f7";

export const environment = {
  production: true,
  // appName: "Armonia Multichain Platform",
  network: {
    blockchain: "AMAX",
    host: "expnode.amaxscan.io",
    port: 443,
    protocol: "https",
    expireInSeconds: 120,
    chainId: chain,
  },
  // chain: chain,
  // Eos: {
  //   httpEndpoint: "https://expnode.amaxscan.io",
  //   chainId: chain,
  //   verbose: false,
  // },
  frontConfig: {
    coin: "AMAX",
    bp: "bp.json",
    tokenContract: "amax.token",
    convertToUSD: false,
    customBalance: false, //when true: must show precision
    logo: "/assets/images/amax.png",
    name: {
      big: "",
      small: "",
    },
    nets: [{ name: "AMAX", url: "https://expnode.amaxscan.io", active: true }],
    disableNets: true,
    voteDonationAcc: "amaxdonation",
    disableVoteDonation: true,
    version: "2.2.8",
    producers: 1000,
    social: [],
    liveTXenable: true,
  },
};
