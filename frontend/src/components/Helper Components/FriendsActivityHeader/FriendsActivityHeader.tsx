import { Users } from "lucide-react"
import {Heading} from "@/components"
import { applicationContent } from "@/helper"

const {rightSidebarContent} = applicationContent;
const {friendsActivity} = rightSidebarContent;
const {header} = friendsActivity;
const {title} = header;

function FriendsActivityHeader() {
  return (
    <div className="p-4 flex justify-between items-center border-b border-zinc-800">
       <div className="flex items-center gap-2">
        <Users className="size-5 shrink-0"/>
        <Heading headingLevel="h2" styles="font-semibold" title={title} />
       </div>
    </div>
  )
}

export default FriendsActivityHeader