import { SignedIn } from "@clerk/clerk-react";
import {  Text } from "@/components/Helper Components";
import { applicationContent, frontendRoutes } from "@/helper";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { LinkComponent } from "@/components/Navigation Component";

const { chatPageRoute } = frontendRoutes;
const { leftSidebarContent } = applicationContent;
const { navigation } = leftSidebarContent;

function MessageBar() {
  return (
    <SignedIn>
      <LinkComponent
        href={chatPageRoute}
        linkIcon={<MessageCircle className="mr-2 size-5" />}
        styles={cn(
          buttonVariants({
            variant: "ghost",
            className: "w-full justify-start text-white hover:bg-zinc-800",
          })
        )}
      >
        <Text
          textType="span"
          text={navigation.message}
          styles="hidden md:inline"
        />
      </LinkComponent>
    </SignedIn>
  );
}

export default MessageBar;
