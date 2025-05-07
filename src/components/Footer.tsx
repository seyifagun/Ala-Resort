import ToastCard from "@/cards/ToastCard";
import { emailRegex } from "@/constants/emailRegex";
import { ToastContext } from "@/extensions/toast";
import useResponsive from "@/hooks/useResponsiveness";
import { useCreateNewsletterSubscriber } from "@/pages/api/apiClient";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, FunctionComponent, ReactElement, useContext, useState } from "react";
import images from "../../public/images";
import styles from '../styles/Footer.module.scss';
import { regexExp } from "./constants/emailRegexText";
import { ArrowIcon, FacebookIcon, InstagramIcon, LinkedInIcon, LoaderIcon, LocationIcon, MailIcon, PhoneIcon, TwitterIcon, YoutubeIcon } from "./SVGs/SVGicons";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = (): ReactElement => {

    const onMobile = useResponsive();

    // const createNewsletterSubscriber = useCreateNewsletterSubscriber();

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState<string>();
    const [emailErrorMsg, setEmailErrorMsg] = useState(false);

    // The toast handler
    const toastHandler = useContext(ToastContext);

    function validateEmail(email?: string): boolean {
        if (!email) {
            return false;
        }
        return emailRegex.test(email);
    };

    async function submitEmail(e: FormEvent) {
        e.preventDefault();

        setIsLoading(true);


        if (validateEmail(email)) {
            // If email is valid and passes regex test 
            setEmailErrorMsg(false);
        } else {
            toastHandler?.logWarning('Unable to process request', 'Please input a valid email address');
            setIsLoading(false);
            setEmailErrorMsg(true);
            return;
        }

        const emailInfo = { email };

        // Log success
        toastHandler?.logSuccess('Successful', 'You have successfully subscribed to our newsletter'); 


        // Integrate API to create newsletter subscriber 
        // await createNewsletterSubscriber(emailInfo)
        //     .then((response) => {
        //         // If successful...
        //         if (response.data.successful) {

        //             // Set the result
        //             let result = response.data.result;

        //             // Log success
        //             toastHandler?.logSuccess('Successful', 'The email provided has been sent successfully');
        //         }
        //         // Otherwise...
        //         else {
        //             // Log error
        //             toastHandler?.logError('Failed', 'An error occurred while sending your email. Please try again');
        //         }

        //         console.log(response.data.result);

        //     })
        //     .catch((error) => {
        //         // Log the error
        //         console.error('Error:', error);

        //         // Log error
        //         toastHandler?.logError('Failed', 'An error occurred while sending your email. Please try again');
        //     });

        // Remove and replace with functionality to send request 
        setTimeout(() => {
            // Stop loader 
            setIsLoading(false);
            // Clear email field 
            setEmail('');
        }, 3000);

        return;
    }

    return (
        <div className={`${styles.footerContainer} container`}>
            {/* <><ToastCard visibility={true} messageType="Success" title="Error" timeout={100} description="Unable to fix up" /></>  */}
            <div className={styles.footerContainer__logoArea}>
                <div className={styles.topArea}>
                    <div className={styles.logo}>
                        <Image src={images.logo} alt="logo" />
                    </div>
                    <p>Creating a desired destination community that
                        supports hospitality, infrastructure, and utilities
                        in the host environment.</p>
                </div>
                <div className={styles.subscribeArea}>
                    <p>Subscribe to our Newsletter</p>
                    <form className={styles.subscribeArea__subscriptionForm}>
                        {!onMobile ?
                            <div className={styles.inputField}>
                                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email Address" />
                                {emailErrorMsg && <span className={styles.errorMsg}>Please input your email address</span>}
                            </div> :
                            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email Address" />
                        }
                        <button onClick={submitEmail}>{!onMobile && 'Subscribe'} {isLoading ? <LoaderIcon /> : <ArrowIcon />}</button>
                    </form>
                    {onMobile && emailErrorMsg && <span className={styles.errorMsg}>Please input your email address</span>}
                </div>
            </div>

            <div className={styles.footerContainer__exploreArea}>
                <h4>Explore</h4>
                <div className={styles.navLinks}>
                    <Link href='/'>
                        <li><ArrowIcon />Home</li>
                    </Link>
                    <Link href='/about-us'>
                        <li><ArrowIcon />About us</li>
                    </Link>
                    <Link href='/facilities'>
                        <li><ArrowIcon />Facilities</li>
                    </Link>
                    <Link href='/amenities'>
                        <li><ArrowIcon />Amenities</li>
                    </Link>
                    <Link href='/contact'>
                        <li><ArrowIcon />Contact us</li>
                    </Link>
                    <Link href='/faq'>
                        <li><ArrowIcon />FAQs</li>
                    </Link>
                    {/* <li><ArrowIcon />Blog</li> */}
                </div>
            </div>

            <div className={styles.footerContainer__contactArea}>
                <h4>Our Contacts</h4>
                <ul className={styles.contacts}>
                    <li>
                        <LocationIcon /> <p>Ondo State Airport</p>
                    </li>
                    <Link href='tel:+2347080780513'>
                        <li>
                            <PhoneIcon /> <p>0708 078 0513</p>
                        </li>
                    </Link>
                    <Link href='mailto:info@alaresortng.com'>
                        <li>
                            <MailIcon /> <p>info@alaresortng.com</p>
                        </li>
                    </Link>
                </ul>
                <div className={styles.socials}>
                    {onMobile && <span>Follow us</span>}
                    <span className={styles.icon}><FacebookIcon /></span>
                    <span className={styles.icon}><InstagramIcon /></span>
                    <span className={styles.icon}><YoutubeIcon /></span>
                    <span className={styles.icon}><TwitterIcon /></span>
                    <span className={styles.icon}><LinkedInIcon /></span>
                </div>
            </div>

            <p className={styles.rights}>All Rights Reserved</p>
        </div>
    );
}

export default Footer;