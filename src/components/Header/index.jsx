import { StyledHeader } from './styles'
import React from 'react'

const Header = ({children}) => {
  return (
    <StyledHeader>
      {children}
    </StyledHeader>
  )
}

export default Header