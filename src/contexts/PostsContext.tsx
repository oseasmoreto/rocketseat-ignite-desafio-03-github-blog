import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/api'

export interface User {
  name: string
  user: string
  bio: string
  company: string
  photo: string
  followers: number
  url: string
}

export interface Post {
  id: number
  title: string
  date: string
  body: string
  link: string
  comments: number
  user: User
}

interface PostContextType {
  posts: Post[]
  fetchPosts: (query?: string) => Promise<void>
}

interface PostProviderProps {
  children: ReactNode
}

interface GitHubType {
  id: number
  title: string
  created_at: string
  body: string
  html_url: string
  comments: number
  user: {
    name: string
    login: string
    company: string
    bio: string
    avatar_url: string
    followers: number
    html_url: string
  }
}

export const PostsContext = createContext({} as PostContextType)

export function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchPosts = useCallback(async (query?: string) => {
    const querySearch = query ? `${query} ` : ''

    const { data } = await api.get('/search/issues', {
      params: {
        q: `${querySearch}repo:${import.meta.env.VITE_GITHUB_USER}/${
          import.meta.env.VITE_GITHUB_REPO
        }`,
        labels: 'publicacao',
      },
    })

    const postsData: Post[] = []

    data.items.map((item: GitHubType) => {
      const post: Post = {
        id: item.id,
        title: item.title,
        date: item.created_at,
        body: item.body,
        link: item.html_url,
        comments: item.comments,
        user: {
          name: item.user.name,
          user: item.user.login,
          company: item.user.company,
          bio: item.user.bio,
          photo: item.user.avatar_url,
          followers: item.user.followers,
          url: item.user.html_url,
        },
      }

      postsData.push(post)

      return post
    })

    setPosts(postsData)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
