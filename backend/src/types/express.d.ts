declare namespace Express {
  interface Request {
    user: {
      id: number;
      email: string;
      firstName: string;
      isAdmin: boolean;
      iat: number;
      exp: number;
    };
  }
}
