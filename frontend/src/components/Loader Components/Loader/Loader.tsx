import type { LoaderProps } from "@/types/interfaces/loader/loaderInterface";
import { Loader as LoaderComponent } from "lucide-react";

function Loader({ styles }: LoaderProps) {
  return <LoaderComponent className={styles} />;
}

export default Loader;
