'use client';
import React, { useState } from 'react';
import { NavElements } from '@/components/elements/Nav/index';

const Nav = () => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setSearchIsOpen(!searchIsOpen);
  }

  const handleNavToggle = () => {
    setNavIsOpen(!navIsOpen)
  }
  return (
    <>
        <NavElements.NavHead screen={'mobile'} onSearchClick={handleSearchToggle} onToggleClick={handleNavToggle}/>
        <NavElements.NavHead screen={'desktop'} onToggleClick={handleNavToggle} />
        <NavElements.NavLink screen={'mobile'} isOpen={navIsOpen}/>
        <NavElements.SearchBar isOpen={searchIsOpen} screen={'mobile'} />
    </>
  )
}

export default Nav