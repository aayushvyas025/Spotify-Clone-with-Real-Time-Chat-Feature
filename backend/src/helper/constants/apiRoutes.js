const apiRoutes = Object.freeze({
  baseURL: `/groove-box/api/v1`,
  admin:{
    CREATE_SONGS:`/admin/songs/create`,
    DELETE_SONGS:`/admin/songs/:id`,
    CREATE_ALBUMS:`/admin/album/create`,
    DELETE_ALBUMS:`/admin/album/:id`,
    CHECK_ADMIN:`/admin/album/check`
   
  },
  albums:{
    GET_ALBUMS:`/albums`,
    GET_ALBUMS_BY_ID:`/albums/:id`
  },
  users: {},
  auth: {
    AUTH_CLERK_CALLBACK:`/auth/signup-callback`,
  },
  songs:{
    GET_SONGS:`/songs`,
    GET_FEATURED_SONGS:`/songs/featured`,
    GET_MADE_FOR_YOU_SONGS:`/songs/made-for-you`,
    GET_TRENDING_SONGS:`/songs/trending`
  }
});

export default apiRoutes;
