import { TopBar } from "@/components/Helper Components";
import { FeaturedSection } from "@/components/Home Components";
import { useMusicStore } from "@/store";
import { ScrollArea } from "@radix-ui/react-scroll-area";
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


  return (
    <div className="overflow-hidden rounded-md">
      <TopBar />
      <ScrollArea className="h-[calc(100vh-180px)]">
      <FeaturedSection />

      </ScrollArea>

    </div>
  
  );
}

export default HomePage;
