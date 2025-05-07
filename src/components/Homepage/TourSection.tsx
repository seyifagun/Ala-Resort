import Image from "next/image";
import { Dispatch, FunctionComponent, ReactElement, SetStateAction, useEffect, useRef, useState } from "react";
import images from "../../../public/images";
import styles from '../../styles/Home.module.scss';
import { NewTabIcon, PauseIcon, PlayIcon } from "../SVGs/SVGicons";

interface TourSectionProps {
    setIsPopupVisible: Dispatch<SetStateAction<boolean>>
}

const TourSection: FunctionComponent<TourSectionProps> = ({ setIsPopupVisible }): ReactElement => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current?.paused) {
            videoRef.current?.play();
            setIsPlaying(true);
        } else {
            videoRef.current?.pause();
            setIsPlaying(false);
        }
    };

    // const iframe = document.getElementById('myIframe') as HTMLIFrameElement;
    // const iframeWindow = iframe.contentWindow;
    // let video: HTMLVideoElement;

    // useEffect(() => {
    //     // wait for iframe to load
    //     iframe.onload = () => {
    //         if (iframeWindow) {
    //             const iframeDoc = iframe.contentWindow.document;
    //             video = iframeDoc.getElementsByTagName('video')[0];
    //         }
    //     };
    // }, []);

    // function unmute() {
    //     // unmute video
    //     video.muted = false;
    // }

    return (
        <section className={`${styles.tourSection} container`}>
            <div className={styles.textArea}>
                <h3>Take a quick tour to
                    see the beauty of the
                    eco-friendly and Vibrant City</h3>
                <p>The project tagged “ALA RESORT” seeks to create an eco-friendly and vibrant community of diverse and complementary uses cutting across;  Residential neighbourhoods supplemented by public open space, civic, ancillary commercial facilities etc, an 18-hole golf course plus other commercial, leisure, and entertainment facilities; and an industrial enclave supporting typical light industrial and logistics activities.</p>
            </div>
            <div className={styles.mediaArea}>
                <div className={styles.mediaArea__videoElement}>
                    {/* <Image src={images.beautifulCityChina1} alt="beautiful_city_china" /> */}
                    {/* <video src="https://res.cloudinary.com/dxwpajciu/video/upload/v1679660643/toronto_vid_m9enki.mp4" ref={videoRef} /> */}
                    <iframe width='100%' height='100%'
                        src="https://www.youtube.com/embed/t8GnUnTgsr4?autoplay=1&&showinfo=0&loop=1&mute=1">
                    </iframe>
                    <div className={styles.videoController} onClick={() => setIsPopupVisible(true)}>
                        {/* {isPlaying ? <PauseIcon /> : <PlayIcon />} */}
                        <span> <NewTabIcon /></span>
                        <p>Open fullscreen</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TourSection;