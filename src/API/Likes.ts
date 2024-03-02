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

  async getLikeList(userId: string) {
    const { data, error } = await supabase
      .from('likes_list')
      .select('video_ids')
      .eq('user_id', userId)
      .limit(1)
      .single()

    if (error) throw new Error(error.message)
    return data
  }

  async createLikeList(userId: string) {
    const { data, error } = await supabase
      .from('likes_list')
      .insert([{ video_ids: [], user_id: userId }])
      .select('video_ids')

    if (error) throw new Error(error.message)
    return data
  }

  async pushLikeList(videoIds: number[], userId: string) {
    const { data, error } = await supabase
      .from('likes_list')
      .update({ video_ids: videoIds })
      .eq('user_id', userId)
      .select('video_ids')

    if (error) throw new Error(error.message)
    return data
  }
}

export default new LikesApi()