import {FriendsActivityBody, FriendsActivityHeader, FriendsActivityUser, Heading} from "@/components"
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
    {/* <FriendsActivityHeader /> */}
    <div className="p-4 flex justify-between items-center border-b border-zinc-800">
       <div className="flex items-center gap-2">
        <Users  className="size-5 shrink-0"/>
        <Heading headingLevel="h2" styles="font-semibold" title="What they're listening to" />

       </div>
    </div>
    {/* Friends Activity Body */}
    <ScrollArea className="flex-1">
      <div className="p-4 space-y-4">
        {users?.map((user) => <FriendsActivityUser key={user._id} user={user} />)}
      </div>

    </ScrollArea>
    </>
  )
}

export default FriendsActivity