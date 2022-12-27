import { Core } from "@walletconnect/core"
import type { ICore } from "@walletconnect/types"
import { IWeb3Wallet, Web3Wallet } from "@walletconnect/web3wallet"

export let web3wallet: IWeb3Wallet
export let core: ICore

export async function createWeb3Wallet(relayerRegionURL: string) {
  // Need Fix core
  core = new Core({
    projectId: process.env.PLASMO_PUBLIC_PROJECT_ID
  })

  web3wallet = await Web3Wallet.init({
    core,
    metadata: {
      name: "React Web3Wallet",
      description: "React Web3Wallet for WalletConnect",
      url: "https://walletconnect.com/",
      icons: ["https://avatars.githubusercontent.com/u/37784886"]
    }
  })
}

export async function pair(params: { uri: string }) {
  return await core.pairing.pair({ uri: params.uri })
}
