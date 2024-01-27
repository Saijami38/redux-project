import { configureStore } from "@reduxjs/toolkit";
import UserSclice from "./slices/UserSlices";

const store = configureStore({
  reducer: {
    users: UserSclice.reducer,
  },
});

export default store;
