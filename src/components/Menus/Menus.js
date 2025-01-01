import React, { memo } from "react";
import img1 from "../../images/naveenpp2.webp";
import "./Menus.css";
import {
  FcContacts,
  FcFolder,
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcReadingEbook,
  FcDocument,
} from "react-icons/fc";
import { Link } from "react-scroll";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const NavLink = ({ to, icon, label }) => (
  <div className="nav-link">
    <Link to={to} spy={true} smooth={true} offset={-100} duration={100}>
      {icon}
      {label}
    </Link>
  </div>
);

const Menus = memo(({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navabr-proflie-pic">
              <img src={img1} alt="profile pic" loading="lazy" />
            </div>
          </Zoom>
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <NavLink to="home" icon={<FcHome />} label="Home" />
                <NavLink to="abou" icon={<FcAbout />} label="About" />
                <NavLink
                  to="education"
                  icon={<FcReadingEbook />}
                  label="Education"
                />
                <NavLink
                  to="techstack"
                  icon={<FcBiotech />}
                  label="Tech Stack"
                />
                <NavLink to="project" icon={<FcFolder />} label="Projects" />
                <NavLink
                  to="certifications"
                  icon={<FcDocument />}
                  label="Certifications"
                />
                <NavLink
                  to="work"
                  icon={<FcPortraitMode />}
                  label="Work Experience"
                />
                <NavLink
                  to="contact"
                  icon={<FcContacts />}
                  label="Contact Me"
                />
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <Fade left>
          <div className="nav-items">
            <div className="nav-item">
              <NavLink to="home" icon={<FcHome title="Home" />} />
              <NavLink to="abou" icon={<FcAbout title="About" />} />
              <NavLink
                to="education"
                icon={<FcReadingEbook title="Education" />}
              />
              <NavLink to="techstack" icon={<FcBiotech title="Tech Stack" />} />
              <NavLink to="project" icon={<FcFolder title="Projects" />} />
              <NavLink
                to="certifications"
                icon={<FcDocument title="Certifications" />}
              />
              <NavLink
                to="work"
                icon={<FcPortraitMode title="Work Experience" />}
              />
              <NavLink to="contact" icon={<FcContacts title="Contact" />} />
            </div>
          </div>
        </Fade>
      )}
    </>
  );
});

export default Menus;
