import { createAsyncThunk } from "@reduxjs/toolkit";
import Video from "../../API/Video";
import { IVideo } from "../../interfaces/Video";

interface ICreateVideo {
  videoInfo: IVideo,
  userId: string
}

interface IUpdateVideo {
  videoInfo: IVideo,
  id: number
}

export const getAllVideos = createAsyncThunk(
  'videos/getAll',
  async () => {
    const response = await Video.getVideoPosts()
    return response
  }
)

export const getArrayByIdVideos = createAsyncThunk(
  'videos/getArray',
  async (ids: number[]) => {
    const response = await Video.getVideoPostArray(ids)
    return response
  }
)

export const getIdVideo = createAsyncThunk(
  'videos/getId',
  async (id: number) => {
    const response = await Video.getVideoPost(id)
    return response
  }
)

export const createVideo = createAsyncThunk(
  'videos/create',
  async (config: ICreateVideo) => {
    const response = await Video.createVideoPost(config.videoInfo, config.userId)
    return response
  }
)

export const updateVideo = createAsyncThunk(
  'videos/update',
  async (config: IUpdateVideo) => {
    const response = await Video.updateVideoPost(config.videoInfo, config.id)
    return response
  }
)

export const deleteVideo = createAsyncThunk(
  'videos/delete',
  async (id: number) => {
    await Video.deleteVideoPost(id)
    return id
  }
)