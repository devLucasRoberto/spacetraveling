import React from 'react'
import userImg from '../../assets/user.svg'
import dateImg from '../../assets/calendar.svg'

import { Container, Title, P, Info } from './styles'

interface Props {
  title: string
  text: string
  date: string
  user: string
}

const CardPost: React.FC<Props> = ({ title, text, date, user }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <P>{text}</P>

      <Info>
        <span>
          <img src={dateImg} alt="" />
          {date}
        </span>
        <span>
          <img src={userImg} alt="" />
          {user}
        </span>
      </Info>
    </Container>
  )
}

export default CardPost
