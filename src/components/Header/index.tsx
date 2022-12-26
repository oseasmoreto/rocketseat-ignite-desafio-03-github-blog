import { HeaderContainer } from './styles'

import ImgLogo from '../../assets/images/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={ImgLogo} alt="GitHub Blog" />
    </HeaderContainer>
  )
}
