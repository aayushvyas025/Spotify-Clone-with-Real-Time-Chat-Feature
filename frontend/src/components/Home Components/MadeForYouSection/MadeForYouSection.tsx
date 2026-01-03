import { FeatureSectionSkeleton } from '@/components/Skeleton Components'
import { withSongData } from '@/hoc'
import type { MadeForYouSectionProps } from '@/types/interfaces'
import type { Songs } from '@/types/type'
import React from 'react'

function MadeForYouSection({songs}:MadeForYouSectionProps) {
  
  return (
    <div>Made or You Section</div>
  )
}

export default withSongData<Songs, MadeForYouSectionProps>(MadeForYouSection, {
    songsType:"madeForYouSongs",
    skeleton:FeatureSectionSkeleton
})