import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;

  .box-content {
    display: flex;
    width: 100%;
    max-width: 55.25rem;

    padding: 2.5rem;

    color: ${(props) => props.theme.text};
    font-size: 1rem;
    line-height: 1.6;

    p {
      color: ${(props) => props.theme.text};
      font-size: 1rem;
      line-height: 1.6;
    }
  }

  @media (max-width: 1024px) {
    padding: 0 1rem;
  }
`
