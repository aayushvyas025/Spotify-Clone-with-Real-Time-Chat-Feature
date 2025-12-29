import { API } from "@/config";
import { apiRoutes } from "@/helper";
import type { AuthStoreInterface } from "@/types/interfaces";
import { create } from "zustand";

const { admin } = apiRoutes;
const { CHECK_ADMIN } = admin;

const useAuthStore = create<AuthStoreInterface>((set) => ({
  isLoading: false,
  isAdmin: false,
  error: null,
  checkAdminStatus: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await API.get(CHECK_ADMIN);
      set({ isAdmin: response?.data?.admin });
    } catch (error: any) {
      console.error(`Error while checking admin: ${error?.message}`);
      set({ error: error?.response?.data?.message, isAdmin:false });
    } finally {
      set({ isLoading: false });
    }
  },
  reset:() => {
    set({isLoading:false, isAdmin:false, error:null})
  }
}));

export default useAuthStore;
