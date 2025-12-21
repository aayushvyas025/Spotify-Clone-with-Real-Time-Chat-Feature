import { AdminRoutes, AuthRoutes, HomeRoutes } from "@/routes";


function MainRoutes() {
  return (
    
    <>
      <AuthRoutes />
      <HomeRoutes/>
      <AdminRoutes/>
    </>
  );
}

export default MainRoutes;
