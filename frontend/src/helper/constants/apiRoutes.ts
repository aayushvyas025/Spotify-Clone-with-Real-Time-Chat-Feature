
const apiRoutes = Object.freeze({
    authentication: {
        LOGIN:`/auth/signup-callback`
    },
    albums: {
        FETCH_ALBUMS:`/albums`
    }
}as const); 

export default apiRoutes; 