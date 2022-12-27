import {
  ArrowArcLeft,
  ArrowLeft,
  Buildings,
  GithubLogo,
  Link,
  Users,
} from 'phosphor-react'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div className="header">
        <a
          href="https://github.com/oseasmoreto"
          target="_blank"
          rel="noreferrer"
          className="link-back"
        >
          <ArrowLeft size={16} /> VOLTAR
        </a>
        <a
          href="https://github.com/oseasmoreto"
          target="_blank"
          rel="noreferrer"
          className="link-github"
        >
          VER NO GITHUB <Link size={16} />
        </a>
      </div>
      <h3>JavaScript data types and data structures</h3>
      <ul>
        <li>
          <GithubLogo size={18} /> oseasmoreto
        </li>
        <li>
          <Buildings size={18} /> web.art group
        </li>
        <li>
          <Users size={18} /> 10 seguidores
        </li>
      </ul>
    </HeaderContainer>
  )
}
