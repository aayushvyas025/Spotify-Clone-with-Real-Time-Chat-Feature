import { LinkComponent, Text, MessageBar } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import { applicationContent, frontendRoutes } from "@/helper";
import { cn } from "@/lib/utils";
import { HomeIcon } from "lucide-react";

const { homeRoute } = frontendRoutes;
const {leftSidebarContent} = applicationContent;
const {navigation} = leftSidebarContent; 

function Navigation() {
  return (
    <div className="rounded-lg bg-zinc-900 p-4">
      <div className="space-y-2">
        <LinkComponent
          href={homeRoute}
          linkIcon={<HomeIcon className="mr-2 size-5" />}
          styles={cn(buttonVariants({
            variant:"ghost",
            className:"w-full justify-start text-white hover:bg-zinc-800"
          }))}
        >
         <Text textType="span" text={navigation.home} styles="hidden md:inline" />   
        </LinkComponent>
        <MessageBar />
      </div>
    </div>
  );
}

export default Navigation;
