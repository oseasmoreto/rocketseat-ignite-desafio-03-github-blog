import { useContext } from 'react'
import { Item as PostItem } from '../../components/Post/Item'
import { Profile } from '../../components/Profile'
import { SearchForm } from '../../components/SearchForm'
import { PostsContext } from '../../contexts/PostsContext'
import { HomeContainer } from './styles'

export function Home() {
  const { posts } = useContext(PostsContext)
  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      <div className="list-post">
        {posts.map((post) => {
          return <PostItem post={post} key={post.id} />
        })}
      </div>
    </HomeContainer>
  )
}
