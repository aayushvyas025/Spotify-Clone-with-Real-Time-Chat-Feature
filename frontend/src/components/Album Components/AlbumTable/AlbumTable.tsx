import { AlbumTableBody, AlbumTableHeader } from "@/components/Album Components";
import type { AlbumTableProps } from "@/types/interfaces/Albums/AlbumInterface";

function AlbumTable({ songs }: AlbumTableProps) {
  
  return (
    <div className="bg-black/20 backdrop-blur-sm">
      <AlbumTableHeader />
      <div className="px-6">
        <div className="space-y-2 py-4">
          <AlbumTableBody songs={songs} />
        </div>
      </div>
    </div>
  );
}

export default AlbumTable;
