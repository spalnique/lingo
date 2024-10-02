export type RegisterCredentials = {
  displayName: string;
  email: string;
  password: string;
};

export type LoginCredentials = { email: string; password: string };

export type RegisteredUser = {
  uid: string;
  displayName: string | null;
  email: string;
  creationTime: string | null;
  lastSignInTime: string | null;
};
