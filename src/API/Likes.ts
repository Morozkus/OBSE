import supabase from "../supabase/supabase"

class LikesApi {
  async getLikesVideos(userId: string) {
    const { data, error } = await supabase
      .from('likes')
      .select(`
        id,
        Video (id, title, videoLink, img, details)
        `)
      .eq('user_id', userId)
      .single()

    if (error) throw new Error(error.message)
    return data
  }

  async postLikeVideo(videoId: number, userId: string) {
    const { data, error } = await supabase
      .from('likes')
      .insert([
        { video_id: videoId, user_id: userId },
      ])
      .select()

    if (error) throw new Error(error.message)
    return data
  }

  async deleteLikeVideo(likeId: number) {
    const { error } = await supabase
      .from('likes')
      .delete()
      .eq('id', likeId)

    if (error) throw new Error(error.message)
  }
}

export default new LikesApi()