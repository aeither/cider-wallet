/* eslint-env worker */

// import "~/style.css"

import { useReducer, useState } from "react"

import { Storage } from "@plasmohq/storage"

import TransferButton from "~src/components/Connect"
import useInitialization from "~src/hooks/useInitialization"
import useWalletConnectEventsManager from "~src/hooks/useWalletConnectEventsManager"

function IndexPopup() {
  // Step 1 - Initialize wallets and wallet connect client
  const initialized = useInitialization()
  console.log("🚀 ~ file: index.tsx:16 ~ IndexPopup ~ initialized", initialized)

  // Step 2 - Once initialized, set up wallet connect event manager
  useWalletConnectEventsManager(initialized)
  const [data, setData] = useState("")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h2>
        Welcome to your{" "}
        <a href="https://www.plasmo.com" target="_blank">
          Plasmo
        </a>{" "}
        Extension!
      </h2>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
