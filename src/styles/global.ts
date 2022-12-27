import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
}
body {
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  -webkit-font-smoothing: antialiased;
}
body, input, textarea, button {
  font: 400 1rem Nunito, sans-serif;
}

a {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: auto;

  font-size: 0.75rem;
  text-decoration: none;
  color: ${(props) => props.theme.blue};

  transition: all 0.2s;

  &:hover {
    text-decoration: underline;
  }
}

.no-hover {
  &:hover {
    text-decoration: none;
  }
}
`
