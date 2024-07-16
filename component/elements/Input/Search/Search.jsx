'use client'
import React, { useState } from 'react'
import styles from '@/styles/input.module.scss'

const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  
  const handleValueChange = (e) => {
    const { value } = e.target
    setSearchValue(value)
  }
  return (
    <input className={styles.search} type="search" name='search' placeholder='Search' value={searchValue} onChange={handleValueChange} />
  )
}

export default Search