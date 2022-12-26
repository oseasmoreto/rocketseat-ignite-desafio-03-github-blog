import { Buildings, GithubLogo, Link, Users } from 'phosphor-react'
import { ProfileContainer } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/oseasmoreto.png" alt="Oséas Moreto" />
      <div className="box-profile">
        <h3>Oséas Moreto</h3>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
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
      </div>
      <a
        href="https://github.com/oseasmoreto"
        target="_blank"
        rel="noreferrer"
        className="link-github"
      >
        GITHUB <Link size={16} />
      </a>
    </ProfileContainer>
  )
}
