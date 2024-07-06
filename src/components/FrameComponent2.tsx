import {FunctionComponent} from "react";
import DetailingOptions from "./DetailingOptions";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
    className?: string;
    onOpenQuoteForm: () => void;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
                                                                     className = "",
                                                                     onOpenQuoteForm,
                                                                 }) => {
    return (
        <section className={`${styles.frameParent} ${className}`}>
            <div className={styles.ellipseParent}>
                <div className={styles.frameChild}/>
                <img
                    className={styles.subtractIcon}
                    loading="lazy"
                    alt=""
                    src="/subtract.svg"
                />
            </div>
            <div className={styles.frameWrapper}>
                <div className={styles.frameGroup}>
                    <div className={styles.luxuryDetailingCardParent}>
                        <div className={styles.luxuryDetailingCard}>
                            <input
                                className={styles.luxuryCarDetailing}
                                placeholder="Luxury car detailing"
                                type="text"
                            />
                            <div className={styles.luxuryDetailingCardChild}/>
                        </div>
                        <div className={styles.loveDetailCard}>
                            <h1 className={styles.loveInEvery}>Love in Every Detail</h1>
                            <div className={styles.immerseYourselfIn}>
                                Immerse yourself in luxury with our bespoke detailing packages
                                tailored to your car's unique needs.
                            </div>
                        </div>
                    </div>
                    <div className={styles.detailingOptionsCard}>
                        <DetailingOptions
                            rectangle5="/rectangle-5@2x.png"
                            entryLevelDetail="Entry level detail"
                            treatYourLuxuryCarToAThor="Treat your luxury car to a thorough hand wash and wax application."
                            onOpenQuoteForm={onOpenQuoteForm}
                        />
                        <DetailingOptions
                            rectangle5="/rectangle-6@2x.png"
                            entryLevelDetail="Maintenance detail"
                            treatYourLuxuryCarToAThor="Ensure your car's longevity with a periodic exterior protection treatment."
                            onOpenQuoteForm={onOpenQuoteForm}
                        />
                        <DetailingOptions
                            rectangle5="/rectangle-4@2x.png"
                            entryLevelDetail="Full detail"
                            treatYourLuxuryCarToAThor="Pamper your vehicle with a complete treatment, leaving no detail overlooked."
                            onOpenQuoteForm={onOpenQuoteForm}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FrameComponent2;