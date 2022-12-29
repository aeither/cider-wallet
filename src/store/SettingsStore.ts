import { proxy } from 'valtio'

/**
 * Types
 */
interface State {
  testNets: boolean
  autoApprove: boolean
  account: number
  eip155Address: string
  relayerRegionURL: string
}

/**
 * State
 */
const state = proxy<State>({
  testNets:
    typeof localStorage !== 'undefined'
      ? Boolean(localStorage.getItem('TEST_NETS'))
      : true,
  autoApprove:
    typeof localStorage !== 'undefined'
      ? Boolean(localStorage.getItem('AUTO_APPROVE'))
      : true,
  account: 0,
  eip155Address: '',
  relayerRegionURL: ''
})

/**
 * Store / Actions
 */
const SettingsStore = {
  state,

  setAccount(value: number) {
    state.account = value
  },

  setEIP155Address(eip155Address: string) {
    state.eip155Address = eip155Address
  },

  setRelayerRegionURL(relayerRegionURL: string) {
    state.relayerRegionURL = relayerRegionURL
  },

  toggleTestNets() {
    state.testNets = !state.testNets
    if (state.testNets) {
      localStorage.setItem('TEST_NETS', 'YES')
    } else {
      localStorage.removeItem('TEST_NETS')
    }
  },

  toggleAutoApprove() {
    state.autoApprove = !state.autoApprove
    if (state.autoApprove) {
      localStorage.setItem('AUTO_APPROVE', 'YES')
    } else {
      localStorage.removeItem('AUTO_APPROVE')
    }
  }
}

export default SettingsStore
