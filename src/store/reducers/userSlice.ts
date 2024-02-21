import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  isAuth: boolean;
  email: string;
  id: string;
}

const initialState: UserState = {
  isAuth: false,
  email: '',
  id: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<UserState>) {
      state.isAuth = action.payload.isAuth
      state.email = action.payload.email
      state.id = action.payload.id
    },

    emptyUserInfo(state) {
      state.isAuth = initialState.isAuth
      state.email = initialState.email
      state.id = initialState.id
    }
  }
})


export const { emptyUserInfo, setUserInfo } = userSlice.actions

export default userSlice.reducer