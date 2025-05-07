import { faqs } from "@/components/FAQs/faqs";
import { ArrowDownIcon, ArrowIconFaq } from "@/components/SVGs/SVGicons";
import Image from "next/image";
import { FunctionComponent, ReactElement, useState } from "react";
import images from "../../public/images";
import styles from '../styles/faq.module.scss';

interface FaqProps {

}

const Faq: FunctionComponent<FaqProps> = (): ReactElement => {

    return (
        <section className={styles.faqPageBody}>
            <div className={styles.heroSection}>
                <div className={styles.heroSection__backgroungImg}>
                    <Image src={images.faqHeroBg} alt="FAQ Hero Bg" />
                </div>
                <div className={styles.heroSection__textContent}>
                    <h2>Frequently asked <span>questions</span></h2>
                </div>
            </div>

            <div className={`${styles.faqPageBody__SubSection} container`}>
                <h2>Some frequently asked questions</h2>

                <div className={`${styles.accordionSection} ${styles.tabs} container`}>
                    {/* {faqs.map((eachFAQ, index) =>
                        <div className={`${styles.accordionSection__each} ${faqStatus[index].active ? styles.active : ''}`}>
                            <div className={styles.questionArea}>
                                <p className={styles.question}>{eachFAQ.question}</p>
                                <span><ArrowDownIcon /></span>
                            </div>
                            <p className={styles.answer}>{eachFAQ.answer}</p>
                        </div>)} */}
                    {faqs.map((eachFAQ, index) =>
                        <div className={`${styles.accordionSection__each} ${styles.tab}`} key={index}>
                            <input type="radio" id={`rd${index + 1}`} name="rd" />
                            <label className={`${styles.questionArea} ${styles.tab_label}`} htmlFor={`rd${index + 1}`}>
                                <p className={styles.question}>{eachFAQ.question}</p>
                                <span><ArrowIconFaq /></span>
                            </label>
                            <div className={`${styles.answer} ${styles.tab_content}`}>{eachFAQ.answer}</div>
                        </div>)}
                    <div className={`${styles.accordionSection__each} ${styles.tab}`}> 
                        <input type="radio" id={`rd${faqs.length + 1}`} name="rd" />
                            <label htmlFor={`rd${faqs.length + 1}`} className={styles.tab_close}>Close all &times;</label>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Faq;