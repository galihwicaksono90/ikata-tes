import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { FooterType, api } from "generated/graphql";

export interface GeneralStateProps {
  footerData?: FooterType;
  isEditing?: boolean;
}

const initialState: GeneralStateProps = {
  footerData: null,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setFooter: (state, action: PayloadAction<FooterType>) => {
      state.footerData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.GetFooter.matchFulfilled,
      (state, { payload }) => {
        state.footerData = payload.getFooter;
      }
    );
  },
});

export const { setFooter } = generalSlice.actions;

export const footerData = (state: RootState) => state.general.footerData;

export default generalSlice.reducer;
