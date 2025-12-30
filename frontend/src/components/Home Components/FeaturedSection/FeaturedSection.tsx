import { useMusicStore } from "@/store";
import { ErrorMessage, FeatureSectionSkeleton } from "@/components";
import { useUser } from "@clerk/clerk-react";

function FeaturedSection() {
  const { featuredSongs, isLoading, error } = useMusicStore();
  const { user } = useUser();
  console.log(featuredSongs)

  if (isLoading) {
    return <FeatureSectionSkeleton />;
  }

  if (error && user) {
    return <ErrorMessage message={error} />;
  }
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
     
  </div>;
}

export default FeaturedSection;
