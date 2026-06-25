import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  accessToken: null,

  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setAccessToken: (token) => set({ accessToken: token }),
  clearAuth: () =>
    set({ user: null, isAuthenticated: false, accessToken: null }),

  logout: () => set({ user: null, isAuthenticated: false, accessToken: null }),
}));

export default useAuthStore;
