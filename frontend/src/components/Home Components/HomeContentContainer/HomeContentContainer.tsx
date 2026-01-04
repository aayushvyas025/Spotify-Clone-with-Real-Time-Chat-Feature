import { TopBar } from "@/components/Helper Components";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HeroSection } from "@/components/Home Components";

function HomeContentContainer() {
  return (
    <>
      <TopBar />
      <ScrollArea className="h-[calc(100vh-180px)]">
        <HeroSection />
      </ScrollArea>
    </>
  );
}

export default HomeContentContainer;
