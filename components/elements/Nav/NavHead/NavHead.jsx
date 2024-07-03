'use client';
import React from 'react';
import NavContainer from '../NavContainer/NavContainer';
import Link from 'next/link';
import Image from 'next/image';
import { Assets } from '@/components/elements/Assets/index';
import styles from '@/styles/components/elements/navElement.module.scss';
import { Button } from '@/components/elements/Button/index';
import { InputElements } from '@/components/elements/Input/index';

const NavHead = ({screen, onSearchClick, onToggleClick}) => {
  if(screen === 'mobile') return (
    <NavContainer className={'head_mobile'}>
        <Link
            href={'/'}
        >
            <Image
                src={Assets.logo}
                alt='logo'
            />
        </Link>
        <div className={styles['head_btn_group']}>
            <button type='button' className={styles['head_btn']} onClick={onSearchClick}>
                <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.3 37.25L23.275 26.225C22.4 26.925 21.3938 27.4792 20.2563 27.8875C19.1188 28.2958 17.9083 28.5 16.625 28.5C13.4458 28.5 10.7555 27.3987 8.554 25.196C6.3525 22.9933 5.25117 20.303 5.25 17.125C5.24883 13.947 6.35017 11.2567 8.554 9.054C10.7578 6.85133 13.4482 5.75 16.625 5.75C19.8018 5.75 22.4928 6.85133 24.6978 9.054C26.9028 11.2567 28.0035 13.947 28 17.125C28 18.4083 27.7958 19.6187 27.3875 20.7562C26.9792 21.8937 26.425 22.9 25.725 23.775L36.75 34.8L34.3 37.25ZM16.625 25C18.8125 25 20.6722 24.2347 22.204 22.704C23.7358 21.1733 24.5012 19.3137 24.5 17.125C24.4988 14.9363 23.7335 13.0773 22.204 11.5478C20.6745 10.0183 18.8148 9.25233 16.625 9.25C14.4352 9.24767 12.5761 10.0136 11.0478 11.5478C9.51942 13.0819 8.7535 14.941 8.75 17.125C8.7465 19.309 9.51242 21.1687 11.0478 22.704C12.5831 24.2393 14.4422 25.0047 16.625 25Z" fill="#E8E9F5"/>
                </svg>
            </button>
            <Button.CTA className='main' content='Sign In' />
            <button type='button' className={styles['head_btn']} onClick={onToggleClick}>
                <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="0.5" width="24" height="4" rx="2" fill="#E8E9F5"/>
                    <rect y="10.5" width="32" height="4" rx="2" fill="#E8E9F5"/>
                    <rect x="4" y="20.5" width="24" height="4" rx="2" fill="#E8E9F5"/>
                </svg>
            </button>
        </div>
    </NavContainer>
  )
  if(screen === 'desktop') return (
    <NavContainer className={'head_desktop'}>
        <Link
            href={'/'}
        >
            <Image
                src={Assets.logo}
                alt='logo'
            />
        </Link>
        <div className={styles['head_btn_group']}>
            <InputElements.Search screen={screen}/>
            <Button.CTA className='main' content='Sign In' />
            <button type='button' className={styles['head_btn']} onClick={onToggleClick}>
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
            </button>
        </div>
    </NavContainer>
  )
}

export default NavHead