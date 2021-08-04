declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_URL: string;
      NODE_ENV: "development" | "production";
      GOOGLE_SERVICE_ACCOUNT_EMAIL: string;
      GOOGLE_PRIVATE_KEY: string;
    }
  }
}

export {};
