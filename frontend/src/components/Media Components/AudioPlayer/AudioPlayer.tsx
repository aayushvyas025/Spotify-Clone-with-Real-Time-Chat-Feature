import { useAudioPlayer } from "@/hooks";

function AudioPlayer() {
  const {audioRef} = useAudioPlayer()

  return <audio className="" ref={audioRef} />;
}

export default AudioPlayer;
