import React from 'react'
import styles from '@/styles/btn.module.scss'
import Link from 'next/link'

const CTA = ({type, content, href}) => {
  return (
    <Link href={href} className={`${styles.CTA} ${styles[`CTA_${type}`]}`}>
        {content}
    </Link>
  )
}

export default CTA