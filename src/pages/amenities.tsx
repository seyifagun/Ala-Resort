import ScheduleTour from "@/components/Homepage/ScheduleTour";
import Image from "next/image";
import { FunctionComponent, ReactElement, useEffect } from "react";
import images from "../../public/images";
import styles from '../styles/amenities.module.scss';
import AOS from 'aos';
import { amenities } from "@/components/AmenitiesPage/amenities";

interface AmenitiesProps {

}

const Amenities: FunctionComponent<AmenitiesProps> = (): ReactElement => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className={styles.amenitiesPageBody}>
            <div className={styles.heroSection}>
                <div className={styles.heroSection__backgroungImg}>
                    <Image src={images.amenities} alt="hero" />
                </div>
                <div className={styles.heroSection__textContent} data-aos="fade-left">
                    <h2>Our Amenities</h2>
                    <p>Our development features state-of-the-art infrastructure and world-class
                        amenities, including business parks, logistics centers, retail areas, hotels etc. </p>
                </div>
            </div>
            <div className={styles.amenitiesSubSection}>
                <h2 data-aos="fade-up">Amenities in Ala Resort</h2>
            </div>
            <div className={`${styles.cardsArea} container`}>
                {amenities.map((each, index) => (
                    <div className={styles.eachCard} key={index} data-aos="fade-up">
                        <div className={styles.image} data-aos="zoom-in">
                            <Image src={images.powerSupply} alt="power supply" />
                        </div>
                        <h4 data-aos="fade-down">{each.name}</h4>
                        <p data-aos="fade-left">{each.subText}</p>
                    </div>
                ))}
            </div>
            <ScheduleTour />
        </section>
    );
}

export default Amenities;