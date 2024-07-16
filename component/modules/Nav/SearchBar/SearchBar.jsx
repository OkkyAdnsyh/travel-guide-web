import React from 'react'
import styles from '@/styles/nav.module.scss'
import { FormControl } from '../../FormControl'
const SearchBar = ({isActive}) => {
  return (
    <>
        <section className={`${styles['searchbar_container']} ${isActive && styles.isActive}`}>
            <FormControl.SearchForm />
        </section>
    </>
  )
}

export default SearchBar