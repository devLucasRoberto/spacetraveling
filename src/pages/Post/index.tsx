import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import bannerImg from '../../assets/banner.png'
import InfoPost from '../../components/InfoPost'
import { api } from '../../services/api'

import { Container, Content } from './styles'

interface Post {
  id: number
  title: string
  text: string
  createdAt: string
  time: string
  user: string
  posts: []
}

interface postId {
  postId: string
}

const Post: React.FC = () => {
  const [post, setPost] = useState<Post[]>([])

  useEffect(() => {
    api.get<Post>('post').then(response => setPost(response.data.posts))
  }, [])

  const { postId } = useParams<postId>()

  return (
    <Container>
      <img src={bannerImg} alt="" />
      <Content>
        {post
          .filter(post => post.id === Number(postId))
          .map(post => {
            const time = post.time
            const timeF = `${time} min`

            return (
              <InfoPost
                title={post.title}
                date={new Intl.DateTimeFormat('pt-BR').format(
                  new Date(post.createdAt)
                )}
                user={post.user}
                time={timeF}
                text={post.text}
              />
            )
          })}
      </Content>
    </Container>
  )
}

export default Post
