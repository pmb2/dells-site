import {FunctionComponent} from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
    className?: string;
    onOpenQuoteForm: () => void;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
                                                                     className = "",
                                                                     onOpenQuoteForm,
                                                                 }) => {
    return (
        <section className={`${styles.homepageInner} ${className}`}>
            <header className={styles.frameParent}>
                <div className={styles.promptLuxuryDetailingWrapper}>
                    <a className={styles.promptLuxuryDetailing}>
                        Prompt Luxury Detailing
                    </a>
                </div>
                <nav className={styles.navigationWrapper}>
                    <nav className={styles.navigation}>
                        <a className={styles.services}>Services</a>
                        <a className={styles.pricing}>Pricing</a>
                        <a className={styles.about}>About</a>
                        <a className={styles.contact}>Contact</a>
                    </nav>
                </nav>
                <button className={styles.getAQuoteWrapper} onClick={onOpenQuoteForm}>
                    <a className={styles.getAQuote}>Get a quote</a>
                </button>
            </header>
        </section>
    );
};

export default FrameComponent4;