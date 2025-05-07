import { teamData } from "@/components/AboutPage/teamData";
import ScheduleTour from "@/components/Homepage/ScheduleTour";
import Image from "next/image";
import { FunctionComponent, ReactElement } from "react";
import images from "../../public/images";
import styles from '../styles/aboutUs.module.scss';

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = (): ReactElement => {

    // const teamData = [
    //     {
    //         name: 'Mr. Moyosola Niran-Oladunni',
    //         role: 'Vice Chairman, Ala Resort Ltd.',
    //         image: images.moyosolaNiran,
    //     },
    //     {
    //         name: 'Chief Wole Olanipekun, SAN',
    //         role: 'Board Chairman, Ala Resort Ltd.',
    //         image: images.woleSan,
    //     },
    //     {
    //         name: 'Architect, Bunmi Ilori',
    //         role: 'Non Executive Director, Ala Resort Ltd.',
    //         image: images.teamAvatar,
    //     },
    //     {
    //         name: 'Niyi Odetoye fnitp, rtp',
    //         role: 'Non Executive Director, Ala Resort Ltd.',
    //         image: images.teamAvatar,
    //     },
    //     {
    //         name: 'Mr. Oluwaseyi Adeyemo',
    //         role: 'Non Executive Director, Ala Resort Ltd.',
    //         image: images.teamAvatar,
    //     },
    //     {
    //         name: 'Mr. Edwin Evbie',
    //         role: 'Non Executive Director, Ala Resort Ltd.',
    //         image: images.teamAvatar,
    //     },
    //     {
    //         name: 'Mr. Gbenga Aiyemomi',
    //         role: 'Non Executive Director, Ala Resort Ltd.',
    //         image: images.teamAvatar,
    //     },
    // ]

    return (
        <div className={styles.aboutPage}>
            <div className={styles.heroSection}>
                <div className={styles.heroSection__backgroungImg}>
                    <Image src={images.aboutBg} alt="hero" />
                </div>
                <div className={styles.heroSection__textContent}>
                    <h2>About Us</h2>
                    <p>We are a dynamic and innovative development that integrates
                        an airport with a city, creating a hub of economic activity
                        and growth.</p>
                </div>
            </div>

            <div className={`${styles.bodyContent} container`}>
                <h2>About Ala Resort</h2>
                <div className={styles.info}>
                    <div className={styles.info__textArea}>
                        <p>The Resort is a unique, diverse, and integrated living environment where
                            residents have access to modern amenities while living directly in a pristine
                            parkland environment. The mixture of uses (including residential, commercial,
                            retail, sports, tourism, agricultural, educational, and leisure) creates an
                            integrated live-work-play environment. The residential offerings range
                            from single residential stands to high-density apartment living.
                            Strategically positioned along the major route that connects Western
                            Nigeria to the East, South-South, and Northern Nigeria, the Resort is
                            situated on 156.849 hectares of land about 95 km from the Osun - Osogbo
                            Sacred Grove –a UNESCO world heritage site in Osogbo, Osun State
                            and within 150km of eight other airports. </p>
                    </div>
                    <div className={styles.info__mediaArea}>
                        <Image src={images.logoGif} alt="alaGifTemp" />
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.info__textArea}>
                        <h4>Our Mission</h4>
                        <p>Akure Airport Aerotropolis Development Project, known as
                            &quot;Ala Resort,&quot; is to provide the community with thoughtfully
                            designed and expertly executed residential and commercial
                            developments. Our goal is to establish an eco-friendly and
                            dynamic community that encompasses diverse and
                            complementary activities, enabling individuals to work, learn,
                            shop, reside, dine, and enjoy entertainment within mere minutes
                            of the Akure airport terminals in Ondo State.</p>
                    </div>
                    <div className={styles.mediaArea}>
                        <div className={styles.mediaArea__videoElement}>
                            <Image src={images.beautifulCityChina1} alt="beautiful_city_china" />
                            {/* <div className={styles.videoController} onClick={togglePlay}>
                                {isPlaying ? <PauseIcon /> : <PlayIcon />}
                                <p>Watch Video</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <ScheduleTour />

            <div className={styles.bodyContent}>
                <div className={`${styles.info} ${styles.visionInfo} container`}>
                    <div className={styles.info__textArea}>
                        <h4>Our Vision</h4>
                        <p>To be a world-class Aerotropolis and offer a high quality of
                            life to all residents, workers, and travelers/visitors, connecting
                            people and businesses from all around the globe. Also, it is
                            estimated to catalyze additional investment in the State
                            and create thousands of direct and indirect jobs and build
                            a unique opportunity for businesses to thrive.</p>
                    </div>
                    <div className={styles.mediaArea}>
                        <div className={styles.mediaArea__videoElement}>
                            <Image src={images.SecurityGateHouse} alt="beautiful_city_china" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.teamArea} container`}>
                <h2>Meet the Team</h2>
                <div className={styles.teamArea__cards}>
                    {teamData.map((eachInfo, index) => (
                        <div className={styles.cards} key={index}>
                            <div className={styles.image}>
                                <Image src={eachInfo.image ?? images.teamAvatar} alt="moyosolaNiran" />
                            </div>
                            <h4>{eachInfo.name}</h4>
                            <p>{eachInfo.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;