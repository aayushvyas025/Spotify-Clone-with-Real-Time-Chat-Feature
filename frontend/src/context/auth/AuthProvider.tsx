import { useAuth } from '@clerk/clerk-react'
import React, { useState } from 'react'

function AuthProvider() {
 const {getToken, userId} = useAuth(); 
 const [loading, setLoading] = useState(false)

  return (
    <div>AuthProvider</div>
  )
}

export default AuthProvider