import { AppState } from '../@types/app.type.ts';

export const initialState: AppState = {
  auth: {
    user: {
      uid: '',
      displayName: '',
      email: '',
      creationTime: null,
      lastSignInTime: null,
    },
    loading: false,
    error: null,
  },
  teachers: { data: [], loading: false, error: null },
  modal: { isOpen: false, id: '' },
};
