import { Avatar, AvatarImage } from '@/components/ui/avatar'
import type { FriendsActivityUserProps } from '@/types/interfaces'

function FriendsActivityUser({user}:FriendsActivityUserProps) {
    console.log(user)
  return (
    <div className='cursor-pointer hover:bg-zinc-800/50 p-3 rounded-md transition-colors group'>
     <div className="flex items-start gap-3">
        <div className="relative">
            <Avatar className='size-10 border border-zinc-800'>
                <AvatarImage src={user?.imageUrl} alt={user?.fullName} />
            </Avatar>
        </div>
     </div>
    </div>
  )
}

export default FriendsActivityUser