import React from 'react';
import styles from '@/styles/components/blocks/banner.module.scss';
import Image from 'next/image';
import { Assets } from '@/components/elements/Assets/index';
import { Button } from '@/components/elements/Button/index';

const Banner = () => {
  return (
    <section className={styles['banner_container']}>
        <article className={styles['banner_title_group']}>
            <h1 className={styles.title}>EXPLORE WONDERFUL INDONESIA</h1>
            <h2 className={styles.subtitle}>38 Provinces, Abundance destinations to choose from</h2>
        </article>
        <section className={styles['img_container']}>
            <Image src={Assets.Banner} alt='banner' />
        </section>
        <p className={styles['banner_paragraph']}>Find out every guides you need, every places you have to visit , or plan your deam adventure</p>
        <section className={styles['btn_group']}>
            <Button.CTA content={'Explore Destinations'} className={'main'} />
            <Button.CTA content={'Plan An Adventure'} className={'sec'} />
        </section>
    </section>
  )
}

export default Banner