import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import matches from "./redux/matches";
import leagues from "./redux/leagues";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

const store = configureStore({
  reducer: {
    Matches: matches,
    Leagues: leagues
  },
  middleware,
});

export default store;
