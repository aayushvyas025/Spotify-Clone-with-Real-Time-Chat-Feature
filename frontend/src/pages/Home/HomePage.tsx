import { TopBar } from "@/components/Helper Components";
import { HeroSection } from "@/components/Home Components";
import { ScrollArea } from "@/components/ui/scroll-area";
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
  }, [fetchFeaturedSongs, fetchForUserSongs, fetchTrendingSongs]);

  return (
    <main className="overflow-hidden rounded-md h-full bg-gradient-to-b from-zinc-800 to-zinc-900">
      <TopBar />
      <ScrollArea className="h-[calc(100vh-180px)]">
        <HeroSection />
      </ScrollArea>
    </main>
  );
}

export default HomePage;
