import useResponsive from "@/hooks/useResponsiveness";
import Image from "next/image";
import { FunctionComponent, ReactElement } from "react";
import images from "../../../public/images";
import styles from '../../styles/Home.module.scss';
import { ArrowIcon } from "../SVGs/SVGicons";

interface ProjectsProps {

}

const Projects: FunctionComponent<ProjectsProps> = (): ReactElement => {

    const onMobile = useResponsive();

    return (
        <section className={`${styles.projectsSection} container`}>
            <div className={styles.textArea}>
                <p>Our Projects</p>
                <h4>Establishing a Functional, Receptive,
                    and Live-able Urban Structure</h4>
                <p>Our development features state-of-the-art infrastructure and world-class amenities, including business parks, logistics centres, retail areas, hotels, residential complexes among others</p>
            </div>
            <div className={styles.projectCardsSection}>
                <div className={styles.eachCards}>
                    <Image src={images.GolfCourse2} alt="golfBall" />
                    <span>Golf Course <ArrowIcon /></span>
                </div>
                <div className={styles.eachCards}>
                    <Image src={images.RetailCentre} alt="golfCourse" />
                    <span>Business Park <ArrowIcon /></span>
                </div>
                <div className={styles.eachCards}>
                    <Image src={images.CommunityMedicalCentre} alt="golfCourse" />
                    <span>Health Care <ArrowIcon /></span>
                </div>
            </div>
            
            {/* <div className={styles.projectCardsSection}>
                <div className={styles.eachCards}>
                    <Image src={images.HighDensityArea} alt="golfBall" />
                    <span>High Density Area<ArrowIcon /></span>
                </div>
                <div className={styles.eachCards}>
                    <Image src={images.LowDensityArea} alt="golfCourse" />
                    <span>Low Density Area <ArrowIcon /></span>
                </div>
                <div className={styles.eachCards}>
                    <Image src={images.MediumDensityArea} alt="golfCourse" />
                    <span>Medium Density Area <ArrowIcon /></span>
                </div>
            </div> */}

            {/* <div className={styles.button}>
                <button>See more <ArrowIcon /></button>
            </div> */}
        </section>
    );
}

export default Projects;