const frontendRoutes = Object.freeze({
  homeRoute: `/`,
  chatPageRoute:`/chat`,
  authRoute: `/app-authentication`,
  adminRoute:`/admin`,
  ssoCallbackAuthRoute:`/sso-callback`
} as const satisfies Record<string, string>);

export default frontendRoutes;
