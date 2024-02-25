import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import matches from "./redux/matches";

const middleware = [...getDefaultMiddleware({
  serializableCheck: false, 
})];

const store = configureStore({
  reducer: {
    Matches: matches
  },
  middleware,
});

export default store;