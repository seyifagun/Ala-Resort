import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, ReactElement } from "react";
import images from "../../../public/images";
import styles from '../../styles/Home.module.scss';
import { ArrowIcon } from "../SVGs/SVGicons";

interface ScheduleTourProps {

}

const ScheduleTour: FunctionComponent<ScheduleTourProps> = (): ReactElement => {
    return (
        <section className={styles.scheduleSection}>
            <div className={styles.backgroundImage}>
                <Image src={images.scheduleATourBg} alt="scheduleATourBg" />
            </div>
            <div className={`${styles.textContents} container`}>
                <h3>An aerotropolis city made <span>for you</span></h3>
                <Link href='/schedule-tour'>
                    <button>Schedule a tour <ArrowIcon /></button>
                </Link>
            </div>
        </section>
    );
}

export default ScheduleTour;