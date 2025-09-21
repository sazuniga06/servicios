import { ref, type Ref } from "vue"
import Ipost from "../interfaces/Ipost"

type Post = Ipost


class PostService {
  private posts: Ref<Post[]>

  constructor() {
    this.posts = ref<Post[]>([])
  }

  getPosts() {
    return this.posts
  }

  async fetchAll() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const data: Post[] = await response.json()
      this.posts.value = data               // ← aquí está la magia
    } catch (error) {
      console.error("Error fetching posts:", error)
      this.posts.value = []                 // fallback
    }
  }
}

export default PostService
