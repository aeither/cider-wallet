import React, { useEffect, useRef, useState } from 'react'
import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Col
} from '@nextui-org/react'
import QRCode from 'react-qr-code'
import ClientOnly from './ClientOnly'
import { useSnapshot } from 'valtio'
import SettingsStore from '@/store/SettingsStore'
import { eip155Addresses, eip155Wallets } from '@/utils/EIP155WalletUtil'
import { useCopyToClipboard, useToggle, useVibrate } from 'react-use'
import { BiClipboard } from 'react-icons/bi'

export default function DepositModal() {
  const [visible, setVisible] = React.useState(false)
  const handler = () => setVisible(true)
  const { account } = useSnapshot(SettingsStore.state)
  const address = eip155Addresses[account]
  const wallet = eip155Wallets[address]

  const [state, copyToClipboard] = useCopyToClipboard()
  const [vibrating, toggleVibrating] = useToggle(false)
  useVibrate(vibrating, [300, 100, 200], false)

  const closeHandler = () => {
    setVisible(false)
    console.log('closed')
  }

  const copyAddress = () => {
    copyToClipboard(address)
    toggleVibrating()
  }

  const exportKey = () => {
    const privateKey = wallet.getPrivateKey()
    console.log(privateKey)
    copyToClipboard(privateKey)
  }

  return (
    <ClientOnly>
      <div>
        <Button auto onClick={handler}>
          Deposit
        </Button>
        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}>
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Account 1
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Row justify="center">
              <Text size={18}>Deposit to your address</Text>
              <div onClick={copyAddress} style={{ paddingLeft: 8 }}>
                <BiClipboard size={27} color="#eee" />
              </div>
            </Row>
            <Row justify="space-between" align="center">
              <Col css={{ textAlign: 'center' }}>
                {address && (
                  <QRCode
                    value={address}
                    bgColor={'white'}
                    // fgColor={fore}
                    // size={size === '' ? 0 : size}
                  />
                )}
              </Col>
            </Row>
            <Row justify="center">
              <Button
                onClick={() =>
                  window.open(
                    `https://explorer.xinfin.network/address/${address}`,
                    '_blank'
                  )
                }>
                View on explorer
              </Button>
            </Row>
            <Row justify="center">
              <Button onClick={exportKey}>Export private key</Button>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandler}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </ClientOnly>
  )
}
