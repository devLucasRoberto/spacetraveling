import React from 'react'
import dateImg from '../../assets/calendar.svg'
import useImg from '../../assets/user.svg'
import timeImg from '../../assets/clock.svg'

import { Container, Title, Info, Text } from './styles'

interface InfoPostProps {
  title: string
  date: string
  user: string
  time: string
  text: string
}

const InfoPost: React.FC<InfoPostProps> = ({
  title,
  date,
  user,
  time,
  text
}) => {
  return (
    <Container>
      <Title>{title}</Title>

      <Info>
        <span>
          <img src={dateImg} alt="" />
          <p>{date}</p>
        </span>
        <span>
          <img src={useImg} alt="" />
          <p>{user}</p>
        </span>
        <span>
          <img src={timeImg} alt="" />
          <p>{time}</p>
        </span>
      </Info>

      <Text>{text}</Text>
    </Container>
  )
}

export default InfoPost
