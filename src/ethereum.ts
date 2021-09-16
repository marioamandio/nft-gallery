import { getDefaultProvider } from "ethers";
import Web3 from "web3";
import { covidPunksAbi } from "./abi";

export const ethersConfig = {
  provider: getDefaultProvider("homestead"),
};

export const contractAddress = "0xe4cfae3aa41115cb94cff39bb5dbae8bd0ea9d41";
const web3 = new Web3(
  Web3.givenProvider || "ws://some.local-or-remote.node:8546"
);
export const covidPunksContract = new web3.eth.Contract(
  covidPunksAbi as any,
  contractAddress
);
