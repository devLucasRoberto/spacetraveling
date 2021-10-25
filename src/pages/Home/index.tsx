import React from 'react'
import CardPost from '../../components/CardPost'

import { Container, More } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <CardPost
        title="Como utilizar Hooks"
        text="Pensando em sincronização em vez de ciclos de vida."
        user="Lucas Roberto"
        date="15 Mar 2021"
      />

      <CardPost
        title="Como utilizar Hooks"
        text="Pensando em sincronização em vez de ciclos de vida."
        user="Lucas Roberto"
        date="15 Mar 2021"
      />

      <CardPost
        title="Como utilizar Hooks"
        text="Pensando em sincronização em vez de ciclos de vida."
        user="Lucas Roberto"
        date="15 Mar 2021"
      />

      <CardPost
        title="Como utilizar Hooks"
        text="Pensando em sincronização em vez de ciclos de vida."
        user="Lucas Roberto"
        date="15 Mar 2021"
      />

      <CardPost
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
