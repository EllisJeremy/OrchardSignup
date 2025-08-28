import { create } from "zustand";

interface AuthState {
  user: { email: string } | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

export const AuthStore = create<AuthState>((set) => ({
  user: null,

  login: async (email, password) => {
    try {
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // <--- important, allows cookies
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        return false;
      }

      const data = await res.json();
      set({ user: data.user }); // only store safe user info, not the token
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  },

  logout: async () => {
    await fetch("http://localhost:8080/logout", {
      method: "POST",
      credentials: "include",
    });
    set({ user: null });
  },
}));
