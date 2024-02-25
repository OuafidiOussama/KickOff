import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  matches: [],
  match: null,
  status: "idle",
  error: null,
};

export const getMatches = createAsyncThunk(
  "matches/getMatches",
  async (date, thunkAPI) => {
    try {
      const response = await fetch(
        `https://api.sofascore.com/api/v1/sport/football/scheduled-events/${date}`
      );
      if (!response.ok) {
        throw new Error("Failed to get all matches");
      }

      const data = await response.json();
      return data.events;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const getMatchById = createAsyncThunk(
  "matches/getMatchById",
  async (matchId, thunkAPI) => {
    try {
      const response = await fetch(
        `https://api.sofascore.com/api/v1/event/${matchId}`
      );
      if (!response.ok) {
        throw new Error("Failed to get match");
      }
      
      const data = await response.json();
      return data.event;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const matches = createSlice({
  name: "matches",
  initialState,
  reducers: {
    clearMatch: (state) => {
      state.match = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMatches.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getMatches.fulfilled, (state, action) => {
        state.status = "success";
        state.matches = action.payload;
      
      })
      .addCase(getMatches.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.error;
      })
      .addCase(getMatchById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getMatchById.fulfilled, (state, action) => {
        state.status = "success";
        state.match = action.payload;
      })
      .addCase(getMatchById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.error;
      });
  },
});
export const { clearMatch } = matches.actions;

export default matches.reducer;
