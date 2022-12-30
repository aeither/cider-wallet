import { Col, Divider, Image, Row } from '@nextui-org/react'
import Link from 'next/link'
import { Fragment, ReactNode } from 'react'
import { AiOutlineScan, AiOutlineUserSwitch } from 'react-icons/ai'

/**
 * Types
 */
interface Props {
  children?: ReactNode | ReactNode[]
  title: string
}

/**
 * Component
 */
export default function PageHeader({ title, children }: Props) {
  return (
    <Fragment>
      <Row
        css={{ marginBottom: '$5', width: '100%', gap: '$4' }}
        justify="space-between"
        align="center">
        <Row align="center">
          <Image
            alt="cider icon"
            src="/icons/ciderlogo.svg"
            width={45}
            height={45}
          />
          {children ? <Col css={{ flex: 1 }}>{children}</Col> : null}
        </Row>
        <Link href="/walletconnect" passHref>
          <a className="navLink">
            <AiOutlineScan size={27} color="#0071ED" />
          </a>
        </Link>
        <Link href="/pairings" passHref>
          <a className="navLink">
            <AiOutlineUserSwitch size={27} color="#0071ED" />
          </a>
        </Link>
      </Row>

      {/* <Divider css={{ marginBottom: '$10' }} /> */}
    </Fragment>
  )
}
