import { HomeContentContainer } from "@/components/Home Components";
import { useMusicStore } from "@/store";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

function HomePage() {
  const { fetchFeaturedSongs, fetchTrendingSongs, fetchForUserSongs } =
    useMusicStore();
  const { user } = useUser();

  useEffect(() => {  
    fetchFeaturedSongs();
    fetchTrendingSongs();
    fetchForUserSongs();
  }, [user, fetchFeaturedSongs, fetchForUserSongs, fetchTrendingSongs]);

  return (
    <main className="overflow-hidden rounded-md h-full bg-gradient-to-b from-zinc-800 to-zinc-900">
      
       <HomeContentContainer />
    </main>
  );
}

export default HomePage;
