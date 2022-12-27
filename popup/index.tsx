/* eslint-env worker */

import "~/style.css"

import { useReducer, useState } from "react"

import { Storage } from "@plasmohq/storage"

import TransferButton from "~src/components/Transfer"
import useInitialization from "~src/hooks/useInitialization"
import useWalletConnectEventsManager from "~src/hooks/useWalletConnectEventsManager"

function IndexPopup() {
  // Step 1 - Initialize wallets and wallet connect client
  const initialized = useInitialization()
  console.log("🚀 ~ file: index.tsx:16 ~ IndexPopup ~ initialized", initialized)

  // Step 2 - Once initialized, set up wallet connect event manager
  // useWalletConnectEventsManager(initialized)

  const [count, increase] = useReducer((c) => c + 1, 0)

  const [data, setData] = useState("")
  const storage = new Storage()

  const get = async () => {
    const data = await storage.get("key")
    setData(data)
  }

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await res.json()
    setData(JSON.stringify(data))

    console.log("hello world")
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        width: "240px",
        height: "540px"
      }}>
      <TransferButton />
      <h1>const FrontHull: {process.env.PLASMO_PUBLIC_PROJECT_ID}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 16
        }}>
        <button
          onClick={() => increase()}
          type="button"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Count:
          <span className="inline-flex items-center justify-center w-8 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
            {count}
          </span>
        </button>
      </div>
      <button className="p-2 bg-slate-500" onClick={get}>
        click
      </button>
      <button onClick={fetchData}>fetch data</button>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <p>{typeof data}</p>
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
