'use client';
import React from 'react';
import styles from '@/styles/components/elements/btnElement.module.scss';
import Link from 'next/link';

const CTA = ({className, content}) => {
  return (
    <Link href={'/'} className={`${styles.cta} ${styles[className]}`}>
        {content}
    </Link>
  )
}

export default CTA