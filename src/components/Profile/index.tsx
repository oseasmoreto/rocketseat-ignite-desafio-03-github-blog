import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileContainer } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/oseasmoreto.png" alt="Oséas Moreto" />
      <div className="box-profile">
        <div className="header">
          <h3>Oséas Moreto</h3>
          <a
            href="https://github.com/oseasmoreto"
            target="_blank"
            rel="noreferrer"
            className="link-github"
          >
            GITHUB{' '}
            <FontAwesomeIcon fontSize={12} icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon fontSize={18} icon={faGithub} /> oseasmoreto
          </li>
          <li>
            <FontAwesomeIcon fontSize={18} icon={faBuilding} /> web.art group
          </li>
          <li>
            <FontAwesomeIcon fontSize={18} icon={faUserGroup} /> 10 seguidores
          </li>
        </ul>
      </div>
    </ProfileContainer>
  )
}
