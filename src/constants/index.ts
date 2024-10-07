import { AppState } from '../@types/app.type.ts';
import { Feature } from '../@types/feature.type.ts';

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
  modal: { isOpen: false, type: null, id: '' },
};

export const features: Feature[] = [
  { number: 30000, desc: 'Experienced tutors' },
  { number: 300000, desc: '5-star tutor reviews' },
  { number: 120, desc: 'Subjects taught' },
  { number: 200, desc: 'Tutor nationalities' },
];
