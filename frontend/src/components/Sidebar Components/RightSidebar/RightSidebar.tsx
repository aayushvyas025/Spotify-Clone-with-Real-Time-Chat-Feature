import { FriendsActivity, LoginPrompt } from "@/components";
import { useUser } from "@clerk/clerk-react";

function RightSidebar() {
  const { user } = useUser();

  return (
    <div className="h-full bg-zinc-900 rounded-lg flex flex-col">
      {!user ? <LoginPrompt /> : <FriendsActivity />}
    </div>
  );
}

export default RightSidebar;
