import { FeaturedSection, TopBar } from "@/components";
import { useMusicStore } from "@/store";
import { useEffect } from "react";

function HomePage() {
  const {
    madeForYouSongs,
    featuredSongs,
    trendingSongs,
    fetchFeaturedSongs,
    fetchTrendingSongs,
    fetchForUserSongs,
    isLoading,
    error,
  } = useMusicStore();

  useEffect(() => {
    fetchFeaturedSongs();
    fetchTrendingSongs();
     fetchForUserSongs();
  } , [fetchFeaturedSongs, fetchForUserSongs, fetchTrendingSongs]);

  console.log(madeForYouSongs, featuredSongs, trendingSongs)

  return (
    <div className="overflow-hidden rounded-md">
      <TopBar />
      <FeaturedSection />

    </div>
  
  );
}

export default HomePage;
