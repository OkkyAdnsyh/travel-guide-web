import React from 'react';
import styles from '@/styles/components/elements/navElement.module.scss';
import NavContainer from '../NavContainer/NavContainer';
import Link from 'next/link';

const NavLink = ({isOpen}) => {
  return(
    <NavContainer className={'link_container_mobile'} isOpen={isOpen}>
      <ul className={styles['link_item_container']}>
        <li className={styles['link_item']}>
          <Link href={'/'}>
            Destinations
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 2C17.5 1.17157 16.8284 0.499997 16 0.499997H2.5C1.67158 0.499997 1 1.17157 1 2C1 2.82842 1.67158 3.5 2.5 3.5H14.5V15.5C14.5 16.3284 15.1716 17 16 17C16.8284 17 17.5 16.3284 17.5 15.5V2ZM2.56066 17.5607L17.0607 3.06066L14.9393 0.939337L0.43934 15.4393L2.56066 17.5607Z" fill="#E8E9F5"/>
            </svg>
          </Link>
        </li>
        <li className={styles['link_item']}>
          <Link href={'/'}>
            Attractions
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 2C17.5 1.17157 16.8284 0.499997 16 0.499997H2.5C1.67158 0.499997 1 1.17157 1 2C1 2.82842 1.67158 3.5 2.5 3.5H14.5V15.5C14.5 16.3284 15.1716 17 16 17C16.8284 17 17.5 16.3284 17.5 15.5V2ZM2.56066 17.5607L17.0607 3.06066L14.9393 0.939337L0.43934 15.4393L2.56066 17.5607Z" fill="#E8E9F5"/>
            </svg>
          </Link>
        </li>
        <li className={styles['link_item']}>
          <Link href={'/'}>
            Travel Planner
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 2C17.5 1.17157 16.8284 0.499997 16 0.499997H2.5C1.67158 0.499997 1 1.17157 1 2C1 2.82842 1.67158 3.5 2.5 3.5H14.5V15.5C14.5 16.3284 15.1716 17 16 17C16.8284 17 17.5 16.3284 17.5 15.5V2ZM2.56066 17.5607L17.0607 3.06066L14.9393 0.939337L0.43934 15.4393L2.56066 17.5607Z" fill="#E8E9F5"/>
            </svg>
          </Link>
        </li>
        <li className={styles['link_item']}>
          <Link href={'/'}>
            Knowledges
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 2C17.5 1.17157 16.8284 0.499997 16 0.499997H2.5C1.67158 0.499997 1 1.17157 1 2C1 2.82842 1.67158 3.5 2.5 3.5H14.5V15.5C14.5 16.3284 15.1716 17 16 17C16.8284 17 17.5 16.3284 17.5 15.5V2ZM2.56066 17.5607L17.0607 3.06066L14.9393 0.939337L0.43934 15.4393L2.56066 17.5607Z" fill="#E8E9F5"/>
            </svg>
          </Link>
        </li>
      </ul>
    </NavContainer>
  )
}

export default NavLink