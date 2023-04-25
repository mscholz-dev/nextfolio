import React, { FC } from "react";
import { AppProps } from "next/app";
import "@/styles/main.scss";

const App: FC<AppProps> = ({
  Component,
  pageProps,
  router,
}) => {
  return (
    <Component
      {...pageProps}
      key={router.pathname}
    />
  );
};

export default App;
