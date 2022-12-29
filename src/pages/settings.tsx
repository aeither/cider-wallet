import AccountPicker from '@/components/AccountPicker'
import PageHeader from '@/components/PageHeader'
import RelayRegionPicker from '@/components/RelayRegionPicker'
import SettingsStore from '@/store/SettingsStore'
import { createNewEIP155Wallet, eip155Wallets } from '@/utils/EIP155WalletUtil'
import { Card, Divider, Input, Row, Switch, Text } from '@nextui-org/react'
import { Fragment } from 'react'
import { useSnapshot } from 'valtio'
import packageJSON from '../../package.json'

export default function SettingsPage() {
  const { autoApprove, eip155Address } = useSnapshot(SettingsStore.state)

  const resetWallets = () => {
    const { eip155Addresses } = createNewEIP155Wallet()
    SettingsStore.setEIP155Address(eip155Addresses[0])
  }

  return (
    <Fragment>
      <PageHeader title="settings">
        <AccountPicker />
      </PageHeader>

      <Text h4 css={{ marginBottom: '$5' }}>
        Packages
      </Text>
      <Row justify="space-between" align="center">
        <Text color="$gray400">@walletconnect/web3wallet</Text>
        <Text color="$gray400">
          {packageJSON.dependencies['@walletconnect/web3wallet']}
        </Text>
      </Row>
      <Row justify="space-between" align="center">
        <Text color="$gray400">@walletconnect/utils</Text>
        <Text color="$gray400">
          {packageJSON.dependencies['@walletconnect/utils']}
        </Text>
      </Row>
      <Row justify="space-between" align="center">
        <Text color="$gray400">@walletconnect/types</Text>
        <Text color="$gray400">
          {packageJSON.devDependencies['@walletconnect/types']}
        </Text>
      </Row>

      <Divider y={2} />

      <Text h4 css={{ marginBottom: '$5' }}>
        Auto approve
      </Text>
      <Row justify="space-between" align="center">
        <Switch
          checked={autoApprove}
          onChange={SettingsStore.toggleAutoApprove}
        />
        <Text>{autoApprove ? 'Enabled' : 'Disabled'}</Text>
      </Row>

      <Divider y={2} />

      <Row justify="space-between" align="center">
        <Text h4 css={{ marginBottom: '$5' }}>
          Relayer Region
        </Text>
        <RelayRegionPicker />
      </Row>

      <Divider y={2} />

      <Text
        css={{
          color: '$yellow500',
          marginBottom: '$5',
          textAlign: 'left',
          padding: 0
        }}>
        Warning: mnemonics and secret keys are provided for development purposes
        only and should not be used elsewhere!
      </Text>

      <Text h4 css={{ marginTop: '$5', marginBottom: '$5' }}>
        EIP155 Mnemonic
      </Text>
      <Card bordered borderWeight="light" css={{ minHeight: '100px' }}>
        <Input.Password
          // labelPlaceholder="Password"
          initialValue={eip155Wallets[eip155Address].getMnemonic()}
          css={{ fontFamily: '$mono' }}
        />
      </Card>
    </Fragment>
  )
}
