import {FeaturedSection, MadeForYouSection, TrendingSection} from "@/components/Home Components"

function HeroSection() {
  return (
    <>
     <FeaturedSection />
     <div className="space-y-8">
      <MadeForYouSection />
      <TrendingSection />
     </div>
    </>
  )
}

export default HeroSection