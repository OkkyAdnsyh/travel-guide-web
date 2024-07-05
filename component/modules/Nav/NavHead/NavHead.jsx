import React from 'react'
import styles from '@/styles/nav.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { Assets } from '@/component/elements/Assets'
import { Btn } from '@/component/elements/Btn'

const NavHead = ({screen}) => {
  if(screen === 'desktop') return (
    <p>desktop</p>
  )
  if(screen === 'mobile') return (
    <header className={styles['nav_head_mobile']}>
      <Link href={'/'}>
        <Image src={Assets.Logo} alt='logo' width={103} height={43}/>
      </Link>
      <Btn.CTA />
      <div className={styles['btn_group']}>
        <Btn.Toggle />
        <Btn.Toggle />
      </div>
    </header>
  )
}

export default NavHead