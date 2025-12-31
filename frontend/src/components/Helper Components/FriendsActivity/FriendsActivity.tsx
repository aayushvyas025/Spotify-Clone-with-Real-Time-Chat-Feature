import {FriendsActivityBody, FriendsActivityHeader} from "@/components/Helper Components"
import { useChatStore } from "@/store"
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";


function FriendsActivity() {
  const {fetchAllUsers, users} = useChatStore();

  const {user} = useUser();

  useEffect(() => {
    if(user) fetchAllUsers();
  }, [fetchAllUsers, user])

  return (
    <>
    <FriendsActivityHeader />
    <FriendsActivityBody users={users} />
    </>
  )
}

export default FriendsActivity