import { API } from "@/config";
import type { HelperFunctions } from "@/types/type/Helper/helperType";

const helperFunctions:HelperFunctions = {
    checkClerkPublishableKey: (publishableKey:string) => {
        if(!publishableKey) {
            throw new Error('Missing Publishable Key')
        }

    },
    updateApiToken:(givenToken:string | null) => {
        if(givenToken) {
            API.defaults.headers.common['Authorization'] = `Bearer ${givenToken}`
        }else {
           delete API.defaults.headers.common['Authorization']
        }
    },
    songDurationFormatter:(seconds:number) => { 
        const minutes = Math.floor(seconds / 60); 
        const remainingSeconds = seconds % 60;

      return `${minutes}:${remainingSeconds.toString().padStart(2,"0")}`
    }
}

export default helperFunctions; 