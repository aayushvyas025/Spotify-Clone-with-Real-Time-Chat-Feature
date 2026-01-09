import { Button } from '@/components/ui/button'
import { Shuffle } from 'lucide-react'


function ShuffleButton() {
  return (
    <Button size={"icon"} 
    className='hidden sm:inline-flex hover:text-white text-zinc-400'>
        <Shuffle className='h-3 w-3' />
    </Button>
  )
}

export default ShuffleButton