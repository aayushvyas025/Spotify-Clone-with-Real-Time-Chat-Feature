import { SignedIn } from '@clerk/clerk-react'
import {LinkComponent, Text} from "@/components"
import { applicationContent, frontendRoutes } from '@/helper';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';


const { chatPageRoute } = frontendRoutes;
const {leftSidebarContent} = applicationContent;
const {navigation} = leftSidebarContent; 

function MessageBar() {
  return (
    <SignedIn>
     <LinkComponent
          href={chatPageRoute}
          linkIcon={<MessageCircle className="mr-2 size-5" />}
          styles={cn(buttonVariants({
            variant:"ghost",
            className:"w-full justify-start text-white hover:bg-zinc-800"
          }))}
        >
         <Text textType="span" text={navigation.message} styles="hidden md:inline" />   
        </LinkComponent>
    </SignedIn>
  )
}

export default MessageBar