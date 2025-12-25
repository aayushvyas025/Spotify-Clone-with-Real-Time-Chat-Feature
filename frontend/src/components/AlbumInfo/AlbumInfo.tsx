import type { AlbumInfoProps } from '@/types/interfaces'
import React from 'react'
import {Text} from "@/components"

function AlbumInfo({artist,totalSongs}:AlbumInfoProps) {
  return (
     <div className="flex items-center gap-2 text-sm text-zinc-100">
         <Text textType='span' text={artist} styles="font-medium text-white" />
         <Text textType='span' text={`${totalSongs} songs`} />
        </div>
  )
}

export default AlbumInfo