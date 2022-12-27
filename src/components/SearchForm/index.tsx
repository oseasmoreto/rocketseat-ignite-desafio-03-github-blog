import { useContext } from 'react'
import { PostsContext } from '../../contexts/PostsContext'
import { SearchFormContainer } from './styles'

export function SearchForm() {
  const { countPosts } = useContext(PostsContext)
  return (
    <SearchFormContainer>
      <p>
        Publicações{' '}
        <span>
          {countPosts} {countPosts > 1 ? 'publicações' : 'publicação'}
        </span>
      </p>
      <form action="">
        <input
          type="text"
          placeholder="Buscar conteúdo (Pressione Enter para buscar)"
        />
      </form>
    </SearchFormContainer>
  )
}
