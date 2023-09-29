import { AppProps } from "next/app";
import CartContextProvider from "./contexts/CartContext";
import Layout from "./layout";
import { GlobalStyle } from "./GlobalStyle.style";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
  );
}
