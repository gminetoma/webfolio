/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NODEMAILER_EMAIL: string;
  readonly VITE_NODEMAILER_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
