import { useMusicStore, usePlayerStore } from "@/store";

function usePlayAlbumSong() {
    const {currentAlbum} = useMusicStore(); 
    const {playAlbum, currentSong} = usePlayerStore(); 
    const handlePlayAlbum = (idx:number):void => {
        if(!currentAlbum) return 
       playAlbum(currentAlbum?.songs, idx)
    }

    return {handlePlayAlbum, currentSong};
} 

export default usePlayAlbumSong; 