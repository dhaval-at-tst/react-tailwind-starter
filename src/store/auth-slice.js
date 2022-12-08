const { createSlice } = require("@reduxjs/toolkit");

const initialAuthState = {
  isAuthenticated: Boolean(localStorage.getItem("authToken")),
  authToken: localStorage.getItem("authToken"),
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    signIn: (state, action) => {
      state.isAuthenticated = true;
      state.authToken = action.payload;
    },
    signOut: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    updateBalance: (state, action) => {
      state.user.balance = action.payload;
    },
    updateProfile: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
