import { Dispatch, FunctionComponent, ReactElement, SetStateAction } from "react";
import styles from '../../styles/popupcontainer.module.scss'

interface PopupContainerProps {
    setIsPopupVisible: Dispatch<SetStateAction<boolean>>
}

const PopupContainer: FunctionComponent<PopupContainerProps> = ({ setIsPopupVisible }): ReactElement => {
    return (
        <div className={styles.popupContainer}>
            <div className={styles.overlay} onClick={() => setIsPopupVisible(false)}></div>
            <div className={styles.videoArea}>
                <iframe width='100%' height='100%'
                    src="https://www.youtube.com/embed/t8GnUnTgsr4?autoplay=1&loop=1&mute=1">
                </iframe>
                <div className={styles.closeBtn} onClick={() => setIsPopupVisible(false)}>Close preview</div>
            </div>
        </div>
    );
}

export default PopupContainer;