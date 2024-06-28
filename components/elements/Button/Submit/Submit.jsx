import React from 'react';
import styles from '@/styles/components/elements/btnElement.module.scss';

const Submit = ({children}) => {
  return (
    <button type='submit' className={`${styles.submit}`}>
        {children}
    </button>
  )
}

export default Submit