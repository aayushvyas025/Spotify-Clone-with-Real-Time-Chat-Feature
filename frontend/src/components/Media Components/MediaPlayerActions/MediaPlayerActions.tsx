import { DynamicButton } from "@/components/Button Components"
import { Laptop, ListMusic, Mic2 } from "lucide-react"


function MediaPlayerActions() {
  return (
     <>
      <DynamicButton
        size="icon"
        btnVariant={"ghost"}
        styles="hover:white-text text-zinc-400"
        btnIcon={<Mic2 className="h-4 w-4"/>}
      />
       <DynamicButton
        size="icon"
        btnVariant={"ghost"}
        styles="hover:white-text text-zinc-400"
        btnIcon={<ListMusic className="h-4 w-4"/>}
      />
       <DynamicButton
        size="icon"
        btnVariant={"ghost"}
        styles="hover:white-text text-zinc-400"
        btnIcon={<Laptop className="h-4 w-4"/>}
      />
    </>
  )
}

export default MediaPlayerActions