import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeLoan: null,
  carLoan: null,
  personalLoan: null,
};

const loanSlice = createSlice({
  name: "loan",
  initialState,
  reducers: {
    setHomeLoan: (state, action) => {
      state.homeLoan = action.payload;
    },
    setCarLoan: (state, action) => {
      state.carLoan = action.payload;
    },
    setPersonalLoan: (state, action) => {
      state.personalLoan = action.payload;
    },
  },
});

export const { setHomeLoan, setCarLoan, setPersonalLoan } = loanSlice.actions;

export default loanSlice.reducer;
