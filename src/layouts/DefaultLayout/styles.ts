import styled from 'styled-components'

export const LayoutContainer = styled.main`
  max-width: 90rem;
  margin: 0 auto;
  padding: 2.5rem 0;
  background: ${(props) => props.theme.background};
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  -webkit-box-shadow: 7px 10px 21px -15px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 7px 10px 21px -15px rgba(0, 0, 0, 0.59);
  box-shadow: 7px 10px 21px -15px rgba(0, 0, 0, 0.59);
`
