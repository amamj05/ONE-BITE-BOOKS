import "@/styles/globals.css";
import GlobalLayout from "@/components/global-layout";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
}

export default function App({ Component, pageProps
}: AppProps & {
  Component: NextPageWithLayout
}) {
  console.log(Component.getLayout)
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <GlobalLayout>
      {getLayout(<Component {...pageProps} />)}
    </GlobalLayout>
  );
}
