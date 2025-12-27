import { useChatStore } from '@/store';
import {LoginPrompt} from "@/components"
import { useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';

function RightSidebar() {
 const {fetchAllUsers, isLoading, users, error} = useChatStore();
 const {user} = useUser();

 useEffect(() => {
    if(user) fetchAllUsers(); 
 }, [fetchAllUsers,user])

  return (
    <div className='h-full bg-zinc-800 rounded-lg flex flex-col'>

     {!user && <LoginPrompt />}
    </div>
  )
}

export default RightSidebar