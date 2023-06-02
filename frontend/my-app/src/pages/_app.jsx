import "@/styles/globals.css";
import { MyAuthContext } from "@/context/MyAuthContext";

export default function App({ Component, pageProps }) {
  return (
    <MyAuthContext>
      <Component {...pageProps} />
    </MyAuthContext>
  );
}
