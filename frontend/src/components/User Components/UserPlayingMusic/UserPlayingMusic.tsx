import { applicationContent } from "@/helper";
import type { UserPlayingMusicProps } from "@/types/interfaces/Users/userInterface";


const { rightSidebarContent } = applicationContent;
const { friendsActivity } = rightSidebarContent;
const { body } = friendsActivity;
const { musicContent } = body;
const { notPlaying } = musicContent;

function UserPlayingMusic({ music }: UserPlayingMusicProps) {
  return (
    <>
      {music ? (
        <div className="mt-1">
          <div className="mt-1 text-sm text-white font-medium truncate">
            Cardigan
          </div>
          <div className="text-xs text-zinc-400 truncate">by Taylor Swift</div>
        </div>
      ) : (
        <div className="mt-1 text-sm text-zinc-400">{notPlaying}</div>
      )}
    </>
  );
}

export default UserPlayingMusic;
