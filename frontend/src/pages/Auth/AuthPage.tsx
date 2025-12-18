import { Heading, Loader, Text } from "@/components";
import { Card, CardContent } from "@/components/ui/card";
import { API } from "@/config";
import { apiRoutes, frontendRoutes } from "@/helper";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const { authentication } = apiRoutes;
const { LOGIN } = authentication;
const {homeRoute} = frontendRoutes;

function AuthRedirectCallbackPage() {
  const { isLoaded, user } = useUser();
  const navigate = useNavigate();
  const syncAttempted = useRef(false); 
  

  const syncUser = async (): Promise<void> => {
    try {
      if (!isLoaded || !user || syncAttempted.current) return;
      await API.post(LOGIN, {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        imageUrl: user.imageUrl,
      });
      syncAttempted.current = true; 
    } catch (error: any) {
      console.error(`Error While Syncing with User ${error?.message}`);
    }finally {
      navigate(homeRoute)
    }
  };

  useEffect(() => {
    syncUser();
  }, [isLoaded, user, navigate]);
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <Card className="w-[90%] max-w-md bg-zinc-900 border-zinc-800">
        <CardContent className="flex flex-col items-center gap-4 pt-6">
          <Loader styles={"size-6 text-emerald-500 animate-spin"} />
          <Heading
            headingLevel="h3"
            title="Logging you in "
            styles="text-zinc-400 text-xl font-bold "
          >
            <Text
              textType="p"
              styles="text-zinc-400 text-sm mt-4"
              text="Redirecting..."
            />
          </Heading>
        </CardContent>
      </Card>
    </div>
  );
}

export default AuthRedirectCallbackPage;
