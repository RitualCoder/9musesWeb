import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../lib/createEmotionCache";
import Head from "next/head";
import type { Session } from "next-auth";

const clientSideEmotionCache = createEmotionCache();
export interface ILocalProps extends AppProps {
  session: Session;
  emotionCache?: EmotionCache;
}

export default function App({ Component, pageProps }: AppProps) {
 const emotionCache = clientSideEmotionCache
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  );
}
