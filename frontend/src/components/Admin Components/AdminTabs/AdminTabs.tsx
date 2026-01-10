import { TabsComponent } from "@/components/Helper Components";
import { applicationContent } from "@/helper";

const { adminPageContent } = applicationContent;
const { adminTabs } = adminPageContent;
const { songs, albums } = adminTabs;

function AdminTabs() {
  return <TabsComponent song={songs} album={albums} />;
}

export default AdminTabs;
