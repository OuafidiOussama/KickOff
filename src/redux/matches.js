import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
  matches: [],
  status: "idle",
  error: null,
};

export const getMatches = createAsyncThunk( 
  "matches/getMatches",
  async (date, thunkAPI) => {
    try {
      const response = await axios.get(`https://api.sofascore.com/api/v1/sport/football/scheduled-events/${date}`)
      if (!response.ok) {
        throw new Error("Failed to get matches");
      }
      
      const data = await response.json();
      return data.events;
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
      state.oneMatche = null;
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
  },
});
export const { clearMatch } = matches.actions;

export default matches.reducer;
