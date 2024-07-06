import {FunctionComponent} from "react";
import FrameComponent1 from "./FrameComponent1";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
    className?: string;
    onOpenQuoteForm: () => void;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
                                                                   className = "",
                                                                   onOpenQuoteForm,
                                                               }) => {
    return (
        <section className={`${styles.rectangleParent} ${className}`}>
            <img className={styles.frameChild} alt="" src="/rectangle-12@2x.png"/>
            <div className={styles.careValuesWrapper}>
                <div className={styles.careValues}>
                    <div className={styles.careValuePrecision}>
                        <h1 className={styles.weWillTakeContainer}>
                            <p className={styles.weWillTake}>We will take good</p>
                            <p className={styles.careOfYour}>care of your car</p>
                        </h1>
                        <img
                            className={styles.careValuesButton}
                            loading="lazy"
                            alt=""
                            src="/rectangle-7@2x.png"
                        />
                    </div>
                    <div className={styles.careValuesChild}/>
                    <div className={styles.careValuePrecision1}>
                        <div className={styles.frameParent}>
                            <FrameComponent1
                                precision="/precision.svg"
                                preciseWork="Precise work"
                                weUpholdTheHighestStandar="We uphold the highest standards of professionalism when servicing your vehicles."
                            />
                            <div className={styles.frameItem}/>
                            <FrameComponent1
                                precision="/diamond.svg"
                                preciseWork="Premium Products and Services"
                                weUpholdTheHighestStandar="Ensure your car's longevity with a periodic exterior protection treatment."
                            />
                            <div className={styles.frameInner}/>
                            <FrameComponent1
                                precision="/security.svg"
                                preciseWork="High-Level Security and Privacy"
                                weUpholdTheHighestStandar="We understand the importance of privacy and security for their our clientele."
                            />
                        </div>
                        <div className={styles.frameGroup} onClick={onOpenQuoteForm}>
                            <div className={styles.getAQuoteNowWrapper}>
                                <div className={styles.getAQuote}>Get a quote now</div>
                            </div>
                            <img
                                className={styles.careValuesButtonIcon}
                                alt=""
                                src="/vector-11.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FrameComponent;