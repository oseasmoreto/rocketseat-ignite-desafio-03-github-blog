import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/api'
import { ProfileContainer } from './styles'

interface User {
  name: string
  user: string
  bio: string
  company: string
  photo: string
  followers: number
  url: string
}

export function Profile() {
  const [user, setUser] = useState<User | null>(null)

  const getUser = useCallback(async (query?: string) => {
    const { data } = await api.get(`/users/${import.meta.env.VITE_GITHUB_USER}`)

    const userData: User = {
      name: data.name,
      user: data.login,
      company: data.company,
      bio: data.bio,
      photo: data.avatar_url,
      followers: data.followers,
      url: data.html_url,
    }

    setUser(userData)
  }, [])

  useEffect(() => {
    getUser()
  }, [getUser])

  if (user === null) return <></>

  return (
    <ProfileContainer>
      <img src={user.photo} alt={user.name} />
      <div className="box-profile">
        <div className="header">
          <h3>{user.name}</h3>
          <a
            href={user.url}
            target="_blank"
            rel="noreferrer"
            className="link-github"
          >
            GITHUB{' '}
            <FontAwesomeIcon fontSize={12} icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <p>{user.bio}</p>
        <ul>
          <li>
            <FontAwesomeIcon fontSize={18} icon={faGithub} /> {user.user}
          </li>
          <li>
            <FontAwesomeIcon fontSize={18} icon={faBuilding} /> {user.company}
          </li>
          <li>
            <FontAwesomeIcon fontSize={18} icon={faUserGroup} />{' '}
            {user.followers} seguidores
          </li>
        </ul>
      </div>
    </ProfileContainer>
  )
}
