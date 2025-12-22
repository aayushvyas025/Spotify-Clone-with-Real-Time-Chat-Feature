import { API } from "@/config";
import { apiRoutes } from "@/helper";
import type { MusicStoreInterface } from "@/types/interfaces/music store/musicStoreInterface";
import {create} from "zustand"


const {albums} = apiRoutes; 
const {FETCH_ALBUMS} = albums; 

const useMusicStore = create<MusicStoreInterface>((set) => ({
 albums:[],
 songs:[],
 isLoading:false,
 error:null,
 fetchAlbums: async()=> {
    set({isLoading:true, error:null}); 
    try {
        const response = await API.get(FETCH_ALBUMS); 
        set({albums:response?.data?.albums});
          
    } catch (error:any) {
        console.error(`Error While Fetching Albums: ${error?.message}`); 
        set({error:error?.response?.data?.message})
        
    }finally {
        set({isLoading:false})
    }
 }
})); 

export default useMusicStore; 