import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <p>
        Publicações <span>6 publicações</span>
      </p>
      <form action="">
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
    </SearchFormContainer>
  )
}
