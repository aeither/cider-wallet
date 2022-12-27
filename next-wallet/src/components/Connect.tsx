import { Core } from "@walletconnect/core"
import { Web3Wallet, Web3WalletTypes } from "@walletconnect/web3wallet"

interface Props {
  children?: React.ReactNode
}

const TransferButton = () => {
  return (
    <>
      <button className="btn btn-primary">Transfer</button>
    </>
  )
}

export default TransferButton
