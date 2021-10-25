import React from 'react'
import bannerImg from '../../assets/banner.png'

import { Container, Content } from './styles'

const Posts: React.FC = () => {
  return (
    <Container>
      <img src={bannerImg} alt="" />

      <Content>
        <h1>Hello world</h1>
      </Content>
    </Container>
  )
}

export default Posts
