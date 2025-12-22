
const apiRoutes = Object.freeze({
    authentication: {
        AUTH:`/auth/signup-callback`
    },
    albums: {
        FETCH_ALBUMS:`/albums`
    }
}as const); 

export default apiRoutes; 