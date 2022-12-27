import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  display: block;
  width: 100%;
  max-width: 55.25rem;
  padding-top: 1.5rem;

  p {
    display: flex;
    width: 100%;
    justify-content: space-between;

    font-size: 1.125rem;
    line-height: 1.6;
    color: ${(props) => props.theme.subtitle};

    margin-bottom: 0.75rem;

    span {
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${(props) => props.theme.span};
    }
  }

  form {
    input {
      width: 100%;
      height: 50px;

      background: ${(props) => props.theme.input};

      border-radius: 6px;
      border: 1px solid ${(props) => props.theme.border};

      color: ${(props) => props.theme.text};
      font-size: 1rem;

      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme.label};
        font-size: 1rem;
      }
    }
  }
`
