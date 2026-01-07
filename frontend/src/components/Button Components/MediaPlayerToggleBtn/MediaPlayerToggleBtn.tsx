import { Button } from "@/components/ui/button";
import type { MediaPlayerToggleBtnProps } from "@/types/interfaces/buttons/buttonsInterface";
import { Pause, Play } from "lucide-react";
import React from "react";

function MediaPlayerToggleBtn({
  disable,
  musicPlaying,
  onClickHandler,
}: MediaPlayerToggleBtnProps) {
  return (
    <Button
      size={"icon"}
      disabled={disable}
      onClick={onClickHandler}
      className="bg-white hover:bg-white/80 text-black rounded-full w-8 h-8"
    >
      {musicPlaying ? (
        <Pause className="h-5 w-5" />
      ) : (
        <Play className="h-5 w-5" />
      )}
    </Button>
  );
}

export default MediaPlayerToggleBtn;
