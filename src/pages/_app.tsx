import { globalStyles } from "../styles/global";
import type { AppProps } from "next/app";
import { Header } from "@/components/Header/Index";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
