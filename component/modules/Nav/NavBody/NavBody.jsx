import Link from 'next/link'
import React from 'react'
import styles from '@/styles/nav.module.scss'

const NavBody = ({dynamicLink, navIsOpen}) => {
  return (
    <nav className={`${styles['body_wrapper']} ${navIsOpen ? styles.isOpen : ''}`}>
      <ul className={styles['body_container']}>
        <li className={styles['link_item']}>
          <Link className={styles.link} href={'/provinces'}>
            Provinces
          </Link>
        </li>
        <li className={styles['link_item']}>
          <Link className={styles.link} href={'/attractions'}>
            Attractions
          </Link>
        </li>
        <li className={styles['link_item']}>
          <Link className={styles.link} href={'/Events'}>
            Events
          </Link>
        </li>
        <li className={styles['link_item']}>
          <Link className={styles.link} href={dynamicLink}>
            My Itenary
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBody