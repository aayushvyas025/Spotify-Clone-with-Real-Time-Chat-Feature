import {FriendsActivityBody, FriendsActivityHeader} from "@/components"
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChatStore } from "@/store"
import { useUser } from "@clerk/clerk-react";
import { Users } from "lucide-react";
import { useEffect } from "react";


function FriendsActivity() {
  const {fetchAllUsers, isLoading, users, error} = useChatStore();

  const {user} = useUser();

  useEffect(() => {
    if(user) fetchAllUsers();
  }, [fetchAllUsers, user])

  return (
    <>
   {/* Friends Activity Header */}
    <FriendsActivityHeader />
    {/* Friends Activity Body */}
    <FriendsActivityBody users={users} />
    </>
  )
}

export default FriendsActivity