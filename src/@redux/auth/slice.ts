import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../constants/index.ts';
import { AppState } from '../../@types/app.type.ts';

type AuthState = AppState['auth'];

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState.auth as AuthState,
  selectors: {
    selectUser: (state) => state.user,
    selectUserLoading: (state) => state.loading,
    selectUserError: (state) => state.error,
  },
  reducers: {},
  extraReducers: () => {},
});

export default authSlice.reducer;
