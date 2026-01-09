import { DynamicButton } from "@/components/Button Components";
import { Slider } from "@/components/ui/slider";
import { usePlayBackControls } from "@/hooks";
import { Volume1 } from "lucide-react";

function VolumeControls() {
  const { volume, setVolume, audioRef } = usePlayBackControls();
  return (
    <div className="flex items-center gap-2">
      <DynamicButton
        size={"icon"}
        btnVariant={"ghost"}
        styles="hover:text-white text-zinc-400"
        btnIcon={<Volume1 className="h- w-4" />}
      />
      <Slider
        value={[volume]}
        max={100}
        step={1}
        className={`w-24 hover:cursor-grab active:cursor-grabbing`}
        onValueChange={(value) => {
            setVolume(value[0]);
            if(audioRef.current) {
                audioRef.current.volume = value[0]/100; 
            }

        }}
      />
    </div>
  );
}

export default VolumeControls;
