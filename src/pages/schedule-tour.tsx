import { ArrowIcon, InfoIcon } from "@/components/SVGs/SVGicons";
import { emailRegex } from "@/constants/emailRegex";
import Image from "next/image";
import { FormEvent, FunctionComponent, ReactElement, useContext, useState } from "react";
import images from "../../public/images";
import styles from '../styles/schedule-tour.module.scss';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import moment, { Moment } from "moment";
import { Modifier } from 'react-popper';
import { useCreateTourSchedule } from "./api/apiClient";
import { ToastContext } from "@/extensions/toast";

interface ScheduleTourProps {

}

const ScheduleTour: FunctionComponent<ScheduleTourProps> = (): ReactElement => {

    const createScheduleTour = useCreateTourSchedule();
    const toastHandler = useContext(ToastContext);

    // const { data: sess, status } = useSession();

    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [phoneNumber, setPhoneNumber] = useState<string>();

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<Moment>(moment());

    const [firstNameErrorMsg, setFirstNameErrorMsg] = useState(false);
    const [lastNameErrorMsg, setLastNameErrorMsg] = useState(false);
    const [emailErrorMsg, setEmailErrorMsg] = useState(false);
    const [phoneNumberErrorMsg, setPhoneNumberErrorMsg] = useState(false);
    const [dayErrorMsg, setDayErrorMsg] = useState(false);
    const [timeErrorMsg, setTimeErrorMsg] = useState(false);

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const handleTimeChange = (time: Moment | null) => {
        if (time) {
            setSelectedTime(time);
        }
    };

    const fields = {
        firstName,
        lastName,
        email,
        phoneNumber,
        selectedDate: moment(selectedDate, 'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ (z)').format('DD-MM-YYYY'),
        selectedTime: moment(selectedTime, 'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ (z)').format('DD-MM-YYYY')
    };

    function validateEmail(email?: string): boolean {
        if (!email) {
            return false;
        }
        return emailRegex.test(email);
    };

    async function validateFields(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!firstName && !lastName && !validateEmail(email) && (!phoneNumber || phoneNumber && phoneNumber.length < 11) && !selectedDate && !selectedTime) {
            setFirstNameErrorMsg(true);
            setLastNameErrorMsg(true);
            setEmailErrorMsg(true);
            setPhoneNumberErrorMsg(true);
            setDayErrorMsg(true);
            setTimeErrorMsg(true);
        }
        else {
            firstName ? setFirstNameErrorMsg(false) : setFirstNameErrorMsg(true);
            lastName ? setLastNameErrorMsg(false) : setLastNameErrorMsg(true);
            phoneNumber && phoneNumber.length >= 11 ? setPhoneNumberErrorMsg(false) : setPhoneNumberErrorMsg(true);
            validateEmail(email) ? setEmailErrorMsg(false) : setEmailErrorMsg(true);
            selectedDate ? setDayErrorMsg(false) : setDayErrorMsg(true);
            selectedTime ? setTimeErrorMsg(false) : setTimeErrorMsg(true);
        }

        console.log('fields:', fields);

        await createScheduleTour(fields)
            .then((response) => {
                // If successful...
                if (response.data.successful) {

                    // Set the result
                    let result = response.data.result;

                    // Log success
                    toastHandler?.logSuccess('Successful', 'The information provided has been sent successfully');
                }
                // Otherwise...
                else {
                    // Log error
                    toastHandler?.logError('Failed', 'An error occurred while sending the information. Please try again');
                }

                console.log(response.data.result);

            })
            .catch((error) => {
                // Log the error
                console.error('Error:', error);

                // Log error
                toastHandler?.logError('Failed', 'An error occurred while sending the information. Please try again');
            });

    }

    return (
        <section className={styles.scheduleTourPageBody}>
            <div className={styles.heroSection}>
                <div className={styles.heroSection__backgroungImg}>
                    <Image src={images.scheduleTourHeroBg} alt="hero" />
                </div>
                <div className={styles.heroSection__textContent}>
                    <h2>Schedule a<br /><span>Tour</span></h2>
                </div>
            </div>

            <div className={`${styles.scheduleTourPageBody__SubSection} container`}>
                <h2>Schedule a Tour</h2>
                <p>Fill in your details below to book a tour of the land for your project</p>
            </div>

            <form className="container" onSubmit={(e) => validateFields(e)}>
                <div className={styles.inputContainer}>
                    <div className={styles.inputArea}>
                        <label>First Name<span>*</span></label>
                        <input type='text' placeholder="Your First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        {firstNameErrorMsg && <p className={styles.errorMsg}><InfoIcon /> Please input your first name</p>}
                    </div>
                    <div className={styles.inputArea}>
                        <label>Last Name<span>*</span></label>
                        <input type='text' placeholder="Your Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        {lastNameErrorMsg && <p className={styles.errorMsg}><InfoIcon /> Please input your last name</p>}
                    </div>
                    <div className={styles.inputArea}>
                        <label>Email-address<span>*</span></label>
                        <input type='text' placeholder="Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {emailErrorMsg && <p className={styles.errorMsg}><InfoIcon /> Please input your email address</p>}
                    </div>
                    <div className={styles.inputArea}>
                        <label>Phone Number<span>*</span></label>
                        <input type='text' placeholder="Your Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        {phoneNumberErrorMsg && <p className={styles.errorMsg}><InfoIcon /> Please input your phone number</p>}
                    </div>
                    <div className={styles.inputArea}>
                        <label>Choose a day<span>*</span></label>
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="dd/MM/yyyy"
                        // popperModifiers={modifiers}
                        // maxDate="30/04/2023"
                        />
                        {/* <select onChange={(e) => setDay(e.target.value)}>
                            <option value=''>Select day</option>
                            <option value='Monday'>Monday</option>
                            <option value='Tuesday'>Tuesday</option>
                            <option value='Wednesday'>Wednesday</option>
                            <option value='Thursday'>Thursday</option>
                            <option value='Friday'>Friday</option>
                            <option value='Saturday'>Saturday</option>
                            <option value='Sunday'>Sunday</option>
                        </select> */}
                        {dayErrorMsg && <p className={styles.errorMsg}><InfoIcon /> Please select a day</p>}
                    </div>
                    <div className={styles.inputArea}>
                        <label>Choose a time<span>*</span></label>
                        <TimePicker
                            showSecond={false}
                            defaultValue={selectedTime}
                            onChange={handleTimeChange}
                        />

                        {/* <select onChange={(e) => setTime(e.target.value)}>
                            <option value=''>Select time</option>
                            {
                                ([...Array(12)]).map((each, index) => <option value={`${index + 1}:00 AM`} key={index}>{index + 1}:00 AM</option>)
                            }
                            {
                                ([...Array(12)]).map((each, index) => <option value={`${index + 1}:00 PM`} key={index}>{index + 1}:00 PM</option>)
                            }
                        </select> */}
                        {timeErrorMsg && <p className={styles.errorMsg}><InfoIcon /> Please select a time</p>}
                    </div>
                </div>
                <button>Schedule Tour <ArrowIcon /></button>
            </form>
        </section>
    );
}

export default ScheduleTour;