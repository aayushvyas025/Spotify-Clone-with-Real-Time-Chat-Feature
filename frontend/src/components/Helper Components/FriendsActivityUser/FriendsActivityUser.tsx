import { Avatar } from '@/components/ui/avatar'
import type { FriendsActivityUserProps } from '@/types/interfaces'

function FriendsActivityUser({}:FriendsActivityUserProps) {
  return (
    <div className='cursor-pointer hover:bg-zinc-800/50 p-3 rounded-md transition-colors group'>
     <div className="flex items-start gap-3">
        <div className="relative">
            <Avatar></Avatar>
        </div>
     </div>
    </div>
  )
}

export default FriendsActivityUser