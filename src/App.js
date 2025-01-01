import React, { Suspense, lazy } from "react";
import { BiCopyright } from "react-icons/bi";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import "./App.css";

const Layout = lazy(() => import("./components/Layout.js/Layout"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Education = lazy(() => import("./pages/Education/Education"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const TechStack = lazy(() => import("./pages/TechStack/TechStack"));
const WorkExp = lazy(() => import("./pages/WorkExp/WorkExp"));
const MobileNav = lazy(() => import("./components/MobileNav/MobileNav"));
const Certifications = lazy(() =>
  import("./pages/Certifications/Certifications")
);

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <MobileNav />
          <Layout />
          <div className="container">
            <About />
            <Education />
            <TechStack />
            <Projects />
            <Certifications />
            <WorkExp />
            <Contact />
          </div>
        </Suspense>
        <div className="footer pb-3 ms-5">
          <h4 className="text-center">
            Made With ❤️ Naveen Mishra <BiCopyright /> 2023
          </h4>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "black", borderRadius: "80px" }}
        alt="scrollup"
      />
    </>
  );
}

export default App;
