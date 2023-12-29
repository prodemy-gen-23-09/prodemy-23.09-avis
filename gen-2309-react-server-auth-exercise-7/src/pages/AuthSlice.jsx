import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  token: "",
  users: {
    userId: "",
    userType: "",
    name: "",
    email: "",
    isAuthenticated: false,
  },
};

function getStoredAuthState() {
  const token = localStorage.getItem("token");
  const userString = localStorage.getItem("users");

  if (token) {
    
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    return {
      token,
      user: JSON.parse(userString),
    };
  }

  return { ...initialState };
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.users.isAuthenticated = true;
      state.users.name = action.payload.name;
      state.users.email = action.payload.email;
      state.users.userId = action.payload.userId;
      state.users.userType = action.payload.userType;
      state.users.token = action.payload.token;
    },
    logoutSuccess: (state) => {
      state.users.isAuthenticated = false;
      state.users.name = "";
      state.users.email = "";
      state.users.userId = "";
      state.users.userType = "";
      state.users.token = null;
    },
  },
});


export const {loginSuccess,logoutSuccess,} = authSlice.actions;
export default authSlice.reducer;
