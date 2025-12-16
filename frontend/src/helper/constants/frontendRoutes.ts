const frontendRoutes = Object.freeze({
  homeRoute: `/`,
  authRoute: `/app-authentication`,
  adminRoute:`/admin`
} as const satisfies Record<string, string>);

export default frontendRoutes;
