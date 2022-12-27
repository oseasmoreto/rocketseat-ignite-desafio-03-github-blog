import { Item as PostItem } from '../../components/Post/Item'
import { Profile } from '../../components/Profile'
import { SearchForm } from '../../components/SearchForm'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      <div className="list-post">
        <PostItem />
      </div>
    </HomeContainer>
  )
}
