import { LinkComponent} from "@/components/Navigation Component";
import { buttonVariants } from "@/components/ui/button";
import { applicationContent, frontendRoutes } from "@/helper";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store";
import { UserButton } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import {AppLogo} from "@/components/Helper Components"
import { SigninButton } from "@/components/Button Components";

const { adminPageRoute } = frontendRoutes;
const { topBarContent } = applicationContent;
const { topBarLink } = topBarContent;

function TopBar() {
  const { isAdmin } = useAuthStore();

  return (
    <div className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10">
      <AppLogo />
      <div className="flex items-center gap-4">
        {isAdmin && (
          <LinkComponent
            href={adminPageRoute}
            content={topBarLink.adminTopBar}
            linkIcon={<LayoutDashboardIcon className="size-4 mr-2" />}
            styles={cn(buttonVariants({ variant: "outline" }))}
          />
        )}

        <SigninButton />
        <UserButton />
      </div>
    </div>
  );
}

export default TopBar;
