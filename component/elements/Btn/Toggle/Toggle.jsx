import React from 'react'
import styles from '@/styles/btn.module.scss'

const Toggle = ({onClick, children}) => {
  return (
    <button type='button' className={styles.toggle} onClick={onClick}>
      {children}
    </button>
  )
}

export default Toggle