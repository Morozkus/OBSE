import { createSlice } from "@reduxjs/toolkit";
import { createVideo, deleteVideo, getAllVideos, getArrayByIdVideos, getIdVideo, updateVideo } from "../actions/VideoActions";
import { IVideoFromSB } from "../../interfaces/Video";

interface VideoState {
  videos: IVideoFromSB[];
  videoById: IVideoFromSB | undefined;
  likesVideoArray: IVideoFromSB[];
  isLoading: boolean;
}

const initialState: VideoState = {
  videos: [],
  isLoading: false,
  videoById: undefined,
  likesVideoArray: []
}

export const VideoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllVideos.pending, (state) => {
        state.isLoading = true
      })

      .addCase(getAllVideos.fulfilled, (state, action) => {
        state.videos = action.payload
        state.isLoading = false
      })

      .addCase(getArrayByIdVideos.pending, (state) => {
        state.isLoading = true
      })

      .addCase(getArrayByIdVideos.fulfilled, (state, action) => {
        state.likesVideoArray = action.payload
        state.isLoading = false
      })

      .addCase(getIdVideo.pending, (state) => {
        state.isLoading = true
      })

      .addCase(getIdVideo.fulfilled, (state, action) => {
        state.videoById = action.payload
        state.isLoading = false
      })

      .addCase(createVideo.pending, (state) => {
        state.isLoading = true
      })

      .addCase(createVideo.fulfilled, (state, action) => {
        state.videos.push(action.payload)
        state.isLoading = false
      })

      .addCase(updateVideo.pending, (state) => {
        state.isLoading = true
      })

      .addCase(updateVideo.fulfilled, (state) => {
        state.isLoading = false
      })

      .addCase(deleteVideo.pending, (state) => {
        state.isLoading = true
      })

      .addCase(deleteVideo.fulfilled, (state, action) => {
        state.videos.filter((el) => el.id !== action.payload)
        state.isLoading = false
      })
  },
})

export default VideoSlice.reducer