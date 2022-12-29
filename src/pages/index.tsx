import AccountCard from '@/components/AccountCard'
import AccountPicker from '@/components/AccountPicker'
import PageHeader from '@/components/PageHeader'
import { EIP155_MAINNET_CHAINS, EIP155_TEST_CHAINS } from '@/data/EIP155Data'
import SettingsStore from '@/store/SettingsStore'
import { Fragment } from 'react'
import { useSnapshot } from 'valtio'
import { Grid, Card, Text, Avatar, Row, Col } from '@nextui-org/react'
import { HiDownload } from 'react-icons/hi'
import { FiExternalLink } from 'react-icons/fi'
import { AiOutlineSwap } from 'react-icons/ai'
import DepositModal from '@/components/DepositModal'

export default function HomePage() {
  const { testNets, eip155Address, account } = useSnapshot(SettingsStore.state)

  return (
    <Fragment>
      <PageHeader title="title">
        <AccountPicker />
      </PageHeader>

      <Row justify="center" align="center" css={{ padding: '$8' }}>
        <Col
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '$4'
          }}>
          <Avatar
            css={{ size: '$20' }}
            src={`/blockie${account}.png`}
            color="gradient"
            bordered
          />
          <Text h4 css={{ marginBottom: '$5', textAlign: 'center' }}>
            $221.43
          </Text>
        </Col>
      </Row>

      {Object.values(EIP155_MAINNET_CHAINS).map(({ name, logo, rgb, chainId }) => (
        <AccountCard
          key={name}
          name={name}
          logo={logo}
          rgb={rgb}
          address={eip155Address}
        />
      ))}

      <Grid.Container gap={2} justify="center">
        <Grid xs={4}>
          <Card css={{ h: '$24', $$cardColor: '$colors$primary' }}>
            <Card.Body
              css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
              <HiDownload size={40} />
              {/* <Text h6 size={15} color="white" css={{ mt: 0 }}>
                Deposit
              </Text> */}
              <DepositModal />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card css={{ h: '$24', $$cardColor: '$colors$primary' }}>
            <Card.Body
              css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
              <FiExternalLink size={40} />
              <Text h6 size={15} color="white" css={{ mt: 0 }}>
                Send
              </Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card css={{ h: '$24', $$cardColor: '$colors$primary' }}>
            <Card.Body
              css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
              <AiOutlineSwap size={40} />
              <Text h6 size={15} color="white" css={{ mt: 0 }}>
                Swap
              </Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>

      {testNets ? (
        <Fragment>
          <Text h4 css={{ marginBottom: '$5' }}>
            Testnets
          </Text>
          {Object.values(EIP155_TEST_CHAINS).map(({ name, logo, rgb }) => (
            <AccountCard
              key={name}
              name={name}
              logo={logo}
              rgb={rgb}
              address={eip155Address}
            />
          ))}
        </Fragment>
      ) : null}
    </Fragment>
  )
}
