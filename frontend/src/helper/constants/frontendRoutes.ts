const frontendRoutes = Object.freeze({
  homeRoute: `/`,
  chatPageRoute:`/chat`,
  albumPageRoute:`/album`,
  albumRoute:`/album/:id`,
  authRoute: `/app-authentication`,
  adminRoute:`/admin`,
  ssoCallbackAuthRoute:`/sso-callback`
} as const satisfies Record<string, string>);

export default frontendRoutes;
