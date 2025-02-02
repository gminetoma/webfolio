// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

declare module '@rodneylab/svelte-social-icons';

declare global {
  type Page = '' | '/' | '/portfolio' | '/about' | '/contact';

  type ContactForm = {
    name: string;
    email: string;
    message: string;
  };
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
