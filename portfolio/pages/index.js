import Head from "next/head";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./Projects";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Tony Bui</title>
        <meta name="description" content="@Generated by create next app" />
        <link rel="icon" type="image/x-icon" href="/portfolio/public/vercel.svg" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
