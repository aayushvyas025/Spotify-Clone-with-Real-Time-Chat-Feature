import { Button } from '@/components/ui/button'
import type { PlayNextButtonProps } from '@/types/interfaces/buttons/buttonsInterface'
import { SkipForward } from 'lucide-react'


function PlayNextButton({disable, onClickHandler}:PlayNextButtonProps) {
  return (
      <Button
      size="icon"
      variant={"ghost"}
      disabled={disable}
      onClick={onClickHandler}
      className="text-zinc-400 hover:text-white"
    >
        <SkipForward className="h-4 w-4" />
    </Button>
  )
}

export default PlayNextButton