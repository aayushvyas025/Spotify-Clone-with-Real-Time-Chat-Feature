import { Text} from "@/components/Helper Components";
import { Music } from "lucide-react";
import {UserPlayingMusic} from "@/components/User Components"
import type { UserInfoSidebarProps } from "@/types/interfaces/Users/userInterface";

function UserInfoSidebar({ fullName }: UserInfoSidebarProps) {
  const isPlayingMusic = false;
  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2">
        <Text
          textType="span"
          styles="font-medium text-sm text-white"
          text={fullName}
        />
        {isPlayingMusic && (
          <Music className="size-3.5 text-emerald-400 shrink-0" />
        )}
      </div>
      <UserPlayingMusic music={isPlayingMusic} />
    </div>
  );
}

export default UserInfoSidebar;
