import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
          <FontAwesomeIcon fontSize={12} icon={faChevronLeft} /> VOLTAR
        </a>
        <a
          href="https://github.com/oseasmoreto"
          target="_blank"
          rel="noreferrer"
          className="link-github"
        >
          VER NO GITHUB{' '}
          <FontAwesomeIcon fontSize={12} icon={faArrowUpRightFromSquare} />
        </a>
      </div>
      <h3>JavaScript data types and data structures</h3>
      <ul>
        <li>
          <FontAwesomeIcon fontSize={18} icon={faGithub} /> oseasmoreto
        </li>
        <li>
          <FontAwesomeIcon fontSize={18} icon={faCalendarDay} /> web.art group
        </li>
        <li>
          <FontAwesomeIcon fontSize={18} icon={faComment} /> 10 seguidores
        </li>
      </ul>
    </HeaderContainer>
  )
}
