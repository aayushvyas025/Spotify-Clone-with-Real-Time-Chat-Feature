import { SignedIn, SignOutButton } from "@clerk/clerk-react";

function SignoutButton() {
  return (
    <SignedIn>
      <SignOutButton />
    </SignedIn>
  );
}

export default SignoutButton;
