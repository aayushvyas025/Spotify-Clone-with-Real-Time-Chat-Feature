import { applicationContent } from '@/helper'
import { Clock } from 'lucide-react'
import React from 'react'

const {albumPageContent} = applicationContent;
const {albumTable} = albumPageContent
const {albumTableHeader} = albumTable;
const {songIndex, songTitle, songReleasedDate} = albumTableHeader;

function AlbumTableHeader() {
  return (
     <div className="grid grid-cols-[16px_4fr_2fr_1fr] gap-4 px-10 py-2 text-sm text-zinc-400 border-white/5">

     <div>{songIndex}</div>
        <div>{songTitle}</div>
        <div>{songReleasedDate}</div>
        <div>
          <Clock className="h-4 w-4" />
          </div>
     </div>

  )
}

export default AlbumTableHeader