import React from "react";

import { AppProps } from "next/app";
import "../../styles/globals.css";

const SafeAppContents = ({ Component, pageProps }: AppProps) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  // Lock out users on old versions
  if (window?.yerba?.version < 0.1) {
    return <div>Please update your app</div>;
  }

  // // Lock out SSR and browser users
  // if (typeof window === "undefined" || !window?.yerba?.version) {
  //   return <div>Please use the app</div>;
  // }

  // Only render if top two conditions pass
  return <Component {...pageProps} />;
};

function MyApp(props: AppProps) {
  return <SafeAppContents {...props} />;
}

export default MyApp;
