import { AppProps } from "next/app";
import CartContextProvider from "./contexts/CartContext";
import Layout from "./layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
  );
}
