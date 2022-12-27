import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  height: 100%;

  .list-post {
    display: flex;
    width: 100%;
    max-width: 55.25rem;
  }

  @media (max-width: 1024px) {
    padding: 0 1rem;
  }
`
