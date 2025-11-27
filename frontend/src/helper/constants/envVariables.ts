type envSecrets = {
    clerkPublishableKey:string
};


const envVariables:envSecrets = Object.freeze({
 clerkPublishableKey:import.meta.env.VITE_CLERK_PUBLISHABLE_KEY ?? ""
});

export default envVariables;