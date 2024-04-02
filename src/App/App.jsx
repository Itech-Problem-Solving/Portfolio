/*
   Copyright (C), 2024-2025, Roman Liakhovych (architectNinja)
     @author Roman Liakhovych
     FileName: index.html
     @version: I
     Creation: 02/06/2023
     Last modification: 03/06/2023
*/

import NavBar from "../Components/nav/NavBar";
import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
