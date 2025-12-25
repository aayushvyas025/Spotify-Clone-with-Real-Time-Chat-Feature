const apiRoutes = Object.freeze({
  authentication: {
    AUTH: `/auth/signup-callback`,
  },
  albums: {
    FETCH_ALBUMS: `/albums`,
    FETCH_ALBUMS_BY_ID: (id: string) => `/albums/${id}`,
  },
} as const);

export default apiRoutes;
