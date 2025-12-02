const apiRoutes = Object.freeze({
  baseURL: `/groove-box/api/v1`,
  admin:{
    CREATE_SONGS:`/admin/create-songs`
   
  },
  users: {},
  auth: {
    AUTH_CLERK_CALLBACK:`/auth/signup-callback`,
  },
});

export default apiRoutes;
