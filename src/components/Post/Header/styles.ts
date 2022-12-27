import styled from 'styled-components'

export const HeaderContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  width: 100%;
  max-width: 55.25rem;
  min-height: 168px;

  padding: 2rem 2.5rem;
  margin-top: -88px;

  background-color: ${(props) => props.theme.profile};
  border-radius: 10px;

  box-shadow: 0 26px 2px 0 rgba(0, 0, 0, 0.2%);

  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .link-back {
      align-self: flex-start;
      justify-content: flex-start;
      font-size: 0.75rem;
    }

    .link-github {
      align-self: flex-end;
      justify-content: flex-end;
      font-size: 0.75rem;
    }
  }

  h3 {
    font-family: Nunito, sans-serif;
    color: ${(props) => props.theme.title};
    font-size: 1.5rem;
    line-height: 1.3;

    padding-top: 1.25rem;
    padding-bottom: 0.5rem;
  }

  ul {
    display: inline-flex;
    list-style: none;
    gap: 1rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${(props) => props.theme.span};
      font-size: 1rem;
      line-height: 1.6;

      svg {
        color: ${(props) => props.theme.label};
      }
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    padding: 2rem 2.5rem;

    ul {
      max-width: 100%;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin-top: 1rem;
    }
  }
`
