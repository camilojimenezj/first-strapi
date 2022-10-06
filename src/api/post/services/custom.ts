
import { Post, Response } from "../../../../types"

export default async function formatPosts(): Promise<Response[]> {

  const data: Post[] = await strapi.query('api::post.post').findMany({ populate: true })

  const result: Response[] = data.map(post => {
    const { id, title, content, publishedAt, media, user } = post
    const url = media ? media[0].formats.large.url : ''
    return {
      id,
      title, content,
      publishedAt,
      media: url,
      user: user.username
    }
  })

  return result

}
