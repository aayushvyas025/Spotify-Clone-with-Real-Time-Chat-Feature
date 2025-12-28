import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { FriendsActivityUserProps } from '@/types/interfaces'

function FriendsActivityUser({user}:FriendsActivityUserProps) {
    console.log(user)
  return (
     <div className='cursor-pointer hover:bg-zinc-800/50 p-3 rounded-md transition-colors group' >
        <div className="flex items-start gap-3">
            <div className="relative">
                <Avatar className='size-10 border border-zinc-800'>
                    <AvatarImage src={user.imageUrl} alt={user.fullName} />
                    <AvatarFallback>{user.fullName[0]}</AvatarFallback>
                </Avatar>
                <div className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-zinc-900 bg-zinc-500`} />
            </div>
        </div>
     </div>
  )
}

export default FriendsActivityUser