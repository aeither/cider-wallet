import { Avatar, Row } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { FaWallet } from 'react-icons/fa'
import { RiLayoutGridFill } from 'react-icons/ri'
import { AiFillThunderbolt } from 'react-icons/ai'

export default function Navigation() {
  return (
    <Row justify="space-around" align="center">
      <Link href="/" passHref>
        <a className="navLink">
          <FaWallet size={27} />
        </a>
      </Link>

      <Link href="/sessions" passHref>
        <a className="navLink">
          <RiLayoutGridFill size={27} />
        </a>
      </Link>

      <Link href="/settings" passHref>
        <a className="navLink">
          <AiFillThunderbolt size={27} />
        </a>
      </Link>

      {/* <Link href="/pairings" passHref>
        <a className="navLink">
          <Image
            alt="pairings icon"
            src="/icons/pairings-icon.svg"
            width={25}
            height={25}
          />
        </a>
      </Link> */}
    </Row>
  )
}
