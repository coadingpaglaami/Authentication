const { createSlice } = require("@reduxjs/toolkit");

const initialCounter = [
  {
    id: 1,
    value: 5,
  },
  {
    id: 2,
    value: 6,
  },
];
const counterSlice = createSlice({
  name: "counters",
  initialState: initialCounter,
  reducers: {
    increment: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload);
      if (state[counterIndex].value >= 0) state[counterIndex].value ++;
    },
    decrement: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload);
      if (state[counterIndex].value > 0) state[counterIndex].value--;
    },
  },
});

export default counterSlice.reducer; // use all reducers in a single reducer
export const { increment, decrement } = counterSlice.actions; // for dispatch on component , we have to export these as a object. They are action creator
