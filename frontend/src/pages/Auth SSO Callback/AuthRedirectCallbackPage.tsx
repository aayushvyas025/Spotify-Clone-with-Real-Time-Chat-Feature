import { Loader } from "@/components";
import { Card, CardContent } from "@/components/ui/card";

function AuthRedirectCallbackPage() {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <Card className="w-[90%] max-w-md bg-zinc-900 border-zinc-800">
        <CardContent className="flex flex-col item-center gap-4 pt-6">
          <Loader styles={"size-6 text-emerald-500 animate-spin"} />
        </CardContent>
      </Card>
    </div>
  );
}

export default AuthRedirectCallbackPage;
