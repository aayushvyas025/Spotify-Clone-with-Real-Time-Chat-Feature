import { Button } from "@/components/ui/button";
import { usePlayAlbumSong } from "@/hooks";
import { Pause, Play } from "lucide-react";

function PlayButtonComponent() {
  const { handlePlayAlbum, isPlaying, currentAlbum, currentSong } =
    usePlayAlbumSong();

  return (
    <div className="px-6 pb-4 flex items-center gap-6">
      <Button
        size="icon"
        className={`w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 
                                hover:scale-105 transition-all`}
        onClick={handlePlayAlbum}
      >
        {isPlaying &&
        currentAlbum?.songs?.some((song) => song._id === currentSong?._id) ? (
          <Pause className="h-7 w-7 text-black" />
        ) : (
          <Play className="h-7 w-7 text-black" />
        )}
      </Button>
    </div>
  );
}

export default PlayButtonComponent;
