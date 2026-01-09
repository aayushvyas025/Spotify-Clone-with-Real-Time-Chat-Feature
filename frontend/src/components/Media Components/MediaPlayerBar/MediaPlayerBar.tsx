import { ShowDurationComponent } from "@/components/Helper Components";
import { Slider } from "@/components/ui/slider";
import type { MediaPlayerBarProps } from "@/types/interfaces/Media/MediaInterface";


function MediaPlayerBar({
  currentTime,
  duration,
  handleBarControls,
}: MediaPlayerBarProps) {
  return (
    <div className="hidden sm:flex items-center gap-2 w-full">
      <ShowDurationComponent
        styles={`text-xs text-zinc-400`}
        givenDuration={currentTime}
      />
      <Slider
        value={[currentTime]}
        max={duration || 100}
        step={1}
        className="w-full hover:cursor-grab active:cursor-grabbing"
        onValueChange={handleBarControls}
      />
      <ShowDurationComponent
        styles="text-xs text-zinc-400"
        givenDuration={duration}
      />
    </div>
  );
}

export default MediaPlayerBar;
