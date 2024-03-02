import { IVideo, IVideoFromSB } from "../interfaces/Video"
import supabase from "../supabase/supabase"

class VideoApi {

  async getVideoPosts() {
    const { data, error } = await supabase
      .from('Video')
      .select('*')

    if (error) throw new Error(error.message)
    return data as IVideoFromSB[]
  }

  async getVideoPost(id: number) {
    const { data, error } = await supabase
      .from('Video')
      .select('*')
      .eq('id', id)
      .limit(1)
      .single()

    if (error) throw new Error(error.message)
    return data as IVideoFromSB
  }

  async getVideoPostArray(ids: number[]) {
    const { data, error } = await supabase.rpc('get_like_videos', { ids })

    if (error) throw new Error(error.message)
    return data as IVideoFromSB[]
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
    return data as unknown as IVideoFromSB
  }

  async updateVideoPost({ details, img, title, videoLink }: IVideo, videoId: number) {
    const { data, error } = await supabase
      .from('Video')
      .update({ title, videoLink, img, details })
      .eq('id', videoId)
      .select()

    if (error) throw new Error(error.message)
    return data as unknown as IVideoFromSB
  }
}

export default new VideoApi()