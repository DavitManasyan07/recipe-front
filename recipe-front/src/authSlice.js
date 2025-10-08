import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  recipes: [],
  favorites: [],
}

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.favorites = [];
      state.recipes = [];
      localStorage.removeItem("token")
    },
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
  },
});
export const {
  setCredentials,
  logout,
  setRecipes,
  setFavorites,
} = authSlice.actions;
export const selectLoggedInUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;
