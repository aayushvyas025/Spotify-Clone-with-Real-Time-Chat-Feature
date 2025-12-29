import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {UserOnlineStatus, Text} from '@/components'
import type { FriendsActivityUserProps } from '@/types/interfaces'
import { Music } from 'lucide-react';

function FriendsActivityUser({user}:FriendsActivityUserProps) {
    const isPlayingMusic = true;
  return (
     <div className='cursor-pointer hover:bg-zinc-800/50 p-3 rounded-md transition-colors group' >
        <div className="flex items-start gap-3">
            <div className="relative">
                <Avatar className='size-10 border border-zinc-800'>
                    <AvatarImage src={user.imageUrl} alt={user.fullName} />
                    <AvatarFallback>{user.fullName[0]}</AvatarFallback>
                </Avatar>
            <UserOnlineStatus />
            </div>
            <div className='flex-1 min-w-0'>
            <div className="flex items-center gap-2">
                <Text textType='span' styles='font-medium text-sm text-white' text={user.fullName} />
            {isPlayingMusic && <Music className='size-3.5 text-emerald-400 shrink-0' />}
            </div>
            </div>
        </div>
     </div>
  )
}

export default FriendsActivityUser