import { Button } from "@/components/ui/button";
import { frontendRoutes } from "@/helper";
import type { SigninButtonProps } from "@/types/interfaces";
import { useSignIn } from "@clerk/clerk-react";

const { authRoute, ssoCallbackAuthRoute } = frontendRoutes;

function SignInOAuthButton({
  buttonVariant,
  styles,
  text,
  image,
}: SigninButtonProps) {
  const { signIn, isLoaded } = useSignIn();

  const signInWithGoogle = (): void => {
    signIn?.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: ssoCallbackAuthRoute,
      redirectUrlComplete: authRoute,
    });
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <Button
      onClick={signInWithGoogle}
      variant={buttonVariant}
      className={styles}
    >
      {image}
      {text}
    </Button>
  );
}

export default SignInOAuthButton;
