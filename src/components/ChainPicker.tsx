import { EIP155_MAINNET_CHAINS } from '@/data/EIP155Data'
import SettingsStore from '@/store/SettingsStore'
import { useSnapshot } from 'valtio'

export default function ChainPicker() {
  const { account } = useSnapshot(SettingsStore.state)

  function onSelect(value: string) {
    const chainId = Number(value)
    SettingsStore.setChainId(chainId)
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
