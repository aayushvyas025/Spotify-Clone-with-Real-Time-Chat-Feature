import { Loader as LoaderComponent } from "lucide-react"

function Loader({styles}:{styles?:string}) {
  return (
    <LoaderComponent className={styles} />
  )
}

export default Loader;