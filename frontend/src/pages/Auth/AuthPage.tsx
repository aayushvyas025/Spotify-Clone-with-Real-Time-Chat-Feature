import { Heading, Text } from "@/components/Helper Components";
import { Loader } from "@/components/Loader Components";
import { Card, CardContent } from "@/components/ui/card";
import { frontendRoutes } from "@/helper";
import { useFetchUserAuth } from "@/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const { homePageRoute } = frontendRoutes;

function AuthPage() {
  const { isLoaded, user, syncUser } = useFetchUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function checkAuth(): Promise<void> {
      const success = await syncUser();

      if (success) {
        navigate(homePageRoute);
      }
    }

    checkAuth();
  }, [isLoaded, user?.id]);

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

export default AuthPage;
