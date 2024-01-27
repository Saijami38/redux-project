import { createSlice } from "@reduxjs/toolkit";

const UserSclice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {},
    removeUser(state, action) {},
    clearAllUsers(state, action) {},
  },
});

export default UserSclice;
