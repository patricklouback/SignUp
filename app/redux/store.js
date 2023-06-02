import { configureStore, createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuthenticated: false },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const modalSlice = createSlice({
  name: 'modal',
  initialState: { visible: false },
  reducers: {
    showModal(state) {
      state.visible = true;
    },
    hideModal(state) {
      state.visible = false;
    },
  },
});


const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export const { login, logout } = authSlice.actions;
export const { showModal, hideModal } = modalSlice.actions;
export default store;
