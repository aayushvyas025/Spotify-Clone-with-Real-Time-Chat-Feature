import { API } from "@/config";
import { apiRoutes } from "@/helper";
import type { ChatStoreInterface } from "@/types/interfaces";
import { create } from "zustand";

const {users} = apiRoutes;
const {GET_USERS} = users;

const useChatStore = create<ChatStoreInterface>((set) => ({
    users:[],
    isLoading:false, 
    error:null,
    fetchAllUsers:async() => {
        set({isLoading:true, error:null});
        try {
            const response = await API.get(GET_USERS);
            set({users:response?.data?.users})
        } catch (error:any) {
            set({error:error?.response?.data?.message});
            console.error(`Error While fetching all users: ${error?.message}`);
        }finally {
            set({isLoading:false})
        }
    }
    

})); 

export default useChatStore;