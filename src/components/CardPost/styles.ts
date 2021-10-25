import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-bottom: 48px;
  margin-top: 20px;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.7);
  }

  a {
    text-decoration: none;
  }
`

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
  color: var(--title);
  margin-bottom: 8px;
`

export const P = styled.p`
  font-size: 1.125rem;
  color: var(--text);
  margin-bottom: 24px;
`

export const Info = styled.div`
  font-size: 0.875rem;
  color: var(--info);

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    img {
      width: 15px;
      height: 15px;
      margin-right: 10px;
    }

    &:first-child {
      margin-right: 24px;
    }
  }
`
