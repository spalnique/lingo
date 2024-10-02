import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { push, ref, set } from 'firebase/database';

import { auth, database } from '../../firebase/index.ts';

import {
  LoginCredentials,
  RegisterCredentials,
  RegisteredUser,
} from '../../@types/user.type.ts';

import { Dict } from '../../@types/dictionary.enum.ts';

export const register = createAsyncThunk<RegisteredUser, RegisterCredentials>(
  'user/register',
  async (credentials, thunkAPI) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );

      if (!user.email) {
        throw new Error('Registration error: email is null');
      }

      const usersCollection = ref(database, Dict.users);
      const userRef = push(usersCollection);

      const creationTime =
        user.metadata.creationTime ?? new Date().toISOString();
      const lastSignInTime = null;

      await set(userRef, {
        uid: user.uid,
        email: user.email,
        displayName: credentials.displayName,
        creationTime,
        lastSignInTime,
      });

      return thunkAPI.fulfillWithValue({
        uid: user.uid,
        displayName: credentials.displayName,
        email: user.email,
        creationTime,
        lastSignInTime,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk<RegisteredUser, LoginCredentials>(
  'user/login',
  async (credentials, thunkAPI) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );

      if (!user.email) {
        throw new Error('Login error: email is null');
      }

      const creationTime = user.metadata.creationTime!;
      const lastSignInTime = new Date().toISOString();

      const userRef = push(ref(database, Dict.users));

      await set(userRef, { lastSignInTime });

      return thunkAPI.fulfillWithValue({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        creationTime,
        lastSignInTime,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk<void, void>(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      signOut(auth);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
