import { Text } from "@/components/Helper Components";
import type { SongComponentProps } from "@/types/interfaces/Songs/songsInterface";

function SongComponent({ song }: SongComponentProps) {
  return (
    <>
        <div
          className="flex items-center bg-zinc-800/50 rounded-md overflow-hidden hover:bg-zinc-700/50 transition-colors group cursor-pointer relative"
        >
          <img
            src={song.imageUrl}
            alt={song.title}
            className="w-16 sm:w-20 h-16 sm:h-20 object-cover flex-shrink-0"
          />
          <div className="flex-1 p-4">
            <Text textType="p" styles="font-medium truncate" text={song.title} />
            <Text textType="p" styles="text-sm text-zinc-400 truncate" text={song.artist} />
          </div>
        </div>
    </>
  );
}

export default SongComponent;
