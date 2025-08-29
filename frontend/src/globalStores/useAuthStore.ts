import { create } from "zustand";

interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

interface AuthState {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  login: async (email, password) => {
    const res = await fetch("http://localhost:8080/accounts/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) return false;

    const data = await res.json();
    set({ user: data.user });
    return true;
  },

  logout: async () => {
    await fetch("http://localhost:8080/accounts/logout", {
      method: "POST",
      credentials: "include",
    });
    set({ user: null });
  },

  checkAuth: async () => {
    // ask backend if cookie is valid + get user info
    const res = await fetch("http://localhost:8080/accounts/login/me", {
      method: "GET",
      credentials: "include",
    });

    if (res.ok) {
      const data = await res.json();
      set({ user: data.user });
    } else {
      set({ user: null });
    }
  },
}));
