import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import matches from "./redux/matches";
import leagues from "./redux/leagues";
import players from "./redux/players";
import favorites from "./redux/favorites";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

const store = configureStore({
  reducer: {
    Matches: matches,
    Leagues: leagues,
    Players: players,
    Favorites: favorites
  },
  middleware,
});

export default store;
