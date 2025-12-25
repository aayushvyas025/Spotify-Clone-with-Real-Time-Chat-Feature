import { create } from "zustand";
import { API } from "@/config";
import { apiRoutes } from "@/helper";
import type { MusicStoreInterface } from "@/types/interfaces";

const { albums } = apiRoutes;
const { FETCH_ALBUMS, FETCH_ALBUMS_BY_ID } = albums;

const useMusicStore = create<MusicStoreInterface>((set) => ({
  albums: [],
  songs: [],
  currentAlbum:null,
  isLoading: false,
  error: null,
  fetchAlbums: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await API.get(FETCH_ALBUMS);
      set({ albums: response?.data?.albums });
    } catch (error: any) {
      console.error(`Error While Fetching Albums: ${error?.message}`);
      set({ error: error?.response?.data?.message });
    } finally {
      set({ isLoading: false });
    }
  },
  fetchAlbumById: async (albumId:string | undefined) => {
    set({isLoading:true, error:null});
    try {
        const response = await API.get(FETCH_ALBUMS_BY_ID(albumId));
        set({currentAlbum:response?.data?.album});
    } catch (error:any) {
      console.error(`Error While fetching Album By Id: ${error?.message}`);
      set({error:error?.response?.data?.message})
        
    }finally {
        set({isLoading:false})
    }
  },
}));

export default useMusicStore;
