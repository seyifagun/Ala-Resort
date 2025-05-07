import { CSSProperties, FunctionComponent, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useContext, useEffect, useState } from "react";
// import { AiOutlineClose, AiOutlineWarning, AiOutlineInfoCircle } from 'react-icons/ai';
// import { CheckOutlined } from '@ant-design/icons';
import styles from '../styles/ToastCard.module.scss';
import { ToastContext } from "../extensions/toast";
import useResponsive from "@/hooks/useResponsiveness";
import { CloseMenuIcon, OutlineCheckIcon, OutlineCloseIcon, OutlineInfoIcon, OutlineWarningIcon } from "@/components/SVGs/SVGicons";

interface ToastCardProps {
    visibility: Boolean;
    messageType: string;
    title: string;
    description: string;
    timeout: number;
}

function SuccessCard(props: { messageTitle: string | number | boolean; messageInfo: string | number | boolean; }) {

    const onMobile = useResponsive();

    //States for cards visibility
    const [visible, setVisibility] = useState(false);
    const hideCard = () => {
        setVisibility(!visible);
    }
    //Show and hide functions for the sidebar elements
    const show = () => {
        if (visible) {
            return `${styles.show}`
        } else {
            return `${styles.hide}`
        }
    }
    const hide = () => {
        if (visible) {
            return `${styles.hide}`
        } else {
            return `${styles.show}`
        }
    }
    return (
        <div className={onMobile ? `${styles.toastCard} ${styles.successCard} ${hide()} ` : `${styles.toastCardMobile} ${styles.successCardMobile} ${hide()} `}>
            <div className={styles.toastCard__messageType}>
                <div className={styles.indicatorSuccess}>
                    <div className={styles.indicatorSuccess__box}>
                        <OutlineCheckIcon />
                    </div>
                </div>
                <div className={styles.info}>
                    <h4 className={styles.info__title}>{props.messageTitle}</h4>
                    <p className={styles.info__description}>
                        {props.messageInfo}
                    </p>
                </div>
            </div>
            <button className={styles.closeCard} onClick={hideCard}>
                <OutlineCloseIcon />
            </button>
        </div>
    )
}

function InfoCard(props: { messageTitle: string | number | boolean; messageInfo: string | number | boolean; }) {
    //States for cards visibility
    const [visible, setVisibility] = useState(false);
    const hideCard = () => {
        setVisibility(!visible);
    }
    //Show and hide functions for the sidebar elements
    const show = () => {
        if (visible) {
            return `${styles.show}`
        } else {
            return `${styles.hide}`
        }
    }
    const hide = () => {
        if (visible) {
            return `${styles.hide}`
        } else {
            return `${styles.show}`
        }
    }
    return (
        <div className={`${styles.toastCard} ${styles.infoCard} ${hide()} `}>
            <div className={styles.toastCard__messageType}>
                <div className={styles.indicatorInfo}>
                    <div className={styles.indicatorInfo__box}>
                        <OutlineInfoIcon />
                    </div>
                </div>
                <div className={styles.info}>
                    <h4 className={styles.info__title}>{props.messageTitle} </h4>
                    <p className={styles.info__description}>
                        {props.messageInfo}
                    </p>
                </div>
            </div>
            <button className={styles.closeCard} onClick={hideCard}>
                <OutlineCloseIcon />
            </button>
        </div>

    )
}

function WarningCard(props: { messageTitle: string | number | boolean; messageInfo: string | number | boolean; }) {
    //States for cards visibility
    const [visible, setVisibility] = useState(false);
    const hideCard = () => {
        setVisibility(!visible);
    }
    //Show and hide functions for the sidebar elements
    const show = () => {
        if (visible) {
            return `${styles.show}`
        } else {
            return `${styles.hide}`
        }
    }
    const hide = () => {
        if (visible) {
            return `${styles.hide}`
        } else {
            return `${styles.show}`
        }
    }
    return (
        <div className={`${styles.toastCard} ${styles.warningCard} ${hide()} `}>
            <div className={styles.toastCard__messageType}>
                <div className={styles.indicatorWarning}>
                    <div className={styles.indicatorWarning__box}>
                        <OutlineWarningIcon />
                    </div>
                </div>
                <div className={styles.info}>
                    <h4 className={styles.info__title}>{props.messageTitle} </h4>
                    <p className={styles.info__description}>
                        {props.messageInfo}
                    </p>
                </div>
            </div>
            <button className={styles.closeCard} onClick={hideCard}>
                <OutlineCloseIcon />
            </button>
        </div>

    )
}

function ErrorCard(props: { messageTitle: string | number | boolean; messageInfo: string | number | boolean; }) {
    //States for cards visibility
    const [visible, setVisibility] = useState(false);
    const hideCard = () => {
        setVisibility(!visible);
    }
    //Show and hide functions for the sidebar elements
    const show = () => {
        if (visible) {
            return `${styles.show}`
        } else {
            return `${styles.hide}`
        }
    }
    const hide = () => {
        if (visible) {
            return `${styles.hide}`
        } else {
            return `${styles.show}`
        }
    }
    return (
        <div className={`${styles.toastCard} ${styles.dangerCard} ${hide()} `}>
            <div className={styles.toastCard__messageType}>
                <div className={styles.indicatorDanger}>
                    <div className={styles.indicatorDanger__box}>
                        <OutlineCloseIcon />
                    </div>
                </div>
                <div className={styles.info}>
                    <h4 className={styles.info__title}>{props.messageTitle}  </h4>
                    <p className={styles.info__description}>
                        {props.messageInfo}
                    </p>
                </div>
            </div>
            <button className={styles.closeCard} onClick={hideCard}>
                <OutlineCloseIcon />
            </button>
        </div>

    )
}

const ToastCard: FunctionComponent<ToastCardProps> = ({ messageType, description, title, visibility, timeout }): ReactElement => {

    // Fetch the toast context
    const toastHandler = useContext(ToastContext);

    /**
     * Closes the toast
     */
    function closeToast() {
        toastHandler?.closeToast();
    }

    useEffect(() => {
        let closeTimeout = setTimeout(() => {

            // Close the toast
            toastHandler?.closeToast();

        }, timeout);

        return () => {
            clearTimeout(closeTimeout);
        };
    }, [visibility]);

    // set style accoroding to message type 
    function setCardStyle() {
        if (messageType == 'Success') {
            return `${styles.successCard}`
        }
        if (messageType == 'Info') {
            return `${styles.infoCard}`
        }
        if (messageType == 'Warning') {
            return `${styles.warningCard}`
        }
        if (messageType == 'Error') {
            return `${styles.dangerCard}`
        }
    }
    function indicatorType() {
        if (messageType == 'Success') {
            return `${styles.indicatorsuccess}`
        }
        if (messageType == 'Info') {
            return `${styles.indicatorinfo}`
        }
        if (messageType == 'Warning') {
            return `${styles.indicatorwarning}`
        }
        if (messageType == 'Error') {
            return `${styles.indicatordanger}`
        }
    }
    function indicatorTitle() {
        if (messageType == 'Success') {
            return `${styles.titlesuccess}`
        }
        if (messageType == 'Info') {
            return `${styles.titleinfo}`
        }
        if (messageType == 'Warning') {
            return `${styles.titlewarning}`
        }
        if (messageType == 'Error') {
            return `${styles.titledanger}`
        }
    }
    function loaderSpan() {
        if (messageType == 'Success') {
            return `${styles.spansuccess}`
        }
        if (messageType == 'Info') {
            return `${styles.spaninfo}`
        }
        if (messageType == 'Warning') {
            return `${styles.spanwarning}`
        }
        if (messageType == 'Error') {
            return `${styles.spandanger}`
        }
    }
    function indicatorBox() {
        if (messageType == 'Success') {
            return `${styles.indicatorsuccess__box}`
        }
        if (messageType == 'Info') {
            return `${styles.indicatorinfo__box}`
        }
        if (messageType == 'Warning') {
            return `${styles.indicatorwarning__box}`
        }
        if (messageType == 'Error') {
            return `${styles.indicatordanger__box}`
        }
    }

    return (
        <>
            <div className={styles.container}>
                <div className={`${styles.toastCard} ${setCardStyle()} ${visibility ? styles.show : styles.hide}`}>
                    <div className={styles.toastCard__messageType}>
                        <div className={`${indicatorType()}`}>
                            <div className={`${indicatorBox()}`}>
                                {messageType == 'Success' && <OutlineCheckIcon />}
                                {messageType == 'Info' && <OutlineInfoIcon />}
                                {messageType == 'Warning' && <OutlineWarningIcon />}
                                {messageType == 'Error' && <OutlineCloseIcon />}
                            </div>
                        </div>
                        <div className={styles.info}>
                            <h4 className={`${styles.info__title} ${indicatorTitle()}`}>{title}</h4>
                            <p className={styles.info__description}>
                                {description}
                            </p>
                        </div>
                    </div>
                    <button className={styles.closeCard} onClick={closeToast}>
                        <CloseMenuIcon />
                    </button>
                    <span className={`${loaderSpan()}`} style={{'--loader-timer': `${timeout}ms`} as CSSProperties}></span> 
                </div>
            </div>
        </>
    );
}

export default ToastCard;