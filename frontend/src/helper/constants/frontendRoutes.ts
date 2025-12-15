
type RoutesType = {
 homeRoute:string,
 authRoute:string
}

const frontendRoutes:RoutesType = Object.freeze({
    homeRoute:`/`,
    authRoute:`/app-authentication`

}); 

export default frontendRoutes; 