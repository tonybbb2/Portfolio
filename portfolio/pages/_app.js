import "../styles/globals.css";
import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Navbar from "./components/Navbar";
import Preloader from "./Preloader";
import Footer from "./components/Footer";
import Head from "next/head";
import { Suspense } from "react";
import Load from "./components/Load";
import { Sen } from "next/font/google";

const sen = Sen({
  subsets: ["latin"],
  variable: "--font-sen",
});

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
              <title>Tony Bui - Software Developer</title>
              <meta
                name="description"
                content="Personal Website - Software Developer"
              />
              <link rel="icon" href="/PRpicTransparent.png" type="image/png" />
            </Head>
            <div className={`${sen.variable} flex w-full bg-white dark:bg-[#040406]`}>
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
