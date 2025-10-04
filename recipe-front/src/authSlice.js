import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    loggedInUser: null,
    email: "",
    userName: "",
    recipe: [],
    favorites: [],
    userId: "",
  },
  reducers: {
    setLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setName: (state, action) => {
      state.userName = action.payload;
    },
    setRecipe: (state, action) => {
      state.recipe = [...action.payload];
    },
    setFavorites: (state, action) => {
      state.favorites = [...action.payload];
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});
export const {
  setLoggedInUser,
  setEmail,
  setName,
  setRecipe,
  setFavorites,
  setUserId,
} = authSlice.actions;
export const selectLoggedInUser = (state) => state.authSlice.loggedInUser;


export default authSlice.reducer;
