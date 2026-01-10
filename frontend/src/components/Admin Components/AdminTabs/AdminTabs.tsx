import { TabsComponent } from "@/components/Helper Components";
import { applicationContent } from "@/helper";

const { adminPageContent } = applicationContent;
const { adminTabs } = adminPageContent;
const { songs, albums } = adminTabs;

function AdminTabs() {
  return <TabsComponent songTabTitle={songs} albumTabTitle={albums} />;
}

export default AdminTabs;
