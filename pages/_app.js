import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
