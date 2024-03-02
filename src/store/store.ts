import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import userSlice from './reducers/userSlice'
import VideoSlice from './reducers/VideoSlice'
import LikesSlice from './reducers/LikesSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    video: VideoSlice,
    likes: LikesSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)