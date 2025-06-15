import { create } from "zustand";

export interface SignupStoreType {
  email: string;
  password1: string;
  password2: string;
  showPassword: boolean;
  focusPassword1: boolean;
  focusPassword2: boolean;
  valid: boolean;
  passwordError: string;
  match: boolean;
  firstEdit1: boolean;
  firstEdit2: boolean;

  setEmail: (email: string) => void;
  setPassword1: (password: string) => void;
  setPassword2: (password: string) => void;
  setShowPassword: () => void;
  setFocusPassword1: (focusPassword1: boolean) => void;
  setFocusPassword2: (focusPassword2: boolean) => void;
  setValid: (valid: boolean) => void;
  setPasswordError: (passwordError: string) => void;
  setMatch: (passwordError: boolean) => void;
  setFirstEdit1: (passwordError: boolean) => void;
  setFirstEdit2: (passwordError: boolean) => void;
}

export const signupStore = create<SignupStoreType>((set) => ({
  email: "",
  password1: "",
  password2: "",
  showPassword: false,
  focusPassword1: false,
  focusPassword2: false,
  valid: false,
  passwordError: "",
  match: true,
  firstEdit1: true,
  firstEdit2: true,

  setEmail: (email: string) => set(() => ({ email })),
  setPassword1: (password1: string) => set(() => ({ password1 })),
  setPassword2: (password2: string) => set(() => ({ password2 })),
  setShowPassword: () => {
    set((state) => ({
      showPassword: !state.showPassword,
    }));
  },
  setFocusPassword1: (focusPassword1) => set({ focusPassword1 }),
  setFocusPassword2: (focusPassword2) => set({ focusPassword2 }),
  setValid: (valid) => set({ valid }),
  setPasswordError: (passwordError: string) => set(() => ({ passwordError })),
  setMatch: (match) => set({ match }),
  setFirstEdit1: (firstEdit1) => set({ firstEdit1 }),
  setFirstEdit2: (firstEdit2) => set({ firstEdit2 }),
}));
