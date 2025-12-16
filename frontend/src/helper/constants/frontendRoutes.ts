const frontendRoutes = Object.freeze({
  homeRoute: `/`,
  authRoute: `/app-authentication`,
} as const satisfies Record<string, string>);

export default frontendRoutes;
