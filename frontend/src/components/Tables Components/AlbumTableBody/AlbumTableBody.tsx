import type { AlbumTableBodyProps } from '@/types/interfaces/Albums/AlbumInterface'
import { AlbumTableContent } from "@/components/Tables Components";
import { usePlayAlbumSong } from '@/hooks';

function AlbumTableBody({songs}:AlbumTableBodyProps) {
    const { currentSong, handleAlbumSongPlay } = usePlayAlbumSong();
  return (
    <>{songs?.map((song, index) => {
            const isCurrentSong = currentSong?._id === song?._id;
            return (
              <div
                key={song?._id}
                className="grid grid-cols-[16px_4fr_2fr_1fr] gap-4 px-2 py-2 text-sm text-zinc-400 hover:bg-white/5 rounded-md group cursor pointer"
                onClick={() => handleAlbumSongPlay(index)}
              >
                <AlbumTableContent key={song._id} song={song} index={index} isCurrentSong={isCurrentSong} />
              </div>
            );
          })}</>
  )
}

export default AlbumTableBody