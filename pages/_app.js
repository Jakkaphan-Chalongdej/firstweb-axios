import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import "../styles/style.css";
import { NextSeo } from "next-seo";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="ASTSHOP-ONLINE"
        description="Category: Shop ,Technology "
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
