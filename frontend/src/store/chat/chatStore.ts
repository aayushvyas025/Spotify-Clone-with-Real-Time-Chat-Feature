import type { ChatStoreInterface } from "@/types/interfaces";
import { create } from "zustand";

const useChatStore = create<ChatStoreInterface>((set) => ({
    users:[],
    fetchAllUsers:async() => {
        try {
            
        } catch (error:any) {
            console.error(`Error While fetching all users: ${error?.message}`)
        }
    }
    

})); 

export default useChatStore;