import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { User, api } from "generated/graphql";
import { api as apiExtended } from "generated/graphqlExtended";

export interface AuthStateProps {
  user?: User;
}

const initialState: AuthStateProps = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      const user = action.payload;
      state.user = user;
    },
    resetUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.Login.matchFulfilled,
      (state, { payload }) => {
        const user = payload.login;
        state.user = user;
      }
    );
    builder.addMatcher(
      apiExtended.endpoints.GetProfile.matchFulfilled,
      (state, { payload }) => {
        const user = payload.getProfile;
        state.user = user;
      }
    );
  },
});

export const { setUser, resetUser } = authSlice.actions;

export const user = (state: RootState) => state.auth.user;

export default authSlice.reducer;
