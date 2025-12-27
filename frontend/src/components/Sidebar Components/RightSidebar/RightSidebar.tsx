import { useChatStore } from "@/store";
import { FriendsActivity, LoginPrompt } from "@/components";
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

function RightSidebar() {
  const { fetchAllUsers, isLoading, error } = useChatStore();
  const { user } = useUser();

  useEffect(() => {
    if (user) fetchAllUsers();
  }, [fetchAllUsers, user]);

  return (
    <div className="h-full bg-zinc-800 rounded-lg flex flex-col">
      <FriendsActivity />
      {!user && <LoginPrompt />}
    </div>
  );
}

export default RightSidebar;
