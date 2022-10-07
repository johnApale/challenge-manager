import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import challengeService from "./challengeService";

// Get challenge from localStorage
const challenge = JSON.parse(localStorage.getItem("challenge"));

const initialState = {
  challenge: challenge ? challenge : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create a new challenge
export const create = createAsyncThunk(
  "challenge/create",
  async (challenge, thunkAPI) => {
    try {
      return await challengeService.create(challenge);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get challenge
export const getByID = createAsyncThunk(
  "challenge/getByID",
  async (challenge, thunkAPI) => {
    try {
      return await challengeService.getByID(challenge);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Updates the challenge to add participant
export const addParticipant = createAsyncThunk(
  "challenge/addUser",
  async (challenge, thunkAPI) => {
    try {
      return await challengeService.addParticipant(challenge);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const challengeSlice = createSlice({
  name: "challenge",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(create.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(create.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.challenge = action.payload;
      })
      .addCase(create.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(getByID.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getByID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.challenge = action.payload;
      })
      .addCase(getByID.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(addParticipant.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addParticipant.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.challenge = action.payload;
      })
      .addCase(addParticipant.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = challengeSlice.actions;
export default challengeSlice.reducer;
