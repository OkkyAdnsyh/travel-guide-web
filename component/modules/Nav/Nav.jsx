'use client'

import React from 'react'
import NavHead from './NavHead/NavHead'
import NavBody from './NavBody/NavBody'
import useWindowWidth from '@/utils/CustomHook/useWindowWidth'

const Nav = () => {
  const { screen } = useWindowWidth();

  console.log(screen)


  return (
    <>
      <NavHead screen={screen}/>
      <NavBody />
    </>
  )
}

export default Nav