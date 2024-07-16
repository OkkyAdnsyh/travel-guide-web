'use client'

import React, { useState } from 'react'
import NavHead from './NavHead/NavHead'
import NavBody from './NavBody/NavBody'
import useWindowWidth from '@/utils/CustomHook/useWindowWidth'
import SearchBar from './SearchBar/SearchBar'

const Nav = ({username}) => {
  const { screen } = useWindowWidth();
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  const handleNavToggle = () => {
    setNavIsOpen(!navIsOpen);
  }

  const handleSearchToggle = () => {
    setSearchIsOpen(!searchIsOpen);
  }

  return (
    <>
      <NavHead screen={screen} openNav={handleNavToggle} openSearchBar={handleSearchToggle} />
      <NavBody dynamicLink={username == null ? '/auth/sign-in' : `/${username}`} navIsOpen={navIsOpen} />
      <SearchBar isActive={searchIsOpen} />
    </>
  )
}

export default Nav