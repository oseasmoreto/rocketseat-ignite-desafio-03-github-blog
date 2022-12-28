import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { Post } from '../../../contexts/PostsContext'
import { HeaderContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostProps {
  post: Post
}

export function Header({ post }: PostProps) {
  return (
    <HeaderContainer>
      <div className="header">
        <NavLink to="/" className="link-back">
          <FontAwesomeIcon fontSize={12} icon={faChevronLeft} /> VOLTAR
        </NavLink>
        <a
          href={post.link}
          target="_blank"
          rel="noreferrer"
          className="link-github"
        >
          VER NO GITHUB{' '}
          <FontAwesomeIcon fontSize={12} icon={faArrowUpRightFromSquare} />
        </a>
      </div>
      <h3>{post.title}</h3>
      <ul>
        <li>
          <FontAwesomeIcon fontSize={18} icon={faGithub} /> {post.user.user}
        </li>
        <li>
          <FontAwesomeIcon fontSize={18} icon={faCalendarDay} />{' '}
          {formatDistanceToNow(new Date(post.date), {
            addSuffix: true,
            locale: ptBR,
          })}
        </li>
        <li>
          <FontAwesomeIcon fontSize={18} icon={faComment} /> {post.comments}{' '}
          comentários
        </li>
      </ul>
    </HeaderContainer>
  )
}
