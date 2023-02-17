import { globalStyles } from "../styles/global";
import type { AppProps } from "next/app";
import { Header } from "@/components/Header/Index";
import { Footer } from "@/components/Footer/Index";
import { Layout } from "@/components/Layout/Index";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </main>
  );
}
