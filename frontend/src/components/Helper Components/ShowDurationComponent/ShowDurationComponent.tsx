import { helperFunctions } from "@/helper";
import type { ShowDurationComponentProps } from "@/types/interfaces/helperComponentProps/helperComponentPropsInterface";

const {songDurationFormatter} = helperFunctions;

function ShowDurationComponent({
  givenDuration,
  styles,
}: ShowDurationComponentProps) {
  return <div className={styles}>{songDurationFormatter(givenDuration)}</div>;
}

export default ShowDurationComponent;
