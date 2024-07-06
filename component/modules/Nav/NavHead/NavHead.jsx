import React from 'react'
import styles from '@/styles/nav.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { Assets } from '@/component/elements/Assets'
import { Btn } from '@/component/elements/Btn'

const NavHead = ({screen, openNav, openSearchBar}) => {
  if(screen === 'desktop') return (
    <p>desktop</p>
  )
  if(screen === 'mobile') return (
    <header className={styles['nav_head_mobile']}>
      <Link href={'/'}>
        <Image src={Assets.Logo} alt='logo' width={103} height={43}/>
      </Link>
      <Btn.CTA href={'/auth/sign-in'} content={'Sign In'} type={'main'}/>
      <div className={styles['btn_group']}>
        <Btn.Toggle onClick={openSearchBar}>
          <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.1333 28.5L17.7333 20.1C17.0667 20.6333 16.3 21.0556 15.4333 21.3667C14.5667 21.6778 13.6444 21.8333 12.6667 21.8333C10.2444 21.8333 8.19467 20.9942 6.51733 19.316C4.84 17.6378 4.00089 15.588 4 13.1667C3.99911 10.7453 4.83822 8.69556 6.51733 7.01733C8.19645 5.33911 10.2462 4.5 12.6667 4.5C15.0871 4.5 17.1373 5.33911 18.8173 7.01733C20.4973 8.69556 21.336 10.7453 21.3333 13.1667C21.3333 14.1444 21.1778 15.0667 20.8667 15.9333C20.5556 16.8 20.1333 17.5667 19.6 18.2333L28 26.6333L26.1333 28.5ZM12.6667 19.1667C14.3333 19.1667 15.7502 18.5836 16.9173 17.4173C18.0844 16.2511 18.6676 14.8342 18.6667 13.1667C18.6658 11.4991 18.0827 10.0827 16.9173 8.91733C15.752 7.752 14.3351 7.16844 12.6667 7.16667C10.9982 7.16489 9.58178 7.74844 8.41733 8.91733C7.25289 10.0862 6.66933 11.5027 6.66667 13.1667C6.664 14.8307 7.24756 16.2476 8.41733 17.4173C9.58711 18.5871 11.0036 19.1702 12.6667 19.1667Z" fill="#E8E9F5"/>
          </svg>
        </Btn.Toggle>
        <Btn.Toggle onClick={openNav}>
          <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_4_5)">
            <rect x="4" y="0.5" width="24" height="4" rx="2" fill="#E8E9F5"/>
            <rect y="10.5" width="32" height="4" rx="2" fill="#E8E9F5"/>
            <rect x="4" y="20.5" width="24" height="4" rx="2" fill="#E8E9F5"/>
            </g>
            <defs>
            <clipPath id="clip0_4_5">
            <rect width="32" height="24" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
            </defs>
          </svg>
        </Btn.Toggle>
      </div>
    </header>
  )
}

export default NavHead