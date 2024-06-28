
import React from 'react';
import NavContainer from '@/components/elements/Nav/NavContainer/NavContainer';
import { InputElements } from '@/components/elements/Input/index';

const SearchBar = ({isOpen, screen}) => {
  return (
    <NavContainer className={['search_bar']} isOpen={isOpen}>
        <InputElements.Search  screen={screen} />
    </NavContainer>
  )
}

export default SearchBar