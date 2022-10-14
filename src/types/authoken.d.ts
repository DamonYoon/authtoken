interface APIKeys {
  accessKey: string;
  secretKey: string;
  expiresIn: number;
}

interface AuthToken {
  token: string;
  expiryAt: string;
}

interface AuthTokenResponse {
  data?: {
    authToken: AuthToken;
  };
  code?: string;
  message?: string;
}
