import React from 'react'
import styles from '@/styles/input.module.scss'

const Submit = ({children}) => {
  return (
    <button type="submit">
        {children}
    </button>
  )
}

export default Submit