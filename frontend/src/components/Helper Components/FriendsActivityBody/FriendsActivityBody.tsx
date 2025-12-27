import { ScrollArea } from "@/components/ui/scroll-area";
import { useChatStore } from "@/store";
import {FriendsActivityUser} from "@/components"

function FriendsActivityBody() {
  const { users } = useChatStore();

  return (
    <ScrollArea className="flex-1">
      <div className="p-4 space-y-4">
        {users?.map((user) => <FriendsActivityUser key={user._id}/>)}
        </div>
    </ScrollArea>
  );
}

export default FriendsActivityBody;
