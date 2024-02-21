import { IVideo } from "../interfaces/Video"
import supabase from "../supabase/supabase"

class VideoApi {

  async getVideoPosts() {
    const { data, error } = await supabase
      .from('Video')
      .select('*')

    if (error) throw new Error(error.message)
    return data
  }

  async getVideoPost(id: number) {
    const { data, error } = await supabase
      .from('Video')
      .select('*')
      .eq('id', id)
      .limit(1)
      .single()

    if (error) throw new Error(error.message)
    return data
  }

  async deleteVideoPost(id: number) {
    const { error } = await supabase
      .from('Video')
      .delete()
      .eq('id', id)

    if (error) throw new Error(error.message)
  }

  async createVideoPost({ details, img, title, videoLink }: IVideo, userId: string) {
    const { data, error } = await supabase
      .from('Video')
      .insert([
        { title, videoLink, img, details, user_id: userId },
      ])
      .select()

    if (error) throw new Error(error.message)
    return data
  }

  async updateVideoPost({ details, img, title, videoLink }: IVideo, userId: string, videoId: number) {
    const { data, error } = await supabase
      .from('Video')
      .update({ title, videoLink, img, details, user_id: userId })
      .eq('id', videoId)
      .select()

    if (error) throw new Error(error.message)
    return data
  }
}

export default new VideoApi()