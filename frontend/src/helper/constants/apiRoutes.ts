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
  },
  admin:{
    CREATE_SONGS:`/admin/songs/create`,
    DELETE_SONGS:`/admin/songs/:id`,
    CREATE_ALBUMS:`/admin/album/create`,
    DELETE_ALBUMS:`/admin/album/:id`,
    CHECK_ADMIN:`/admin/album/check`
   
  },
  songs:{
    GET_SONGS:`/songs`,
    GET_FEATURED_SONGS:`/songs/featured`,
    GET_MADE_FOR_YOU_SONGS:`/songs/made-for-you`,
    GET_TRENDING_SONGS:`/songs/trending`
  }
} as const);

export default apiRoutes;
