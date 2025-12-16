import { API } from "@/config";

type HelperFunctions = {
 checkClerkPublishableKey : (publishableKey: string) => void, 
 updateApiToken:(givenToken:string | null) => void,
}

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
    }

}

export default helperFunctions; 