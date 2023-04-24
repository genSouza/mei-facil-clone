import { globalStyles } from "../styles/global";
import type { AppProps } from "next/app";
import { Header } from "@/components/Header/Index";
import { Footer } from "@/components/Footer/Index";
import { Layout } from "@/components/Layout/Index";
import { appWithTranslation } from "next-i18next";

globalStyles();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </main>
  );
};

export default appWithTranslation(App);
