import styled from 'styled-components'

import ImgCover from '../../assets/images/cover.jpg'

export const HeaderContainer = styled.header`
  background-image: url(${ImgCover});
  background-size: cover;
  background-position: top;

  height: 296px;
  max-width: 90rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding: 4rem;

  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`
