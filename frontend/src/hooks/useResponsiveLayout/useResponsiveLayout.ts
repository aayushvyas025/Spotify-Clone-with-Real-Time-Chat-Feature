import { useState } from "react";

function useResponsiveLayout() {
 const [mobileLayout, setMobileLayout] = useState();

 return {mobileLayout, setMobileLayout}
}


export default useResponsiveLayout;