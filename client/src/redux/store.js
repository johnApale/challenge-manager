import { configureStore } from "@reduxjs/toolkit";
import challengeReducer from "./features/challenge/challengesSlice";
import userReducer from "./features/user/usersSlice";

export default configureStore({
  reducer: {
    challenge: challengeReducer,
    user: userReducer,
  },
});
