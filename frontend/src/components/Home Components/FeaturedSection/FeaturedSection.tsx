import { useMusicStore } from '@/store'
import {FeatureSectionSkeleton} from "@/components"

function FeaturedSection() {
 const {featuredSongs, isLoading, error} = useMusicStore();

if(isLoading) {
  return <FeatureSectionSkeleton />
}

  return (
    <div>FeaturedSection</div>
  )
}

export default FeaturedSection