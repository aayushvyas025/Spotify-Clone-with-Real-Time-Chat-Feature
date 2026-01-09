import type { UseResponsiveLayoutReturn } from "@/types/interfaces/hooks/hooksInterface";
import { useLayoutEffect, useState } from "react";

function useResponsiveLayout():UseResponsiveLayoutReturn {
  const [mobileLayout, setMobileLayout] = useState(false);

  function checkMobileLayout():void {
    setMobileLayout(window.innerWidth < 768);
  }

  useLayoutEffect(() => {
    checkMobileLayout();
    window.addEventListener("resize", checkMobileLayout);

    return () => window.removeEventListener("resize", checkMobileLayout);
  }, []);

  return { mobileLayout };
}

export default useResponsiveLayout;
