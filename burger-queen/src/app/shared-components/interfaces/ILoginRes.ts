export interface ILoginRes {
  accessToken: string;
  error: any;
  user: {
    email: string;
    role: string;
  };
}
