import { create } from "zustand";

export interface loginStoreType {
  email: string;
  password: string;
  showPassword: boolean;
  focusPassword: boolean;

  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setShowPassword: () => void;
  setFocusPassword: (focusPassword: boolean) => void;
}

export const loginStore = create<loginStoreType>((set) => ({
  email: "",
  password: "",
  showPassword: false,
  focusPassword: false,

  setEmail: (email: string) => set(() => ({ email })),
  setPassword: (password: string) => set(() => ({ password })),
  setShowPassword: () => {
    set((state) => ({
      showPassword: !state.showPassword,
    }))
  },
  setFocusPassword: (focusPassword) => set({ focusPassword })

}));