'use client'

import React, { useState } from 'react'
import NavHead from './NavHead/NavHead'
import NavBody from './NavBody/NavBody'
import useWindowWidth from '@/utils/CustomHook/useWindowWidth'

const Nav = ({username}) => {
  const { screen } = useWindowWidth();
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleNavToggle = () => {
    setNavIsOpen(!navIsOpen);
  }

  return (
    <>
      <NavHead screen={screen} openNav={handleNavToggle}/>
      <NavBody dynamicLink={username == null ? '/auth/sign-in' : `/${username}`} navIsOpen={navIsOpen}/>
    </>
  )
}

export default Nav