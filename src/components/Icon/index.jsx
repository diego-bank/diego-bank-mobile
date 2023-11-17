import { StyledIcon } from './styles'
import React from 'react'

const Icon = ({color = '#121433', children}) => {
  return (
    <StyledIcon color={color}>
      {children}
    </StyledIcon>
  )
}

export default Icon