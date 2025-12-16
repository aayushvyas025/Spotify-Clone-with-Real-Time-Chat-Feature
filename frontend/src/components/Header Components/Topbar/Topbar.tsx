import {LinkComponent} from '@/components';
import { applicationContent, frontendRoutes } from '@/helper';

const {adminRoute} = frontendRoutes;
 const {topBarContent} = applicationContent;
 const { topBarLink} = topBarContent



function Topbar() {
    const isAdmin = false; 
  return (
    <div className='flex items-center justify-center p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10'>
        <div className='flex gap-2 items-center'>Groove Box</div>
        <div className="flex items-center gap-4">
            {isAdmin && (<>
             <LinkComponent href={adminRoute} content={topBarLink.adminTopBar} />
            </>)}
        </div>
    </div>
  )
}

export default Topbar