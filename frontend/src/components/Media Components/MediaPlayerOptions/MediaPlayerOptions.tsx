import {MediaPlayerActions, VolumeControls} from "@/components/Media Components"; 


function MediaPlayerOptions() {
  return (
    <div className="hidden sm:flex items-center justify-end gap-4 min-w-[180px]">
      <MediaPlayerActions />
      <VolumeControls />
    </div>
  )
}

export default MediaPlayerOptions