import Head from "next/head";
import Main from "./components/Main";
import Recent from "./components/recent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tony Bui - Web developper</title>
        <meta name="description" content="Personal website - web developer" />
        <link rel="icon" href="/PRpic.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sen:wght@400..800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Main />
      <Recent/>
    </div>
  );
}
