import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface prop {
  theme: number;
  scroll: number;
  pageNum: number;
}
const initialState: prop = {
  theme: 0,
  scroll: 0,
  pageNum: 2,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<number>) => {
      state.theme = action.payload;
    },
    changeScroll: (state, action: PayloadAction<any>) => {
      state.scroll = action.payload;
    },
    changePageNum: (state, action: PayloadAction<any>) => {
      state.pageNum = action.payload;
    },
  },
});


export const { changeTheme, changeScroll, changePageNum  } =
  uiSlice.actions;
export default uiSlice;


