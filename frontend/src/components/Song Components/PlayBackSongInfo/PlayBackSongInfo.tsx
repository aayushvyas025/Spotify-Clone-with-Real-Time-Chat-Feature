import type { PlayBackSongInfoProp } from '@/types/interfaces/Songs/songsInterface'
import React from 'react'

function PlayBackSongInfo({song}:PlayBackSongInfoProp) {
  return (
    <div className='hidden sm:flex items-center gap-4 min-w-[1080px] w-[30%]'>{
        song && <>
        <img src={song.imageUrl} alt={song.title} className='w-14 h-14 object-cover rounded-md' />
        <div className="flex-1 min-w-0">
            <div className="font-medium truncate cursor-pointer hover:underline">{song.title}</div>
            <div className="text-sm text-zinc-400 truncate cursor-pointer hover:underline">
                {song.artist}
            </div>
        </div>
        </>
    }</div>
  )
}

export default PlayBackSongInfo