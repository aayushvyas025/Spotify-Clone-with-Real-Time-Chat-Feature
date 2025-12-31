import { applicationContent } from "@/helper";
import { HeadphonesIcon } from "lucide-react";
import { Heading, Text } from "@/components/Helper Components";

const { rightSidebarContent } = applicationContent;
const { loginPrompt } = rightSidebarContent;
const { heading, text } = loginPrompt;

function LoginPrompt() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center space-y-4">
      <div className="relative">
        <div
          className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full blur-lg
       opacity-75 animate-pulse"
          aria-hidden="true"
        />
        <div className="relative bg-zinc-900 rounded-full p-4">
          <HeadphonesIcon className="size-8 text-emerald-400" />
        </div>
      </div>

      <div className="space-y-2 max-w-[250px]">
        <Heading
          headingLevel="h3"
          styles="text-lg font-semibold text-white"
          title={heading}
        />
        <Text textType="p" styles="text-sm text-zinc-400" text={text} />
      </div>
    </div>
  );
}

export default LoginPrompt;
