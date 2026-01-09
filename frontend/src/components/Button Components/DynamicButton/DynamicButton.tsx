import { Button } from '@/components/ui/button'
import type { DynamicButtonProps } from '@/types/interfaces/buttons/buttonsInterface'


function DynamicButton({styles, onClickHandler, btnVariant="ghost", btnIcon}:DynamicButtonProps) {
  return (
    <Button variant={btnVariant} className={styles} onClick={onClickHandler}>{btnIcon}</Button>
  )
}

export default DynamicButton