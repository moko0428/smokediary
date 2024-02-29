import { configureStore, createSlice } from "@reduxjs/toolkit";

const smokeData = createSlice({
  name: "smokeData",
  initialState: {
    id: new Date().getTime(),
    count: 0,
    date: new Date().getTime(),
  },
  reducers: {
    changeSmokeData(state, action) {
      state.id = action.payload.id;
      state.count = action.payload.count;
      state.date = action.payload.date;
    },
  },
});

export const { changeSmokeData } = smokeData.actions;

export default configureStore({
  reducer: {
    smokeData: smokeData.reducer,
  },
});
