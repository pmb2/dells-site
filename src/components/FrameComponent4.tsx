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
                <button className={styles.getAQuoteWrapper} onClick={onOpenQuoteForm}>
                    <a className={styles.getAQuote}>Get a quote</a>
                </button>
            </header>
        </section>
    );
};

export default FrameComponent4;