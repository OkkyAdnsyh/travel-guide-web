import React from 'react';
import styles from '@/styles/components/elements/navElement.module.scss'

const NavContainer = ({className, children, isOpen}) => {
  return (
    <section className={`${styles['nav_container']} ${styles[className]} ${isOpen && styles.isOpen}`}>
      {children}
    </section>
  )
}

export default NavContainer