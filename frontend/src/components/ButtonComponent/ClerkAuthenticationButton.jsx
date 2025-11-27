import React from 'react'
import { Button } from "./components/ui/button"
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
function ClerkAuthenticationButton() {
  return (
    <header>
        <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}

export default ClerkAuthenticationButton