import Image from "next/image";
import { FunctionComponent, ReactElement } from "react";
import images from "../../../public/images";
import styles from '../../styles/Home.module.scss';
import { ArrowIcon } from "../SVGs/SVGicons";

interface BlogAreaProps {

}

const BlogArea: FunctionComponent<BlogAreaProps> = (): ReactElement => {

    // const blogPosts = [
    //     {
    //         image: images.torontoStreetView1,
    //         title: 'The best Investment in Ala Resort',
    //         content: 'It has been recorded based on statistics, feedback and report that the best investment is...',
    //     }
    // ]

    return (
        <div className={`${styles.blogSection} container`}>
            <div className={styles.textArea}>
                <p>Our Blog Posts</p>
                <h4>The Future of Ala Resort</h4>
                {/* <p>Ala Resort is an exquisite Resort designed as a mixed, multi-sectoral
                    development in a fully integrated hub within the Akure Airport Aerotropolis
                    Development. We are a dynamic and innovative development that integrates an airport
                    with a city, creating a hub of economic activity and growth with necessary amenities</p> */}
            </div>
            <div className={styles.cardsSection}>
                {([...Array(3)]).map((each, index) => (
                    <div className={styles.eachCard} key={index}>
                        <div className={styles.imageArea}>
                            <Image src={images.torontoStreetView1} alt="toronto_street_view" />
                            <p>March 21, 2023</p>
                        </div>
                        <div className={styles.textContents}>
                            <h5>The best Investment in Ala Resort</h5>
                            <p>It has been recorded based on statistics, feedback and report that the best investment is...</p>
                            <button>Continue reading <ArrowIcon /></button>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.actionBtn}>
                <button>Go to Blog <ArrowIcon /></button>
            </div>
        </div>
    );
}

export default BlogArea;