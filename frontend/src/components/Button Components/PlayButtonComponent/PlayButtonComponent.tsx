import { Button } from "@/components/ui/button";
import { usePlayAlbumSong } from "@/hooks";
import { Play } from "lucide-react";

function PlayButtonComponent() {
  const {handlePlayAlbum} = usePlayAlbumSong();

  return (
    <div className="px-6 pb-4 flex items-center gap-6">
      <Button
        size="icon"
        className={`w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 
                                hover:scale-105 transition-all`}
      onClick={handlePlayAlbum}
      >
        <Play className="h-7 w-7 text-black" />
      </Button>
    </div>
  );
}

export default PlayButtonComponent;
