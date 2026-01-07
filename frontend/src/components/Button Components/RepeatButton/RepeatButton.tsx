import { Button } from '@/components/ui/button'
import { Repeat } from 'lucide-react'
import React from 'react'

function RepeatButton() {
  return (
     <Button size={"icon"} 
    className='hidden sm:inline-flex hover:text-white text-zinc-400'>
        <Repeat className='h-4 w-4' />
    </Button>
  )
}

export default RepeatButton