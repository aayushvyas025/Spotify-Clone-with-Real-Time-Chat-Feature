import { Button } from "@/components/ui/button";
import type { PlayPreviousButtonProps } from "@/types/interfaces/buttons/buttonsInterface";
import { SkipBack } from "lucide-react";

function PlayPreviousButton({
  disable,
  onClickHandler,
}: PlayPreviousButtonProps) {
  return (
    <Button
      size="icon"
      variant={"ghost"}
      disabled={disable}
      onClick={onClickHandler}
      className="text-zinc-400 hover:text-white"
    >
        <SkipBack className="h-4 w-4" />
    </Button>
  );
}

export default PlayPreviousButton;
