import { SignedOut } from "@clerk/clerk-react";
import { SignInOAuthButton } from "@/components";

function SigninButton() {
  return (
    <SignedOut>
      <SignInOAuthButton
        buttonVariant="secondary"
        styles="w-full text-white border-zinc-200 h-11"
        text="Continue With Google"
      />
    </SignedOut>
  );
}

export default SigninButton;
