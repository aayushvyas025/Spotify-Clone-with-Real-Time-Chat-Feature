import { useMusicStore } from '@/store'
import React from 'react'

function FeaturedSection() {
 const {featuredSongs, isLoading, error} = useMusicStore();
  return (
    <div>FeaturedSection</div>
  )
}

export default FeaturedSection