import { useMusicStore, usePlayerStore } from "@/store";

function usePlayAlbumSong() {
    const {currentAlbum} = useMusicStore(); 
    const {playAlbum, currentSong, isPlaying} = usePlayerStore(); 
    const handleAlbumPlayAlbum = (idx:number):void => {
        if(!currentAlbum) return 
       playAlbum(currentAlbum?.songs, idx)
    }

    return {handleAlbumPlayAlbum, currentSong, isPlaying};
} 

export default usePlayAlbumSong; 