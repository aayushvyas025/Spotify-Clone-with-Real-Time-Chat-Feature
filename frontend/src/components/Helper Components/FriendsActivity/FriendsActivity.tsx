import {FriendsActivityBody, FriendsActivityHeader} from "@/components"

function FriendsActivity() {
  return (
    <div className="p-4 flex justify-between items-center border-b border-zinc-800">
       <FriendsActivityHeader />
       <FriendsActivityBody />
    </div>
  )
}

export default FriendsActivity