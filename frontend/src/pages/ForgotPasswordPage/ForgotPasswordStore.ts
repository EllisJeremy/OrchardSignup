import { create } from "zustand";

export interface SignupStoreType {
  email: string;
  emailValid: boolean;
  firstEditEmail: boolean;

  setEmail: (email: string) => void;
  setEmailValid: (emailError: boolean) => void;
  setFirstEditEmail: (firstEditEmail: boolean) => void;

  reset: () => void;
}

export const signupStore = create<SignupStoreType>((set) => ({
  email: "",
  emailValid: true,
  firstEditEmail: true,

  setEmail: (email: string) => set(() => ({ email })),
  setEmailValid: (emailValid: boolean) => set(() => ({ emailValid })),
  setFirstEditEmail: (firstEditEmail) => set({ firstEditEmail }),

  reset: () =>
    set({
      email: "",
      emailValid: true,
      firstEditEmail: true,
    }),
}));
