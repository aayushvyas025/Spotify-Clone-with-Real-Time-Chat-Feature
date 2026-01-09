import { Button } from '@/components/ui/button'
import { Repeat } from 'lucide-react'


function RepeatButton() {
  return (
     <Button size={"icon"} 
    className='hidden sm:inline-flex hover:text-white text-zinc-400'>
        <Repeat className='h-3 w-3' />
    </Button>
  )
}

export default RepeatButton