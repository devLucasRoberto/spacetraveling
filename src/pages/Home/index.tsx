import React from 'react'
import Post from '../../components/Post'

import { Container, More } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Post
        title="Como utilizar Hooks"
        text="Pensando em sincronização em vez de ciclos de vida."
        user="Lucas Roberto"
        date="15 Mar 2021"
      />

      <Post
        title="Como utilizar Hooks"
        text="Pensando em sincronização em vez de ciclos de vida."
        user="Lucas Roberto"
        date="15 Mar 2021"
      />

      <Post
        title="Como utilizar Hooks"
        text="Pensando em sincronização em vez de ciclos de vida."
        user="Lucas Roberto"
        date="15 Mar 2021"
      />

      <Post
        title="Como utilizar Hooks"
        text="Pensando em sincronização em vez de ciclos de vida."
        user="Lucas Roberto"
        date="15 Mar 2021"
      />

      <Post
        title="Como utilizar Hooks"
        text="Pensando em sincronização em vez de ciclos de vida."
        user="Lucas Roberto"
        date="15 Mar 2021"
      />

      <More>Carregar mais posts</More>
    </Container>
  )
}

export default Home
