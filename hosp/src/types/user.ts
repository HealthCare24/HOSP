export interface User {
    fullName: string;
    email: string;
    password: string;
    otp: string | null;
    verified: boolean;
    createdAt: Date;
  }
  