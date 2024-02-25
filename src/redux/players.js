import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  players: [],
  status: "idle",
  error: null,
};

export const getPlayers = createAsyncThunk(
  "players/getPlayers",
  async ( thunkAPI) => {
    try {
      const response = await fetch(
        `https://www.footballtransfers.com/en/players/actions/overview/overview`
      );
      if (!response.ok) {
        throw new Error("Failed to get players");
      }
      
      const data = await response.json();
      return data.records;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
const players = createSlice({
  name: "players",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlayers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getPlayers.fulfilled, (state, action) => {
        state.status = "success";
        state.players = action.payload;
      })
      .addCase(getPlayers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.error;
      })
     
  },
});

export default players.reducer;
