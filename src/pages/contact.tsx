import { regexExp } from "@/components/constants/emailRegexText";
import { ArrowIcon, InfoIcon, LoaderIcon, LocationIcon, MailIcon, PhoneIcon } from "@/components/SVGs/SVGicons";
import Image from "next/image";
import { FormEvent, FunctionComponent, ReactElement, useContext, useState } from "react";
import images from "../../public/images";
import styles from '../styles/contact.module.scss';
import axios from 'axios';
import { useCreateMessage } from "./api/apiClient";
import { ToastContext } from "@/extensions/toast";
interface ContactProps {

}

const Contact: FunctionComponent<ContactProps> = (): ReactElement => {

    const [isLoading, setIsLoading] = useState(false);

    const toastHandler = useContext(ToastContext);

    const createMessage = useCreateMessage();

    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [message, setMessage] = useState<string>();

    const [nameErrorMsg, setNameErrorMsg] = useState(false);
    const [emailErrorMsg, setEmailErrorMsg] = useState(false);
    const [messageErrorMsg, setMessageErrorMsg] = useState(false);

    const [emailTest, setEmailTest] = useState(false);
    // const emailTest = regexExp.test(email as string);

    const contactData = [
        {
            name: 'Address',
            text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do.',
            text2: null,
            icon: <LocationIcon />
        },
        {
            name: 'Phone Number',
            text: '+234 804 567 5343',
            text2: '+234 804 567 5343',
            icon: <PhoneIcon />
        },
        {
            name: 'Email Address',
            text: 'alaresort@gmail.com',
            text2: null,
            icon: <MailIcon />
        },
    ]

    // async function sendEmail() {
    //     const data = {
    //         to: 'simlexafol@gmail.com',
    //         subject: 'Test email',
    //         text: 'This is a test email.',
    //         html: '<p>This is a test email.</p>',
    //     };

    //     console.log('sending email');

    //     try {            
    //         const response = await axios.post('/api/sendMail', data);
    //         console.log(response.data.message);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    const handleSubmitMessage = async (e: FormEvent) => {
        e.preventDefault();

        setEmailTest(regexExp.test(email as string));

        // If name or email or message is not available 
        if (!name || !email || !message) {
            name ? setNameErrorMsg(false) : setNameErrorMsg(true);
            (email && emailTest) ? setEmailErrorMsg(false) : setEmailErrorMsg(true);
            message ? setMessageErrorMsg(false) : setMessageErrorMsg(true);
            return;
        } else {
            // If all fields are set 

            // Clsoe all error messages 
            setEmailErrorMsg(false);
            setNameErrorMsg(false);
            setMessageErrorMsg(false);

            ///TODO: Integrate API

            // Close loading state 
            setIsLoading(false);
        }

        const fields = {
            name, 
            email,
            message
        }

        // Integrate API to create message
        await createMessage(fields) 
            .then((response) => {
                // If successful...
                if (response.data.successful) {

                    // Set the result
                    let result = response.data.result;

                    // Log success
                    toastHandler?.logSuccess('Successful', 'Your message has been sent successfully');
                }
                // Otherwise...
                else {
                    // Log error
                    toastHandler?.logError('Failed', 'An error occurred while sending your message. Please try again');
                }

                console.log(response.data.result);

            })
            .catch((error) => {
                // Log the error
                console.error('Error:', error);

                // Log error
                toastHandler?.logError('Failed', 'An error occurred while sending your message. Please try again');
            });
    }

    return (
        <div className={styles.contactPage}>
            <div className={styles.heroSection}>
                <div className={styles.heroSection__backgroungImg}>
                    <Image src={images.aboutBg} alt="hero" />
                </div>
                <div className={styles.heroSection__textContent}>
                    <h2>Contact Us</h2>
                    <p>Reach out to us for important steps that will give you valuable
                        insights to help you make an informed decisions about our land
                        purchase process.</p>
                </div>
            </div>
            <div className={`${styles.contactSubSection} container`}>
                <h2>Our Contact</h2>
                <div className={styles.contactCards}>
                    {contactData.map((eachData, index) => (
                        <div className={styles.eachCard} key={index}>
                            <div className={styles.eachCard__top}>
                                {eachData.icon}
                                <p>{eachData.name}</p>
                            </div>
                            <div className={styles.eachCard_info}>
                                <p>{eachData.text}</p>
                                {eachData.text2 ? <p>{eachData.text2}</p> : <></>}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.messageArea}>
                    <h2>Send us a message</h2>

                    <form className="container" onSubmit={handleSubmitMessage}>
                        <div className={styles.inputArea}>
                            <label>Full Name<span>*</span></label>
                            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Full Name" />
                            {nameErrorMsg && <span className={styles.errorMsg}><InfoIcon /> Please input your full name</span>}
                        </div>
                        <div className={styles.inputArea}>
                            <label>Email-Address<span>*</span></label>
                            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email Address" />
                            {emailErrorMsg && <span className={styles.errorMsg}><InfoIcon /> Please input your email address</span>}
                        </div>
                        <div className={styles.inputArea}>
                            <label>Message<span>*</span></label>
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your message here..." />
                            {messageErrorMsg && <span className={styles.errorMsg}><InfoIcon /> Please input your message</span>}
                        </div>
                        <button>Send Message {isLoading ? <LoaderIcon /> : <ArrowIcon />}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;