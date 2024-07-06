import {FunctionComponent} from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
    className?: string;
    onOpenQuoteForm: () => void;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
                                                                     className = "",
                                                                     onOpenQuoteForm,
                                                                 }) => {
    return (
        <section className={`${styles.homepageInner} ${className}`}>
            <div className={styles.ultimateDetailingExperienceParent}>
                <h1 className={styles.ultimateDetailingExperience}>
                    Ultimate Detailing Experience
                </h1>
                <div className={styles.experienceThePrestigeOfAPWrapper}>
                    <div className={styles.experienceThePrestigeContainer}>
                        <p className={styles.experienceThePrestige}>
                            Experience the prestige of a professionally detailed car,
                        </p>
                        <p className={styles.radiatingEleganceAnd}>
                            radiating elegance and refinement at every turn.
                        </p>
                    </div>
                </div>
                <div className={styles.frameWrapper}>
                    <div className={styles.frameParent} onClick={onOpenQuoteForm}>
                        <div className={styles.letsConnectWrapper}>
                            <div className={styles.letsConnect}>Let's connect</div>
                        </div>
                        <img
                            className={styles.connectIcon}
                            loading="lazy"
                            alt=""
                            src="/vector-11.svg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FrameComponent3;