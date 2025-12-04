import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserState {
email: string | null;
  name: string | null;
}

const initialState: UserState = {
  email: null,
  name: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    clearUser: (state) => {
      state = null;
      state.email = null;
      state.name = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;