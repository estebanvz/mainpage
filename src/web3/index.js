import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { connector } from "../config";
import { useCallback, useEffect, useState, useRef } from "react";
import useTruncatedAddress from "../hooks/useTruncatedAddress";

const WalletData = () => {
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
    console.log("chainid " + chainId+" UNSUPPORTED "+isUnsupportedChain)
    if (chainId !== 137) {
      window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x89' }], // chainId must be in hexadecimal numbers
      }).catch(e => {
        window.ethereum.request(
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
    let result = await change_network()
    let gas = library.utils.toHex(3000000)
    library.eth.sendTransaction({
      from: account, to: addr, value: library.utils.toWei("1", "ether"), gas: gas,
      gasLimit: library.utils.toHex(172173),
    })
  }
  return (
    <div>
      <>
        {active ? (chainId===137 ?
          <>
            <div>
              <div>

                <button type="button" className="btn btn-light btn-sm" onClick={disconnect}>
                  {balance} Ξ  {truncatedAddress} <i className="fa-brands fa-ethereum"></i>
                </button>
              </div>
              <div className="pt-2">
                <button type="button" className="btn btn-warning btn-sm" onClick={send_donation}>
                  Donate 1 <strong>MATIC</strong>
                </button>
              </div>
            </div>
          </>
          : <>

            <div>

              <button type="button" className="btn btn-danger btn-sm" onClick={change_network}>
                <i className="fa-brands fa-ethereum"></i>  Wrong Network
              </button>
            </div>
          </>
        ) : (
          <>
            <button type="button" onClick={activate_web3} className="btn btn-secondary btn-sm">Polygon Wallet Connect</button>
          </>
        )}
      </>
      {/* {active ? (
          <Tag colorScheme="green" borderRadius="full">
            <TagLabel>
              <Link to="/punks">{truncatedAddress}</Link>
            </TagLabel>
            <Badge
              d={{
                base: "none",
                md: "block",
              }}
              variant="solid"
              fontSize="0.8rem"
              ml={1}
            >
              ~{balance} Ξ
            </Badge>
            <TagCloseButton onClick={disconnect} />
          </Tag>
        ) : (
          <Button
            variant={"solid"}
            colorScheme={"green"}
            size={"sm"}
            leftIcon={<AddIcon />}
            onClick={connect}
            disabled={isUnsupportedChain}
          >
            {isUnsupportedChain ? "Red no soportada" : "Conectar wallet"}
          </Button>
        )} */}
    </div>
  );
};

export default WalletData;