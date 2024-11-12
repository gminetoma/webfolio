// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  type ContactForm = {
    name: string;
    email: string;
    text: string;
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
