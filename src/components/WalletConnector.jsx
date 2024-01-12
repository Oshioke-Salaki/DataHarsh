/* eslint-disable react/prop-types */
function WalletConnector({ connection, disconnectWallet, connectWallet }) {
  return (
    <>
      {connection ? (
        <button
          className="p-[10px] text-base text-[#BA0039]"
          onClick={disconnectWallet}
        >
          DISCONNECT WALLET
        </button>
      ) : (
        <button
          className="p-[10px] text-base text-[#BA0039]"
          onClick={connectWallet}
        >
          CONNECT WALLET
        </button>
      )}
    </>
  );
}

export default WalletConnector;
