import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { TabsComponentProps } from "@/types/interfaces/Admin/adminInterface";
import { Album, Music } from "lucide-react";

function TabsComponent({ songTabTitle, albumTabTitle }: TabsComponentProps) {
  return (
    <Tabs defaultValue={songTabTitle} className="space-y-6">
      <TabsList className="p-1 bg-zinc-800/50">
        <TabsTrigger
          value={songTabTitle}
          className="data-[state=active]:bg-zinc-700"
        >
          <Music className="size-4 mr-2" />
          {songTabTitle}
        </TabsTrigger>
        <TabsTrigger
          value={albumTabTitle}
          className="data-[state=active]:bg-zinc-700"
        >
          <Album className="size-4 mr-2" />
          {albumTabTitle}
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default TabsComponent;
