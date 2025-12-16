const envVariables = Object.freeze({
  clerkPublishableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY ?? "",
  backendUrl:
    import.meta.env.VITE_MODE === "development"
      ? import.meta.env.VITE_BACKEND_URL
      : "/groove-box/api/v1",
} as const satisfies {
  clerkPublishableKey: string;
  backendUrl: string;
});

export default envVariables;
