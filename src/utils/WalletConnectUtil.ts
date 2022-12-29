import { Core } from '@walletconnect/core'
import { ICore } from '@walletconnect/types'
import { Web3Wallet, IWeb3Wallet } from '@walletconnect/web3wallet'
export let web3wallet: IWeb3Wallet
export let core: ICore

if (!process.env.NEXT_PUBLIC_PROJECT_ID)
  throw 'NEXT_PUBLIC_PROJECT_ID not found'
const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID

if (!process.env.NEXT_PUBLIC_RELAY_URL) throw 'NEXT_PUBLIC_RELAY_URL not found'
const RELAY_URL = process.env.NEXT_PUBLIC_RELAY_URL

export async function createWeb3Wallet(relayerRegionURL: string) {
  // console.log('env: ', PROJECT_ID, RELAY_URL)

  core = new Core({
    logger: 'debug',
    projectId: PROJECT_ID,
    relayUrl: relayerRegionURL ?? RELAY_URL
  })
  console.log(
    '🚀 ~ file: WalletConnectUtil.ts:18 ~ createWeb3Wallet ~ core',
    core
  )

  web3wallet = await Web3Wallet.init({
    core,
    name: 'Cider Wallet',
    metadata: {
      name: 'Cider Wallet',
      description: 'Cider Wallet for WalletConnect.',
      url: 'https://walletconnect.com/',
      icons: ['https://avatars.githubusercontent.com/u/37784886']
    }
  })
  console.log(
    '🚀 ~ file: WalletConnectUtil.ts:32 ~ createWeb3Wallet ~ web3wallet',
    web3wallet
  )
}

export async function pair(params: { uri: string }) {
  return await core.pairing.pair({ uri: params.uri })
}
