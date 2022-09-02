import Web3 from "web3/dist/web3.min";
import { InjectedConnector } from "@web3-react/injected-connector";

const connector = new InjectedConnector({
  supportedChainIds: [
    1, //ETH
    56, //BNB
    137, //Polygon
  ],
});

const getLibrary = (provider) => {
  return new Web3(provider);
};

export { connector, getLibrary };