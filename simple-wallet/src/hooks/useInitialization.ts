// import { createOrRestoreEIP155Wallet } from "@/utils/EIP155WalletUtil"
// import { createWeb3Wallet } from "@/utils/WalletConnectUtil"
import { useCallback, useEffect, useRef, useState } from "react"
import { useSnapshot } from "valtio"

import SettingsStore from "~src/store/SettingsStore"
import { createOrRestoreEIP155Wallet } from "~src/utils/EIP155WalletUtil"
import { createWeb3Wallet } from "~src/utils/WalletConnectUtil"

export default function useInitialization() {
  const [initialized, setInitialized] = useState(false)
  const prevRelayerURLValue = useRef<string>("")

  const { relayerRegionURL } = useSnapshot(SettingsStore.state)

  const onInitialize = useCallback(async () => {
    try {
      const { eip155Addresses } = createOrRestoreEIP155Wallet()

      SettingsStore.setEIP155Address(eip155Addresses[0])
      prevRelayerURLValue.current = relayerRegionURL

      console.log("id: ", process.env.PLASMO_PUBLIC_PROJECT_ID)
      await createWeb3Wallet(relayerRegionURL)

      setInitialized(true)
    } catch (err: unknown) {
      alert(err)
    }
  }, [relayerRegionURL])

  useEffect(() => {
    if (!initialized) {
      onInitialize()
    }
    if (prevRelayerURLValue.current !== relayerRegionURL) {
      setInitialized(false)
      onInitialize()
    }
  }, [initialized, onInitialize, relayerRegionURL])

  return initialized
}
