import { NavLink } from 'react-router-dom'
import { ItemContainer } from './styles'

export function Item() {
  return (
    <NavLink className="no-hover" to="/post/1">
      <ItemContainer>
        <div className="header">
          <h4>JavaScript data types and data structures</h4>
          <span>Há 1 dia</span>
        </div>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in
        </p>
      </ItemContainer>
    </NavLink>
  )
}
