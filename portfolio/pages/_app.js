import "../styles/globals.css";
import React from "react";
import Navbar from "./components/Navbar";
import Preloader from "./Preloader";
import Footer from "./components/Footer";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 3500);
  }, []);

  return (
    <>
      {!loading ? (
        <React.Fragment>
          <div className="flex w-full ">
            <div className="fixed inset-0 flex justify-center sm:px-8">
              <div className="flex w-full max-w-7xl lg:px-8">
                <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 shadow-2xl shadow-gray-500"></div>
              </div>
            </div>
            <div className="relative flex w-full flex-col">
              <Navbar />
              <Component {...pageProps} />
              <Footer />
            </div>
          </div>
        </React.Fragment>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default MyApp;
