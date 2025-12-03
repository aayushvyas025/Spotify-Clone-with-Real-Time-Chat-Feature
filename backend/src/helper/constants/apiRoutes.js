const apiRoutes = Object.freeze({
  baseURL: `/groove-box/api/v1`,
  admin:{
    CREATE_SONGS:`/admin/songs/create`,
    DELETE_SONGS:`/admin/songs/:id`,
    CREATE_ALBUMS:`/admin/album/create`,
    DELETE_ALBUMS:`/admin/album/:id`,
    CHECK_ADMIN:`/admin/album/check`
   
  },
  users: {},
  auth: {
    AUTH_CLERK_CALLBACK:`/auth/signup-callback`,
  },
});

export default apiRoutes;
