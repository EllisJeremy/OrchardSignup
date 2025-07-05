import { create } from "zustand";

export interface SignupStoreType {
  email: string;
  password1: string;
  password2: string;
  emailValid: boolean;
  showPassword: boolean;
  focusPassword1: boolean;
  focusPassword2: boolean;
  passwordError: string;
  match: boolean;
  firstEdit1: boolean;
  firstEdit2: boolean;
  firstEditEmail: boolean;

  setEmail: (email: string) => void;
  setPassword1: (password: string) => void;
  setPassword2: (password: string) => void;
  setEmailValid: (emailError: boolean) => void;
  setShowPassword: () => void;
  setFocusPassword1: (focusPassword1: boolean) => void;
  setFocusPassword2: (focusPassword2: boolean) => void;
  setPasswordError: (passwordError: string) => void;
  setMatch: (passwordError: boolean) => void;
  setFirstEdit1: (firstEdit1: boolean) => void;
  setFirstEdit2: (firstEdit2: boolean) => void;
  setFirstEditEmail: (firstEditEmail: boolean) => void;

  reset: () => void; // <-- add this line
}

export const signupStore = create<SignupStoreType>((set) => ({
  email: "",
  password1: "",
  password2: "",
  emailValid: true,
  showPassword: false,
  focusPassword1: false,
  focusPassword2: false,
  passwordError: "",
  match: true,
  firstEdit1: true,
  firstEdit2: true,
  firstEditEmail: true,

  setEmail: (email: string) => set(() => ({ email })),
  setPassword1: (password1: string) => set(() => ({ password1 })),
  setPassword2: (password2: string) => set(() => ({ password2 })),
  setEmailValid: (emailValid: boolean) => set(() => ({ emailValid })),
  setShowPassword: () => {
    set((state) => ({
      showPassword: !state.showPassword,
    }));
  },
  setFocusPassword1: (focusPassword1) => set({ focusPassword1 }),
  setFocusPassword2: (focusPassword2) => set({ focusPassword2 }),
  setPasswordError: (passwordError: string) => set(() => ({ passwordError })),
  setMatch: (match) => set({ match }),
  setFirstEdit1: (firstEdit1) => set({ firstEdit1 }),
  setFirstEdit2: (firstEdit2) => set({ firstEdit2 }),
  setFirstEditEmail: (firstEditEmail) => set({ firstEditEmail }),

  reset: () =>
    set({
      email: "",
      password1: "",
      password2: "",
      emailValid: true,
      showPassword: false,
      focusPassword1: false,
      focusPassword2: false,
      passwordError: "",
      match: true,
      firstEdit1: true,
      firstEdit2: true,
      firstEditEmail: true,
    }),
}));
