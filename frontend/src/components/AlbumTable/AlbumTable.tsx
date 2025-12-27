import type { AlbumTableProps } from "@/types/interfaces";
import { Clock } from "lucide-react";
import { AlbumSongLists, AlbumTableHeader } from "@/components";

function AlbumTable({ songs }: AlbumTableProps) {
  return (
    <div className="bg-black/20 backdrop-blur-sm">
        <AlbumTableHeader />
        <div className="px-6">
          {songs?.map((song, index) => (
            <div className="space-y-2 py-4">
              <div
                key={song._id}
                className="grid grid-cols-[16px_4fr_2fr_1fr] gap-4 px-2 py-2 text-sm text-zinc-400 hover:bg-white/5 rounded-md group cursor pointer"
              >
                <AlbumSongLists
                key={song._id}
                  songIndex={index + 1}
                  songImage={song?.imageUrl}
                  songTitle={song?.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default AlbumTable;
