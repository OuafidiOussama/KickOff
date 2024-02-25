import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  leagues: [],
  status: "idle",
  error: null,
};

export const getLeagues = createAsyncThunk(
  "leagues/getLeagues",
  async ( thunkAPI) => {
    try {
      const response = await fetch(
        `https://api.sofascore.com/api/v1/config/top-unique-tournaments/MA/football`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch Leagues");
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
const leagues = createSlice({
  name: "leagues",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLeagues.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getLeagues.fulfilled, (state, action) => {
        state.status = "success";
        state.leagues = action.payload;
      
      })
      .addCase(getLeagues.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.error;
      });
  },
});

export default leagues.reducer;
