import { EIP155_MAINNET_CHAINS } from '@/data/EIP155Data'
import SettingsStore from '@/store/SettingsStore'

export default function ChainPicker() {
  async function onSelect(value: string) {
    const chainId = Number(value)
    SettingsStore.setChainId(chainId)

    if (!window.ethereum) return
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: `0x${chainId.toString(16)}` }]
    })
  }

  return (
    <>
      <select
        id="chain-select"
        // value={account}
        defaultValue={'XinFin XDC Network'}
        onChange={(e) => onSelect(e.currentTarget.value)}
        aria-label="addresses">
        {Object.values(EIP155_MAINNET_CHAINS).map(({ chainId, name }) => (
          <option value={chainId}>{name}</option>
        ))}
      </select>
    </>
  )
}
