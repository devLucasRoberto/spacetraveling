import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CardPost from '../../components/CardPost'
import { api } from '../../services/api'

import { Container, More } from './styles'

interface Posts {
  id: number
  title: string
  subtitle: string
  createdAt: string
  user: string
  posts: []
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Posts[]>([])

  useEffect(() => {
    api.get<Posts>('post').then(response => setPosts(response.data.posts))
  }, [])

  return (
    <Container>
      {posts.map(posts => {
        const id = posts.id
        const URL = `/posts/${id}`

        return (
          <Link to={URL}>
            <CardPost
              title={posts.title}
              text={posts.subtitle}
              user={posts.user}
              date={new Intl.DateTimeFormat('pt-BR').format(
                new Date(posts.createdAt)
              )}
            />
          </Link>
        )
      })}

      <More>Carregar mais posts</More>
    </Container>
  )
}

export default Home
