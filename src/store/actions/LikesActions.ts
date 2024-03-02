import { createAsyncThunk } from "@reduxjs/toolkit";
import Likes from "../../API/Likes";

interface IPushNewLike {
  videoIds: number[];
  userId: string;
}

export const createUserLikeList = createAsyncThunk(
  'likes/createList',
  async (userId: string) => {
    const response = await Likes.createLikeList(userId) as unknown as {video_ids: number[]}
    return response.video_ids
  }
)

export const setLikesVideos = createAsyncThunk(
  'likes/pushLike',
  async (config: IPushNewLike) => {
    const response = await Likes.pushLikeList(config.videoIds, config.userId) as unknown as {video_ids: number[]}
    return response.video_ids
  }
)

export const getLikeList = createAsyncThunk(
  'likes/getlikes',
  async (userId: string) => {
    const response = await Likes.getLikeList(userId) as unknown as {video_ids: number[]}
    return response.video_ids
  }
)