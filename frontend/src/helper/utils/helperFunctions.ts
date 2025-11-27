type HelperFunctions = {
 checkClerkPublishableKey : (publishableKey: string) => void, 
}

const helperFunctions:HelperFunctions = {
    checkClerkPublishableKey: (publishableKey:string) => {
        if(!publishableKey) {
            throw new Error('Missing Publishable Key')
        }

    }

}

export default helperFunctions; 