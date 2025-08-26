import { create } from "zustand";

export interface SignupStoreType {
  email: string;
  password1: string;
  password2: string;
  firstName: string;
  lastName: string;
  emailValid: boolean;
  firstNameError: string;
  lastNameError: string;
  showPassword: boolean;
  focusPassword1: boolean;
  focusPassword2: boolean;
  passwordError: string;
  match: boolean;
  firstEdit1: boolean;
  firstEdit2: boolean;
  firstEditEmail: boolean;
  firstEditFirstName: boolean;
  firstEditLastName: boolean;

  setEmail: (email: string) => void;
  setPassword1: (password: string) => void;
  setPassword2: (password: string) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmailValid: (emailValid: boolean) => void;
  setFirstNameError: (firstNameError: string) => void;
  setLastNameError: (lastNameError: string) => void;
  setShowPassword: () => void;
  setFocusPassword1: (focusPassword1: boolean) => void;
  setFocusPassword2: (focusPassword2: boolean) => void;
  setPasswordError: (passwordError: string) => void;
  setMatch: (passwordError: boolean) => void;
  setFirstEdit1: (firstEdit1: boolean) => void;
  setFirstEdit2: (firstEdit2: boolean) => void;
  setFirstEditEmail: (firstEditEmail: boolean) => void;
  setFirstEditFirstName: (firstEditFirstName: boolean) => void;
  setFirstEditLastName: (firstEditLastName: boolean) => void;

  reset: () => void;
}

export const signupStore = create<SignupStoreType>((set) => ({
  email: "",
  password1: "",
  password2: "",
  firstName: "",
  lastName: "",
  emailValid: true,
  firstNameError: "",
  lastNameError: "",
  showPassword: false,
  focusPassword1: false,
  focusPassword2: false,
  passwordError: "",
  match: true,
  firstEdit1: true,
  firstEdit2: true,
  firstEditEmail: true,
  firstEditFirstName: true,
  firstEditLastName: true,

  setEmail: (email: string) => set(() => ({ email })),
  setPassword1: (password1: string) => set(() => ({ password1 })),
  setPassword2: (password2: string) => set(() => ({ password2 })),
  setFirstName: (firstName: string) => set(() => ({ firstName })),
  setLastName: (lastName: string) => set(() => ({ lastName })),
  setEmailValid: (emailValid: boolean) => set(() => ({ emailValid })),
  setFirstNameError: (firstNameError: string) => set(() => ({ firstNameError })),
  setLastNameError: (firstNameError: string) => set(() => ({ firstNameError })),

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
  setFirstEditFirstName: (firstEditFirstName) => set({ firstEditFirstName }),
  setFirstEditLastName: (firstEditLastName) => set({ firstEditLastName }),

  reset: () =>
    set({
      email: "",
      password1: "",
      password2: "",
      firstName: "",
      lastName: "",
      emailValid: true,
      firstNameError: "",
      lastNameError: "",
      showPassword: false,
      focusPassword1: false,
      focusPassword2: false,
      passwordError: "",
      match: true,
      firstEdit1: true,
      firstEdit2: true,
      firstEditEmail: true,
      firstEditFirstName: true,
      firstEditLastName: true,
    }),
}));
