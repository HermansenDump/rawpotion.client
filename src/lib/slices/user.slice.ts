import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { AuthService } from "../services/AuthService";
import { User } from "oidc-client";

export const addUser = createAsyncThunk(
  "auth/addCurrentUser",
  async (user: User, thunkApi) => {
    try {
      if (!user) {
        return thunkApi.rejectWithValue({ error: "failed to fetch user" });
      }

      return user;
    } catch (error) {
      return thunkApi.rejectWithValue({ error: error.message });
    }
  }
);

export interface AuthState {
  user?: User;
  error?: string;
}

const initialState: AuthState = {
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<AuthState>) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.user = undefined;
        state.error = undefined;
      })
      .addCase(addUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const selectUser = createSelector(
  (state: AuthState) => ({
    user: state.user,
    error: state.error,
  }),
  (state) => state
);

export default authSlice.reducer;
