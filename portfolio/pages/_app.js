import '../styles/globals.css'
import React from 'react'
import Navbar from "./components/Navbar";
import Preloader from './Preloader';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 3500)
  }, [])

  return (
    <>
      {!loading ? (
        <React.Fragment>
          <Navbar />
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <Preloader />
      )}
    </>
  )
}

export default MyApp
