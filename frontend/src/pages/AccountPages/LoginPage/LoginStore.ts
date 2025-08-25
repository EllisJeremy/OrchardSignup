import { create } from "zustand";

export interface loginStoreType {
  email: string;
  password: string;
  showPassword: boolean;
  focusPassword: boolean;
  emailValid: boolean;
  firstEditEmail: boolean;

  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setShowPassword: () => void;
  setFocusPassword: (focusPassword: boolean) => void;
  setEmailValid: (emailError: boolean) => void;
  setFirstEditEmail: (firstEditEmail: boolean) => void;
  reset: () => void;
}

export const loginStore = create<loginStoreType>((set) => ({
  email: "",
  password: "",
  showPassword: false,
  focusPassword: false,
  emailValid: true,
  firstEditEmail: true,

  setEmail: (email: string) => set(() => ({ email })),
  setPassword: (password: string) => set(() => ({ password })),
  setShowPassword: () => {
    set((state) => ({
      showPassword: !state.showPassword,
    }));
  },
  setFocusPassword: (focusPassword) => set({ focusPassword }),
  setEmailValid: (emailValid: boolean) => set(() => ({ emailValid })),
  setFirstEditEmail: (firstEditEmail) => set({ firstEditEmail }),
  reset: () =>
    set({
      email: "",
      password: "",
      showPassword: false,
      focusPassword: false,
      emailValid: true,
      firstEditEmail: true,
    }),
}));
