import { NavLink } from 'react-router-dom'
import { Post } from '../../../contexts/PostsContext'
import { ItemContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface ItemProps {
  post: Post
}

export function Item({ post }: ItemProps) {
  return (
    <NavLink className="no-hover" to={`/post/${post.number}`}>
      <ItemContainer>
        <div className="header">
          <h4>{post.title}</h4>
          <span>
            {formatDistanceToNow(new Date(post.date), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </div>
        <p>{post.body}</p>
      </ItemContainer>
    </NavLink>
  )
}
