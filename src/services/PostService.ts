import { ref, type Ref } from "vue"
import type Ipost from "../interfaces/Ipost"

type Post = Ipost

class PostService {
  private posts: Ref<Post[]>
  private post: Ref<Post | null>

  constructor() {
    this.posts = ref<Post[]>([])
    this.post = ref<Post | null>(null)
  }

  getPosts(): Ref<Post[]> {
    return this.posts
  }

  getPost(): Ref<Post | null> {
    return this.post
  }

  async fetchAll(): Promise<void> {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const data: Post[] = await response.json()
      this.posts.value = data
    } catch (error) {
      console.error("Error fetching posts:", error)
      this.posts.value = []
    }
  }

  async fetchById(id: string | string[]): Promise<void> {
    try {
      const rawId = Array.isArray(id) ? id[0] : id
      const url = `https://jsonplaceholder.typicode.com/posts/${encodeURIComponent(rawId)}`
      const response = await fetch(url)
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const data: Post = await response.json()
      this.post.value = data
    } catch (error) {
      console.error("Error fetching post by id:", error)
      this.post.value = null
    }
  }
}

export default PostService
