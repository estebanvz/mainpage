import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { connector } from "../config";
import { useCallback, useEffect, useState } from "react";
import useTruncatedAddress from "../hooks/useTruncatedAddress";
import iconPolygon from "../assets/polygon.svg"
const WalletData = () => {
  const { ethereum } = window
  const [balance, setBalance] = useState(0);
  const addr = "0x2b66E19C7b75fF24F58a2337b4aA0aCd76e59f5f"
  const { active, activate, deactivate, chainId, account, error, library } =
    useWeb3React();
  const isUnsupportedChain = error instanceof UnsupportedChainIdError;
  const connect = useCallback(() => {
    console.log("isUnsupported " + isUnsupportedChain)
    activate(connector);
    localStorage.setItem("previouslyConnected", "true");
  }, [activate, isUnsupportedChain]);

  const disconnect = () => {
    deactivate();
    localStorage.removeItem("previouslyConnected");
  };

  const getBalance = useCallback(async () => {
    const toSet = await library.eth.getBalance(account);
    setBalance((toSet / 1e18).toFixed(2));
  }, [library?.eth, account]);

  useEffect(() => {
    if (active) getBalance();
  }, [active, getBalance]);

  // useEffect(() => {
  //   if (localStorage.getItem("previouslyConnected") === "true" && web3_active) connect();
  // }, [connect]);

  const truncatedAddress = useTruncatedAddress(account);
  const activate_web3 = () => {
    console.log("Active web3")
    connect();
    localStorage.setItem("previouslyConnected", "true");
  }
  const change_network = () => {
    console.log("chainid " + chainId + " UNSUPPORTED " + isUnsupportedChain)
    if (chainId !== 137) {
      ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x89' }], // chainId must be in hexadecimal numbers
      }).catch(e => {
        ethereum.request(
          {
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: '0x89',
              chainName: 'Polygon',
              nativeCurrency: {
                name: 'MATIC',
                symbol: 'MATIC',
                decimals: 18
              },
              rpcUrls: ['https://polygon-rpc.com/'],
              blockExplorerUrls: ['https://polygonscan.com/']
            }]
          }
        );
      });
    }
  }
  const send_donation = async () => {
    //0.00868626
    await change_network()
    let gas = library.utils.toHex(3000000)
    library.eth.sendTransaction({
      from: account, to: addr, value: library.utils.toWei("1", "ether"), gas: gas,
      gasLimit: library.utils.toHex(172173),
    })
  }
  return (
    <div>
      {active ? (chainId === 137 ?
        <>
          <div>
            <div className="btn-group" role="group" aria-label="wallet">

              <button type="button" className="btn btn-light-wallet">
                {balance}
              </button>
              <button type="button" className="btn btn-light" onClick={disconnect}>
                {truncatedAddress} <img src={iconPolygon} width="30rem" alt="polygon icon"></img>
              </button>
            </div>
            <div className="pt-2">
              <button type="button" className="btn btn-warning active" onClick={send_donation}>
                Donate 1 <strong>MATIC</strong>
              </button>
            </div>
          </div>
        </>
        : <>

          <div>

            <button type="button" className="btn btn-danger" onClick={change_network}>
              <i className="fa-brands fa-ethereum"></i>  Wrong Network
            </button>
          </div>
        </>
      ) : (
        ethereum ?
          (
            <button type="button" onClick={activate_web3} className="btn btn-secondary" > Polygon Crypto Wallet</button>

          ) : (
            <a href="https://metamask.io/">
              <button type="button" className="btn btn-danger"> <i className="fa-solid fa-circle-exclamation"></i> Install Metamask </button>
            </a>

          )

      )}
    </div >
  );
};
export default WalletData;