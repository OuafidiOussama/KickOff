import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import matches from "./redux/matches";
import leagues from "./redux/leagues";
import players from "./redux/players";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

const store = configureStore({
  reducer: {
    Matches: matches,
    Leagues: leagues,
    Players: players
  },
  middleware,
});

export default store;
