import { createSlice } from "@reduxjs/toolkit";
import { createUserLikeList, getLikeList, setLikesVideos } from "../actions/LikesActions";

interface LikeState {
  isLoading: boolean;
  likeList: number[];
}

const initialState: LikeState = {
  isLoading: false,
  likeList: []
}

export const userSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getLikeList.pending, (state) => {
        state.isLoading = true
      })

      .addCase(getLikeList.fulfilled, (state, action) => {
        state.likeList = action.payload
        state.isLoading = false
      })

      .addCase(setLikesVideos.pending, (state) => {
        state.isLoading = true
      })

      .addCase(setLikesVideos.fulfilled, (state, action) => {
        state.likeList = action.payload
        state.isLoading = false
      })

      .addCase(createUserLikeList.pending, (state) => {
        state.isLoading = true
      })

      .addCase(createUserLikeList.fulfilled, (state, action) => {
        state.likeList = action.payload
        state.isLoading = false
      })
  },
})


export default userSlice.reducer