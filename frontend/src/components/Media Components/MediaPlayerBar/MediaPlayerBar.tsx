import { Slider } from "@/components/ui/slider";
import { helperFunctions } from "@/helper";
import type { MediaPlayerBarProps } from "@/types/interfaces/Media/MediaInterface";

const { songDurationFormatter } = helperFunctions;

function MediaPlayerBar({
  currentTime,
  duration,
  handleBarControls,
}: MediaPlayerBarProps) {
  return (
    <div className="hidden sm:flex items-center gap-2 w-full">
      <div className="text-xs text-zinc-400">
        {songDurationFormatter(currentTime)}
      </div>
      <Slider
        value={[currentTime]}
        max={duration || 100}
        step={1}
        className="w-full hover:cursor-grab active:cursor-grabbing"
        onValueChange={handleBarControls}
      />
    </div>
  );
}

export default MediaPlayerBar;
