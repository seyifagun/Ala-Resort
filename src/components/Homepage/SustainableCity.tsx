import Image from "next/image";
import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import images from "../../../public/images";
import styles from '../../styles/Home.module.scss';
import { ArrowCircleLeft, ArrowCircleRight, ArrowIcon } from "../SVGs/SVGicons";
import AOS from 'aos';
import useResponsive from "@/hooks/useResponsiveness";

interface SustainableCityProps {
    
} 

const SustainableCity: FunctionComponent<SustainableCityProps> = (): ReactElement => {
    useEffect(() => {
        AOS.init();
    }, []);

    const onMobile = useResponsive();


    const [activeIndex, setActiveIndex] = useState(0); 

    const handleLeftScroll = () => {
        // setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
        activeIndex == 0 && setActiveIndex(2);
        activeIndex == 1 && setActiveIndex(0);
        activeIndex == 2 && setActiveIndex(1);
    };

    const handleRightScroll = () => {
        // setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
        activeIndex == 0 && setActiveIndex(1);
        activeIndex == 1 && setActiveIndex(2);
        activeIndex == 2 && setActiveIndex(0);
    };

    return (
        <section className={`${styles.sustainanceSection} container`} id="sustainableCity" style={onMobile ? {paddingTop: '256px'} : {}}>
            <div className={styles.textArea} data-aos="fade-up">
                <p>Welcome to Ala Resort</p>
                <h4>Creating a Sustainable City</h4>
                <p>Ala Resort is an exquisite Resort designed as a mixed, multi-sectoral
                    development in a fully integrated hub within the Akure Airport Aerotropolis
                    Development. We are a dynamic and innovative development that integrates an airport
                    with a city, creating a hub of economic activity and growth with necessary amenities</p>
            </div>
            <div className={styles.carouselSection}>
                <div className={styles.carousel}>
                    <div className={`${styles.eachCard} ${activeIndex == 0 ? styles.active : ''}`}>
                        <div className={styles.eachCard__image}>
                            <Image src={activeIndex == 0 ? images.circulationInv : images.circulation} alt="circulation" />
                        </div>
                        <h5>Circulation</h5>
                        <p>Based on the projected energy need of the development, a hybrid power system consisting of a connection to the national grid through BEDC facilities and a backup power plant will be put in place to provide an adequate and reliable power supply that will meet the demands...</p>
                        <button>Read more <ArrowIcon /></button>
                    </div>
                    <div className={`${styles.eachCard} ${activeIndex == 1 ? styles.active : ''}`}>
                        <div className={styles.eachCard__image}>
                            <Image src={images.waterSystem} alt="powerSupply" />
                        </div>
                        <h5>Water supply</h5>
                        <p>Raw water will be treated using conventional Water Treatment Plants (WTP) and stored in reservoirs located at an elevated point site and relying on gravity for water distribution within the scheme. The capacity of the water supply...</p>
                        <button>Read more <ArrowIcon /></button>
                    </div>
                    <div className={`${styles.eachCard} ${activeIndex == 2 ? styles.active : ''}`}>
                        <div className={styles.eachCard__image}>
                            <Image src={activeIndex == 2 ? images.sewageInv : images.sewage} alt="sewage" />
                        </div>
                        <h5>Sewage system</h5>
                        <p>A wastewater management strategy has been put in place to effectively treat and manage the wastewater generated within Ala Resort. A utility plot located along the eastern boundary of the project site has been earmarked for the installation of Sewage Treatment...</p>
                        <button>Read more <ArrowIcon /></button>
                    </div>
                </div>
                <div className={styles.indicators}>
                    <span onClick={handleLeftScroll}><ArrowCircleLeft /></span>
                    <span onClick={handleRightScroll}><ArrowCircleRight /></span>
                </div>
            </div>
        </section>
    );
}

export default SustainableCity;