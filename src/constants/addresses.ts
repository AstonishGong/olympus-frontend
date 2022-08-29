import { NetworkId } from "src/constants";

export type AddressMap = Partial<Record<NetworkId, string>>;

export const STAKING_ADDRESSES = {
  [NetworkId.TESTNET_GOERLI]: "0x7263372b9ff6E619d8774aEB046cE313677E2Ec7",
  [NetworkId.MAINNET]: "0xB63cac384247597756545b500253ff8E607a8020",
};

export const BOND_DEPOSITORY_ADDRESSES = {
  [NetworkId.TESTNET_GOERLI]: "0xAda3336fcD233Ff0Eb39BeA0b1a7784E43aD4B00",
  [NetworkId.MAINNET]: "0x9025046c6fb25Fb39e720d97a8FD881ED69a1Ef6",
};

export const OP_BOND_DEPOSITORY_ADDRESSES = {
  [NetworkId.TESTNET_GOERLI]: "0x0C9D01FbD07cC2fD3e09bD953bb65698351AF05D",
  [NetworkId.MAINNET]: "0x22AE99D07584A2AE1af748De573c83f1B9Cdb4c0",
};

export const DAO_TREASURY_ADDRESSES = {
  [NetworkId.TESTNET_GOERLI]: "0x6e36b2f9f2BcC273f090ff049952Fa4B5Cc67567",
  [NetworkId.MAINNET]: "0x245cc372C84B3645Bf0Ffe6538620B04a217988B",
};

export const OHM_DAI_LP_ADDRESSES = {
  [NetworkId.MAINNET]: "0x055475920a8c93CfFb64d039A8205F7AcC7722d3",
};

export const OHM_DAI_ETH_LP_ADDRESSES = {
  [NetworkId.MAINNET]: "0xc45D42f801105e861e86658648e3678aD7aa70f9",
  [NetworkId.TESTNET_GOERLI]: "",
};

export const WBTC_ADDRESSES = {
  [NetworkId.MAINNET]: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
};

export const UST_ADDRESSES = {
  [NetworkId.MAINNET]: "0xa693B19d2931d498c5B318dF961919BB4aee87a5",
};

export const FRAX_ADDRESSES = {
  [NetworkId.MAINNET]: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
};

export const LUSD_ADDRESSES = {
  [NetworkId.MAINNET]: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
};

export const DAI_ADDRESSES = {
  [NetworkId.TESTNET_GOERLI]: "0x41e38e70a36150D08A8c97aEC194321b5eB545A5",
  [NetworkId.MAINNET]: "0x6b175474e89094c44da98b954eedeac495271d0f",
};

export const WETH_ADDRESSES = {
  [NetworkId.MAINNET]: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
};

export const GIVE_ADDRESSES = {
  [NetworkId.TESTNET_GOERLI]: "0x6982CcD55F95A7469746C123f73D54377f382454",
  [NetworkId.MAINNET]: "0x42842Fd91c83B84D51D1be514B9716d62c61CbEF",
};

export const OLD_GIVE_ADDRESSES = {
  [NetworkId.MAINNET]: "0x2604170762A1dD22BB4F96C963043Cd4FC358f18",
};

export const GOHM_ADDRESSES = {
  [NetworkId.TESTNET_GOERLI]: "0xC1863141dc1861122d5410fB5973951c82871d98",
  [NetworkId.MAINNET]: "0x0ab87046fBb341D058F17CBC4c1133F25a20a52f",
  [NetworkId.ARBITRUM]: "0x8D9bA570D6cb60C7e3e0F31343Efe75AB8E65FB1",
  [NetworkId.ARBITRUM_TESTNET]: "0x950c3626B9E9798aA1a4832cEee603ECfb7741a8",
  [NetworkId.AVALANCHE]: "0x321e7092a180bb43555132ec53aaa65a5bf84251",
  [NetworkId.AVALANCHE_TESTNET]: "0x115E5979435c89eF38fB87C2D7Fc3BCA09053c54",
  [NetworkId.POLYGON]: "0xd8cA34fd379d9ca3C6Ee3b3905678320F5b45195",
  [NetworkId.FANTOM]: "0x91fa20244fb509e8289ca630e5db3e9166233fdc",
  [NetworkId.OPTIMISM]: "0x0b5740c6b4a97f90eF2F0220651Cca420B868FfB",
  [NetworkId.BOBA]: "0xd22C0a4Af486C7FA08e282E9eB5f30F9AaA62C95",
};

export const WSOHM_ADDRESSES = {
  [NetworkId.TESTNET_GOERLI]: "0x98002335F094340BB8B21c8b7CC35F0792282651",
  [NetworkId.MAINNET]: "0xca76543cf381ebbb277be79574059e32108e3e65",
  [NetworkId.ARBITRUM]: "0x739ca6D71365a08f584c8FC4e1029045Fa8ABC4B",
  [NetworkId.ARBITRUM_TESTNET]: "0x3DE0150338BDeE175a8EAc6fBbBF2c55279454d5",
  [NetworkId.AVALANCHE]: "0x8cd309e14575203535ef120b5b0ab4dded0c2073",
  [NetworkId.AVALANCHE_TESTNET]: "0x8e8ffc8d41Ee4A915A1FB3940b1beAB0c2Cd5bB0",
};

export const OHM_ADDRESSES = {
  [NetworkId.TESTNET_GOERLI]: "0x0595328847AF962F951a4f8F8eE9A3Bf261e4f6b",
  // [NetworkId.TESTNET_RINKEBY]: "0x14cD61F5d13a4E175F032B252f197B65B9c8E6dc",
  [NetworkId.MAINNET]: "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
};

export const V1_OHM_ADDRESSES = {
  [NetworkId.TESTNET_GOERLI]: "0x5f99F707470E81784eA064377b302Ff111b5a95A",
  [NetworkId.MAINNET]: "0x383518188c0c6d7730d91b2c03a03c837814a899",
};

export const SOHM_ADDRESSES = {
  [NetworkId.TESTNET_GOERLI]: "0x4EFe119F4949319f2Acb12efD615a7B63896482B",
  [NetworkId.MAINNET]: "0x04906695D6D12CF5459975d7C3C03356E4Ccd460",
};

export const V1_SOHM_ADDRESSES = {
  [NetworkId.TESTNET_GOERLI]: "0x018C3877ef779fb977E7700BFDF08B6f63BD07B8",
  [NetworkId.MAINNET]: "0x04F2694C8fcee23e8Fd0dfEA1d4f5Bb8c352111F",
};

export const MIGRATOR_ADDRESSES = {
  [NetworkId.TESTNET_GOERLI]: "0x33c7278a7C0Ea98d75B2CCb87506aC3fD494dC83",
  [NetworkId.MAINNET]: "0x184f3FAd8618a6F458C16bae63F70C426fE784B3",
  [NetworkId.ARBITRUM]: "0x1e7902a8b0adbf81042b5e30bdfa281f0b928d6d",
  [NetworkId.ARBITRUM_TESTNET]: "0xde9518c8444Fa436704Fbd9db27B3910bca9F532",
  [NetworkId.AVALANCHE]: "0xB10209BFbb37d38EC1B5F0c964e489564e223ea7",
  [NetworkId.AVALANCHE_TESTNET]: "0x9050D25977F8A19CDD5599A28bC5f55d39fb6105",
};

export const GOHM_TOKEMAK_ADDRESSES = {
  [NetworkId.MAINNET]: "0x41f6a95bacf9bc43704c4a4902ba5473a8b00263",
};

export const FUSE_POOL_6_ADDRESSES = {
  [NetworkId.MAINNET]: "0x59bd6774c22486d9f4fab2d448dce4f892a9ae25",
};

export const FUSE_POOL_18_ADDRESSES = {
  [NetworkId.MAINNET]: "0x6eDa4b59BaC787933A4A21b65672539ceF6ec97b",
};

export const FUSE_POOL_36_ADDRESSES = {
  [NetworkId.MAINNET]: "0x252d447c54F33e033AD04048baEAdE7628cB1274",
};

export const ZAP_ADDRESSES = {
  [NetworkId.MAINNET]: "0x6F5CC3EDEa92AB52b75bad50Bcf4C6daa781B87e",
};

export const PT_PRIZE_POOL_ADDRESSES = {
  [NetworkId.MAINNET]: "0xEaB695A8F5a44f583003A8bC97d677880D528248",
};

export const FIATDAO_WSOHM_ADDRESSES = {
  [NetworkId.MAINNET]: "0xe98ae8cD25CDC06562c29231Db339d17D02Fd486",
};

export const BALANCER_VAULT_ADDRESSSES = {
  [NetworkId.MAINNET]: "0xba12222222228d8ba445958a75a0704d566bf2c8",
};

export const DEV_FAUCET = {
  [NetworkId.TESTNET_GOERLI]: "0x405940141AeE885347ef4C47d933eF4cA6A674D8",
};
