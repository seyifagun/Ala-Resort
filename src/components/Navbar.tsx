import { FunctionComponent, ReactElement, useState } from "react";
import styles from '../styles/Navbar.module.scss';
import images from '../../public/images';
import Link from "next/link";
import Image from "next/image";
import useResponsive from "@/hooks/useResponsiveness";
import { ArrowIcon, CloseMenuIcon, HamburgerMenuIcon } from "./SVGs/SVGicons";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = (): ReactElement => {
    //#region hooks

    const onMobile = useResponsive();

    //#endregion

    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className={`${styles.navbarContainer} container`}>
            <div className={styles.navbarContainer__logo}>
                <Link href="/"><Image src={images.logo} alt="app__logo" /></Link>
            </div>
            {
                !onMobile ?
                    <div className={styles.navbarContainer__navLinksSection}>
                        <div className={styles.navLinks}>
                            <Link href='/'>
                                <li>Home</li>
                            </Link>
                            <Link href='/about-us'>
                                <li>About Us</li>
                            </Link>
                            <Link href='/facilities'>
                                <li>Facilities</li>
                            </Link>
                            <Link href='/amenities'>
                                <li>Amenities</li>
                            </Link>
                            <Link href='/contact'>
                                <li>Contact Us</li>
                            </Link>
                            {/* <li>Blog</li> */}
                        </div>
                        <Link href='/schedule-tour'>
                            <button>Schedule a tour</button>
                        </Link>
                    </div>
                    :
                    <div className={styles.navbarContainer__menuIcon} onClick={() => setIsNavOpen(true)}>
                        <HamburgerMenuIcon />
                    </div>
            }
            {isNavOpen &&
                <div className={styles.mobileNavContainer}>
                    <div className={styles.mobileNavContainer__topArea}>
                        <div className={styles.logo}>
                            <Link href="/"><Image src={images.logo} alt="app__logo" /></Link>
                        </div>
                        <div className={styles.closeIcon} onClick={() => setIsNavOpen(false)}>
                            <CloseMenuIcon />
                        </div>
                    </div>
                    <div className={styles.mobileNavContainer__navigationLinks}>
                        <div className={styles.navLinks}>
                            <Link href='/' onClick={() => setIsNavOpen(false)}>
                                <li>Home</li>
                            </Link>
                            <Link href='/about-us' onClick={() => setIsNavOpen(false)}>
                                <li>About Us</li>
                            </Link>
                            <Link href='/facilities' onClick={() => setIsNavOpen(false)}>
                                <li>Facilities</li>
                            </Link>
                            <Link href='/amenities' onClick={() => setIsNavOpen(false)}>
                                <li>Amenities</li>
                            </Link>
                            <Link href='/contact' onClick={() => setIsNavOpen(false)}>
                                <li>Contact Us</li>
                            </Link>
                            {/* <li>Blog</li> */}
                        </div>
                        <div className={styles.cta}>
                            <Link href='/schedule-tour' onClick={() => setIsNavOpen(false)}>
                                <button>Schedule a tour <ArrowIcon /></button>
                            </Link>
                        </div>
                    </div>
                </div>}
        </div>
    );
}

export default Navbar;