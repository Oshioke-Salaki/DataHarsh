import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect, disconnect } from "starknetkit";
import WalletConnector from "./WalletConnector";
import PrimaryButton from "./PrimaryButton";

function AppLayout() {
  const [connection, setConnection] = useState("");
  const [provider, setProvider] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const connectToStarknet = async () => {
      console.log("connect", connect);
      const connection = await connect({ modalMode: "neverAsk" });
      console.log("connection", connection);

      if (connection && connection.isConnected) {
        setConnection(connection);
        setProvider(connection.account);
        setAddress(connection.selectedAddress);
      }
    };

    connectToStarknet();
  }, []);

  const connectWallet = async () => {
    const connection = await connect();

    if (connection && connection.isConnected) {
      setConnection(connection);
      setProvider(connection.account);
      setAddress(connection.selectedAddress);
    }
  };

  const disconnectWallet = async () => {
    await disconnect();

    setConnection(undefined);
    setProvider(undefined);
    setAddress("");
  };
  return (
    <div className="min-h-[100dvh] w-[100dvw] bg-primaryBg px-[36px] pb-8 pt-[38px] uppercase text-white">
      <Navbar connection={connection}>
        <WalletConnector
          connection={connection}
          connectWallet={connectWallet}
          disconnectWallet={disconnectWallet}
          address={address}
        />
      </Navbar>
      {!connection && (
        <div>
          <h1 className="mb-[30px] mt-[200px] text-center text-[24px]">
            Hey, Connect your wallet to continue!👇🏻
          </h1>
          <PrimaryButton text={"Connect wallet"} />
        </div>
      )}
      {connection && <Outlet context={[provider, address]} />}
    </div>
  );
}

export default AppLayout;
