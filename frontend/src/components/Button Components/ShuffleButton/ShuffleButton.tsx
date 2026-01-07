import { Button } from '@/components/ui/button'
import { Shuffle } from 'lucide-react'
import React from 'react'

function ShuffleButton() {
  return (
    <Button size={"icon"} 
    className='hidden sm:inline-flex hover:text-white text-zinc-400'>
        <Shuffle className='h-4 w-4' />
    </Button>
  )
}

export default ShuffleButton