import Header from "../components/Header";
import Hero from "../sections/hero";
import About from "../sections/about";
import Technologies from "../sections/Technologies";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import HireMe from "../sections/HireMe";
import Contact from "../sections/Contact";

import Footer from "../components/footer";



function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
        <Technologies />
              <Skills />
      <Projects />
      <HireMe />
            <Contact />

      <Footer />

    </>
  );
}

export default Home;
