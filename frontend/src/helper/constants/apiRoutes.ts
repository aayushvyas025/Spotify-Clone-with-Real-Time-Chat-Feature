const apiRoutes = Object.freeze({
  authentication: {
    AUTH: `/auth/signup-callback`,
  },
  albums: {
    FETCH_ALBUMS: `/albums`,
    FETCH_ALBUMS_BY_ID: (id: string | undefined) => `/albums/${id}`,
  },
  users:{
    GET_USERS:`/users`
  }
} as const);

export default apiRoutes;
