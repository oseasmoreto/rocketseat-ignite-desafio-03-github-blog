import { Header as PostHeader } from '../../components/Post/Header'
import { PostContainer } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostHeader />
      <div className="box-content">teste</div>
    </PostContainer>
  )
}
