import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  email: '',
  password: '',
  currentUser:null,

};

const EarliReducers = createSlice({
  name: 'EarliReducers',
  initialState,
  reducers: {
    addFullName: (state, { payload }) => {
      state.fullName = payload;
    },
    
    addEmail: (state, { payload }) => {
      state.email = payload;
    },
    addPassword: (state, { payload }) => {
      state.password = payload;
    },
  
    addCurrentUser: (state, {payload})=>{
      state.currentUser = payload
    },
    logout: (state, {payload})=> {
      state.currentUser = null
    }
  },
});

export const {
  addFullName,
  addEmail,
  addPassword, 
  addCurrentUser,
  logout
} = EarliReducers.actions;

export default EarliReducers.reducer;
