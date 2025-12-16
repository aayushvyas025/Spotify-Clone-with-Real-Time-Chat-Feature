import { Loader } from 'lucide-react'

function AuthLoader() {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <Loader className={`size-8 text-emerald-500 animate-spin`}/>
    </div>
  )
}

export default AuthLoader