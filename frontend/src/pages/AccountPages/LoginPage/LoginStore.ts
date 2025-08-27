import { create } from "zustand";

export interface loginStoreType {
  email: string;
  password: string;
  showPassword: boolean;
  focusPassword: boolean;
  loginFailed: boolean;

  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setShowPassword: () => void;
  setFocusPassword: (focusPassword: boolean) => void;
  setLoginFailed: (loginFailed: boolean) => void;
  reset: () => void;
}

export const loginStore = create<loginStoreType>((set) => ({
  email: "",
  password: "",
  showPassword: false,
  focusPassword: false,
  loginFailed: false,

  setEmail: (email: string) => set(() => ({ email })),
  setPassword: (password: string) => set(() => ({ password })),
  setShowPassword: () => {
    set((state) => ({
      showPassword: !state.showPassword,
    }));
  },
  setFocusPassword: (focusPassword) => set({ focusPassword }),
  setLoginFailed: (loginFailed: boolean) => set(() => ({ loginFailed })),
  reset: () =>
    set({
      email: "",
      password: "",
      showPassword: false,
      focusPassword: false,
    }),
}));
