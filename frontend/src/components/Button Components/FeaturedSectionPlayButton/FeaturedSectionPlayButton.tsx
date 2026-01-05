import { Button } from '@/components/ui/button'
import { usePlayerStore } from '@/store'
import type { FeaturedSectionPlayButtonProps } from '@/types/interfaces/buttons/buttonsInterface'

function FeaturedSectionButton({song}:FeaturedSectionPlayButtonProps) {
  const {currentSong, isPlaying, setCurrentSong, togglePlay} = usePlayerStore();
  const isCurrentSong = currentSong?._id === song._id; 
  
  const handlePlayButton = () => {
    if(isCurrentSong) {
         togglePlay()
    }else {
      setCurrentSong(song)
    }
  }

  return (
    <Button onClick={handlePlayButton}></Button>
  )
}

export default FeaturedSectionButton