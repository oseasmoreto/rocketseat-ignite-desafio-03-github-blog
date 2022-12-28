import { useContext } from 'react'
import { PostsContext } from '../../contexts/PostsContext'
import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchPosts, countPosts } = useContext(PostsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInputs) {
    await fetchPosts(data.query)
  }
  return (
    <SearchFormContainer>
      <p>
        Publicações{' '}
        <span>
          {countPosts} {countPosts > 1 ? 'publicações' : 'publicação'}
        </span>
      </p>
      <form action="" onSubmit={handleSubmit(handleSearchPosts)}>
        <input
          type="text"
          placeholder="Buscar conteúdo (Pressione Enter para buscar)"
          {...register('query')}
          disabled={isSubmitting}
        />
      </form>
    </SearchFormContainer>
  )
}
