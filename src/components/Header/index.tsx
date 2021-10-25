import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'

import { Container } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="" />
      </Link>
    </Container>
  )
}

export default Header
