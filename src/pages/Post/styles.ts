import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  height: 100%;

  @media (max-width: 1024px) {
    padding: 0 1rem;
  }
`
