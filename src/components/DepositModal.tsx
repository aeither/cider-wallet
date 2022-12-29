import React from 'react'
import { Modal, Button, Text, Input, Row, Checkbox } from '@nextui-org/react'

export default function DepositModal() {
  const [visible, setVisible] = React.useState(false)
  const handler = () => setVisible(true)

  const closeHandler = () => {
    setVisible(false)
    console.log('closed')
  }

  return (
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
          <Row justify="space-between">
            <Text size={14}>View on explorer</Text>
            <Text size={14}>Export private key</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
