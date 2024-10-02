import { AuthError } from 'firebase/auth';
import { RegisteredUser } from './user.type.ts';
import { Teacher } from './teacher.type.ts';
import { FirebaseError } from 'firebase/app';

export type AppState = {
  auth: {
    user: RegisteredUser;
    loading: boolean;
    error: AuthError | null;
  };
  teachers: {
    data: Teacher[];
    loading: boolean;
    error: FirebaseError | null;
  };
  modal: { isOpen: boolean; id: string };
};
