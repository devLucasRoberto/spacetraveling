import React from 'react'
import logoImg from '../../assets/logo.svg'

import { Container } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="" />
    </Container>
  )
}

export default Header
