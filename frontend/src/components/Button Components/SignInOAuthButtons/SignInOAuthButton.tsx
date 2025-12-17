import { Button } from "@/components/ui/button";
import { frontendRoutes } from "@/helper";
import { useSignIn } from "@clerk/clerk-react";


interface SigninButton {
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  styles?: string;
  text?:string,
  image?:string,

}

const {authRoute, ssoCallbackAuthRoute} = frontendRoutes

function SignInOAuthButton({ buttonVariant, styles, text, image }: SigninButton) {
  const { signIn, isLoaded } = useSignIn();

   const signInWithGoogle = ():void => {
       signIn?.authenticateWithRedirect({
        strategy:"oauth_google",
        redirectUrl:ssoCallbackAuthRoute,
        redirectUrlComplete:authRoute

       })
 }

  if (!isLoaded) {
    return null;
  }

  return (
    <Button onClick={signInWithGoogle}  variant={buttonVariant} className={styles}>
      {image}
      {text} 
    </Button>
  );
}

export default SignInOAuthButton;
