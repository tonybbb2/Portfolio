import Head from "next/head";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./Projects";
import Contact from "./components/Contact";
import profil from '../../portfolio/public/PRpic.png';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Tony Bui - Web developper</title>
        <meta name="description" content="Personal website - web developper" />
        <link rel='icon' href='/public/PRpic.png' type="image/png"/> {/* not working for now */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Sen:wght@400..800&display=swap" rel="stylesheet"></link>
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
