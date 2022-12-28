import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;

  .box-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    max-width: 55.25rem;

    padding: 2.5rem;

    color: ${(props) => props.theme.text};
    font-size: 1rem;
    line-height: 1.6;

    p {
      color: ${(props) => props.theme.text};
      font-family: Nunito, sans-serif !important;
      text-align: left;
      font-size: 1rem;
      line-height: 1.6;
      margin: 0.5rem 0;

      a {
        display: inline;
        font-size: 1rem;
        line-height: 1.6;
      }
    }

    code {
      display: block;
      overflow-x: auto;
      background-color: ${(props) => props.theme.post};
      padding: 1rem;
      border-radius: 2px;
      max-width: 100%;
      line-height: 1.6;
    }
  }

  @media (max-width: 1024px) {
    padding: 0 1rem;
  }
`
