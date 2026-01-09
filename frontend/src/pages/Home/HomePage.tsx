import { HomeContentContainer } from "@/components/Home Components";
import { useMusicStore, usePlayerStore } from "@/store";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

function HomePage() {
  const {
    fetchFeaturedSongs,
    fetchTrendingSongs,
    fetchForUserSongs,
    madeForYouSongs,
    featuredSongs,
    trendingSongs,
  } = useMusicStore();
  const { initialQueue } = usePlayerStore();
  const { user } = useUser();

  useEffect(() => {
    fetchFeaturedSongs();
    fetchTrendingSongs();
    fetchForUserSongs();
  }, [user, fetchFeaturedSongs, fetchForUserSongs, fetchTrendingSongs]);

  useEffect(() => {
    if (!madeForYouSongs || !featuredSongs || !trendingSongs) return;

    if (
      madeForYouSongs.length > 0 &&
      featuredSongs.length > 0 &&
      trendingSongs.length > 0
    ) {
      const allSongs = [...madeForYouSongs, ...featuredSongs, ...trendingSongs];
      initialQueue(allSongs);
    }
  }, [initialQueue, madeForYouSongs, featuredSongs, trendingSongs]);

  return (
    <main className="overflow-hidden rounded-md h-full bg-gradient-to-b from-zinc-800 to-zinc-900">
      <HomeContentContainer />
    </main>
  );
}

export default HomePage;
