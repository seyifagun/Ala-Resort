import Image from "next/image";
import { FunctionComponent, ReactElement } from "react";
import images from "../../../public/images";
import styles from '../../styles/Home.module.scss';

interface OrganizationsProps {
    
}
 
const Organizations: FunctionComponent<OrganizationsProps> = ():ReactElement => {
    return ( 
        <section className={`${styles.organizationsSection} container`}>
            <div className={styles.organizationsSection__logos}>
                <div className={styles.eachLogo}>
                    <Image src={images.faanLogo} alt="aerotropolisLogo" />
                </div>
                <div className={styles.eachLogo}>
                    <Image src={images.IDCLogo} alt="aerotropolisLogo" />
                </div>
                {/* <div className={styles.eachLogo}>
                    <Image src={images.cubeHub} alt="cubeHub" />
                </div>
                <div className={styles.eachLogo}>
                    <Image src={images.cubeHub2} alt="cubeHub" />
                </div> */}
            </div>
        </section>
     );
}
 
export default Organizations;