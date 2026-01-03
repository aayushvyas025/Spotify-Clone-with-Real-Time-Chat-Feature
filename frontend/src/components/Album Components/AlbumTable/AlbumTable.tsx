
import {AlbumTableHeader} from "@/components/Album Components";
import {AlbumTableContent} from "@/components/Album Components";
import type { AlbumTableProps } from "@/types/interfaces/Albums/AlbumInterface";


function AlbumTable({ songs }: AlbumTableProps) {
  return (
    <div className="bg-black/20 backdrop-blur-sm">
      <AlbumTableHeader />
      <div className="px-6">
        {songs?.map((song, index) => (
          <div className="space-y-2 py-4">
            <div
              key={song?._id}
              className="grid grid-cols-[16px_4fr_2fr_1fr] gap-4 px-2 py-2 text-sm text-zinc-400 hover:bg-white/5 rounded-md group cursor pointer"
            >
              <AlbumTableContent key={song._id} song={song} index={index} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumTable;
