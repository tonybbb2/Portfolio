import "../styles/globals.css";
import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Navbar from "./components/Navbar";
import Preloader from "./Preloader";
import Footer from "./components/Footer";
import Head from "next/head";
import { Suspense } from "react";
import Load from "./components/Load";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [render, setRender] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 5500);

    router.events.on("routeChangeStart", (url) => {
      setRender(true);
    });

    router.events.on("routeChangeComplete", (url) => {
      setRender(false);
    });
  }, [router.events]);

  return (
    <>
      {!loading ? (
        <Fragment>
          <Suspense>
            <Head>
              <title>Tony Bui - Web developper</title>
              <meta
                name="description"
                content="Personal website - web developer"
              />
              <link rel="icon" href="/PRpicTransparent.png" type="image/png" />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossorigin
              />
              <link
                href="https://fonts.googleapis.com/css2?family=Sen:wght@400..800&display=swap"
                rel="stylesheet"
              ></link>
            </Head>
            <div className="flex w-full bg-white dark:bg-[#040406]">
              <div className="fixed inset-0 flex justify-center sm:px-8">
                <div className="flex w-full max-w-7xl lg:px-8">
                  <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 shadow-2xl shadow-gray-500"></div>
                </div>
              </div>
              <div className="relative flex w-full flex-col">
                <Navbar />
                {render ? (
                  <Load />
                ) : (
                  <Component {...pageProps} />
                )}
                <Footer />
              </div>
            </div>
          </Suspense>
        </Fragment>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default MyApp;
