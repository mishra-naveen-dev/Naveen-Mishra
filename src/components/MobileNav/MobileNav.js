import React, { useState, memo, useCallback } from 'react';
import './MobileNav.css';
import { ImMenu3, ImMenu4 } from 'react-icons/im';
import { FcContacts, FcFolder, FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReadingEbook, FcDocument } from 'react-icons/fc';
import { Link } from 'react-scroll';

const NavLink = ({ to, icon, label, onClick }) => (
    <div className="nav-link">
        <Link to={to} spy={true} smooth={true} offset={-100} duration={100} onClick={onClick}>
            {icon}{label}
        </Link>
    </div>
);

const MobileNav = memo(() => {
    const [open, setOpen] = useState(false);

    const handleOpen = useCallback(() => {
        setOpen(prevOpen => !prevOpen);
    }, []);

    const handleMenuClick = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <div className="mobile-nav">
            <div className="mobile-nav-header">
                {open ? (
                    <ImMenu4 size={40} className="moblie-nav-icon" onClick={handleOpen} />
                ) : (
                    <ImMenu3 size={40} className="moblie-nav-icon" onClick={handleOpen} />
                )}
                <span className="mobile-nav-title">My Portfolio App</span>
            </div>

            {open && (
                <div className="mobile-nav-menu">
                    <div className="nav-items">
                        <div className="nav-item">
                            <NavLink to="home" icon={<FcHome />} label="Home" onClick={handleMenuClick} />
                            <NavLink to="abou" icon={<FcAbout />} label="About" onClick={handleMenuClick} />
                            <NavLink to="education" icon={<FcReadingEbook />} label="Education" onClick={handleMenuClick} />
                            <NavLink to="techstack" icon={<FcBiotech />} label="Tech Stack" onClick={handleMenuClick} />
                            <NavLink to="project" icon={<FcFolder />} label="Projects" onClick={handleMenuClick} />
                            <NavLink to="certifications" icon={<FcDocument />} label="Certifications" onClick={handleMenuClick} />
                            <NavLink to="work" icon={<FcPortraitMode />} label="Work Experience" onClick={handleMenuClick} />
                            <NavLink to="contact" icon={<FcContacts />} label="Contact Me" onClick={handleMenuClick} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
});

export default MobileNav;