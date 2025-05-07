import { facilitiesTabItem } from "@/components/Facilities/FacilitiesTabItem";
import ScheduleTour from "@/components/Homepage/ScheduleTour";
import useResponsive from "@/hooks/useResponsiveness";
import Image from "next/image";
import { FunctionComponent, ReactElement, useState } from "react";
import images from "../../public/images";
import styles from '../styles/Facilities.module.scss';

interface FacilitiesProps {

}

const Facilities: FunctionComponent<FacilitiesProps> = (): ReactElement => {

    const onMobile = useResponsive();

    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={styles.facilitesPageBody}>
            <div className={styles.heroSection}>
                <div className={styles.heroSection__backgroungImg}>
                    <Image src={images.facilitiesBanner} alt="hero" />
                </div>
                <div className={styles.heroSection__textContent}>
                    <h2>Our Facilities</h2>
                    <p>Our development features state-of-the-art infrastructure and world-class
                        amenities, including business parks, logistics centers, retail areas, hotels etc. </p>
                </div>
            </div>
            <div className={styles.facitiesSubSection}>
                <h2>Facilities in Ala Resort</h2>
                <div className={`${styles.facitiesSubSection__detailsSection} container`}>
                    {!onMobile ?
                        <div className={styles.tabSection}>
                            <span></span>
                            {facilitiesTabItem.map((each, index) => (
                                <li
                                    className={activeTab == index ? styles.active : ''}
                                    key={index}
                                    onClick={() => setActiveTab(index)}>{each.tabName}</li>
                            ))}
                        </div> :
                        <div className={styles.mobileTabSection}>
                            <span></span>
                            {facilitiesTabItem.map((each, index) => (
                                <li
                                    className={activeTab == index ? styles.active : ''}
                                    key={index}
                                    onClick={() => setActiveTab(index)}>{each.tabName}</li>
                            ))}
                        </div>}
                    <div className={styles.contentSection}>
                        <p>{facilitiesTabItem[activeTab].content}</p>
                        <div className={styles.cardsArea}>
                            {facilitiesTabItem[activeTab].images.map((each, index) => (
                                <div className={styles.eachCard} key={index}>
                                    <Image src={each.src} alt="apartments" />
                                    <p>{each.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <ScheduleTour />
        </section>
    );
}

export default Facilities;