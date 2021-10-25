import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 80px;
`

export const Title = styled.h1`
  font-size: 3rem;
  color: var(--title);
  font-weight: bold;
  margin-bottom: 24px;
`

export const Info = styled.p`
  margin-bottom: 64px;

  span {
    color: var(--info);
    font-size: 0.875rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 24px;

    img {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  }
`

export const Text = styled.p`
  font-size: 1.125rem;
  margin-bottom: 80px;
  color: var(--text);
`
