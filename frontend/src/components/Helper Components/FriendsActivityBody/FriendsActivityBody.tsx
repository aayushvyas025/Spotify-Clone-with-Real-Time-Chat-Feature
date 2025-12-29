import { ScrollArea } from "@/components/ui/scroll-area";
import {FriendsActivityUser} from "@/components"
import type { FriendsActivityBodyProps } from "@/types/interfaces";

function FriendsActivityBody({users}:FriendsActivityBodyProps) {


  return (
   <ScrollArea className="flex-1">
      <div className="p-4 space-y-4">
        {users?.map((user) => <FriendsActivityUser key={user._id} user={user} />)}
      </div>
    </ScrollArea>
  );
}

export default FriendsActivityBody;
