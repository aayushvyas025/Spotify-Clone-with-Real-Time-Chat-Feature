import { ScrollArea } from "@/components/ui/scroll-area";
import { useChatStore } from "@/store";
import {FriendsActivityUser} from "@/components"

function FriendsActivityBody() {
  const { users } = useChatStore();
  console.log(users);

  return (
    <ScrollArea className="flex-1">
      <div className="p-4 space-y-4">
        {users?.map((user) => <FriendsActivityUser key={user._id} user={user} />)}
        </div>
    </ScrollArea>
  );
}

export default FriendsActivityBody;
