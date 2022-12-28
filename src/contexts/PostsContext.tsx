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
  number: number
  title: string
  date: string
  body: string
  link: string
  comments: number
  user: User
}

interface PostContextType {
  posts: Post[]
  post: Post | null
  countPosts: number
  fetchPosts: (query?: string) => Promise<void>
  findPost: (id: number) => Promise<void>
}

interface PostProviderProps {
  children: ReactNode
}

interface GitHubType {
  id: number
  number: number
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
  const [post, setPost] = useState<Post | null>(null)
  const [countPosts, setCountPosts] = useState<number>(0)

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
        number: item.number,
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
    setCountPosts(data.total_count)
  }, [])

  const findPost = useCallback(async (id: number) => {
    const url = `repos/${import.meta.env.VITE_GITHUB_USER}/${
      import.meta.env.VITE_GITHUB_REPO
    }/issues/${id}`

    const { data } = await api.get(url)

    const postsData: Post | null = {
      id: data.id,
      number: data.number,
      title: data.title,
      date: data.created_at,
      body: data.body,
      link: data.html_url,
      comments: data.comments,
      user: {
        name: data.user.name,
        user: data.user.login,
        company: data.user.company,
        bio: data.user.bio,
        photo: data.user.avatar_url,
        followers: data.user.followers,
        url: data.user.html_url,
      },
    }

    setPost(postsData)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContext.Provider
      value={{ posts, post, countPosts, fetchPosts, findPost }}
    >
      {children}
    </PostsContext.Provider>
  )
}
