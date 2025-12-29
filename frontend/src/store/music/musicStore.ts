import { create } from "zustand";
import { API } from "@/config";
import { apiRoutes } from "@/helper";
import type { MusicStoreInterface } from "@/types/interfaces";

const { albums,songs } = apiRoutes;
const { FETCH_ALBUMS, FETCH_ALBUMS_BY_ID } = albums;
const {GET_SONGS, GET_FEATURED_SONGS, GET_MADE_FOR_YOU_SONGS, GET_TRENDING_SONGS} = songs;

const useMusicStore = create<MusicStoreInterface>((set) => ({
  albums: [],
  songs: [],
  currentAlbum:null,
  isLoading: false,
  error: null,
  madeForYouSongs:[],
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
  fetchForUserSongs:async() => {
    set({isLoading:true, error:null});
    try {
      const response = await API.get(GET_MADE_FOR_YOU_SONGS);
      set({ madeForYouSongs:response?.data?.songs});

    } catch (error:any) {
      console.error(`Error While fetch songs for user:${error?.message}`);
      set({error:error?.response?.message})
    }
  }
}));

export default useMusicStore;
