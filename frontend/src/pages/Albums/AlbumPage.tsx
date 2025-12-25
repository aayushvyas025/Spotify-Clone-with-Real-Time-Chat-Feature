import { AlbumHeader, GradientBackground } from '@/components';
import { useMusicStore } from '@/store'
import { ScrollArea } from '@radix-ui/react-scroll-area';
import React, { useEffect } from 'react'
import { useParams,  } from 'react-router-dom';


function AlbumPage() {
const {fetchAlbumById, currentAlbum, isLoading} = useMusicStore();
const {albumId} = useParams();

useEffect(() => {
  if(albumId) fetchAlbumById(albumId);
}, [fetchAlbumById, albumId])

if(isLoading) return null;

  return (
    <div className='h-full'>
      <ScrollArea className='h-full'>
        <div className="relative min-h-full ">
          <GradientBackground />
          <div className="relative z-10">
            <AlbumHeader title={currentAlbum?.title} albumImage={currentAlbum?.imageUrl} />
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

export default AlbumPage