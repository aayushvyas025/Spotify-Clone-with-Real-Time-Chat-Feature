import { useMusicStore } from "@/store";
import { ErrorMessage, FeatureSectionSkeleton } from "@/components";

function FeaturedSection() {
  const { featuredSongs, isLoading, error } = useMusicStore();

  if (isLoading) {
    return <FeatureSectionSkeleton />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }
  return <div>FeaturedSection</div>;
}

export default FeaturedSection;
