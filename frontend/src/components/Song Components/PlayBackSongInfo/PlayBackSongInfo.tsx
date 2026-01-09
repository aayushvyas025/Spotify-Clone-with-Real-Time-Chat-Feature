import { usePlayBackControls } from '@/hooks'

function PlayBackSongInfo() {
 const {currentSong} = usePlayBackControls();
  return (
    <div className='hidden sm:flex items-center gap-4 min-w-[1080px] w-[30%]'>{
        currentSong && <>
        <img src={currentSong?.imageUrl} alt={currentSong?.title} className='w-14 h-14 object-cover rounded-md' />
        <div className="flex-1 min-w-0">
            <div className="font-medium truncate cursor-pointer hover:underline">{currentSong?.title}</div>
            <div className="text-sm text-zinc-400 truncate cursor-pointer hover:underline">
                {currentSong?.artist}
            </div>
        </div>
        </>
    }</div>
  )
}

export default PlayBackSongInfo