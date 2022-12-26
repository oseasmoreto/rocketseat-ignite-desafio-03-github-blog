import styled from 'styled-components'

export const ProfileContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  max-width: 55.25rem;
  min-height: 212px;

  padding: 2rem 2.5rem;
  margin-top: -88px;

  background-color: ${(props) => props.theme.profile};
  border-radius: 10px;

  box-shadow: 0 26px 2px 0 rgba(0, 0, 0, 0.2%);

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }

  .link-github {
    align-self: flex-start;
    justify-content: flex-start;
  }

  .box-profile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 148px;

    h3 {
      font-family: Nunito, sans-serif;
      color: ${(props) => props.theme.title};
      font-size: 1.5rem;
      line-height: 1.3;
    }

    p {
      font-family: Nunito, sans-serif;
      color: ${(props) => props.theme.text};
      font-size: 1rem;
      line-height: 1.6;
    }

    ul {
      display: inline-flex;
      list-style: none;
      gap: 1rem;

      li {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        color: ${(props) => props.theme.subtitle};
        font-size: 1rem;
        line-height: 1.6;

        svg {
          color: ${(props) => props.theme.label};
        }
      }
    }
  }
`
