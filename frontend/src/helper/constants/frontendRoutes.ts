const frontendRoutes = Object.freeze({
  homePageRoute: `/`,
  chatPageRoute:`/chat`,
  albumRoute:`/album`,
  albumPageRoute:`/album/:albumId`,
  authPageRoute: `/app-authentication`,
  adminPageRoute:`/admin`,
  ssoCallbackAuthRoute:`/sso-callback`
} as const satisfies Record<string, string>);

export default frontendRoutes;
