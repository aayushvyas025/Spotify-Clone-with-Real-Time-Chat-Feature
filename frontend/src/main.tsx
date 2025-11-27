import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { envVariables, helperFunctions } from "./helper";

const {clerkPublishableKey} = envVariables;
const {checkClerkPublishableKey} = helperFunctions;

checkClerkPublishableKey(clerkPublishableKey);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <App />
    </ClerkProvider>
  </StrictMode>
);
