import { useContext, useEffect } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useParams } from 'react-router-dom'
import { Header as PostHeader } from '../../components/Post/Header'
import { PostsContext } from '../../contexts/PostsContext'
import { PostContainer } from './styles'

export function Post() {
  const { id } = useParams()
  const { findPost, post } = useContext(PostsContext)

  useEffect(() => {
    findPost(parseInt(id ?? ''))
  }, [findPost, id])

  if (post === null) return <></>
  return (
    <PostContainer>
      <PostHeader post={post} />
      <div className="box-content">
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>
    </PostContainer>
  )
}
