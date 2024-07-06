import {FunctionComponent} from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
    className?: string;
    precision?: string;
    preciseWork?: string;
    weUpholdTheHighestStandar?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
                                                                     className = "",
                                                                     precision,
                                                                     preciseWork,
                                                                     weUpholdTheHighestStandar,
                                                                 }) => {
    return (
        <div className={`${styles.frameParent} ${className}`}>
            <div className={styles.precisionParent}>
                <img
                    className={styles.precisionIcon}
                    loading="lazy"
                    alt=""
                    src={precision}
                />
                <div className={styles.preciseWorkWrapper}>
                    <h3 className={styles.preciseWork}>{preciseWork}</h3>
                </div>
            </div>
            <div className={styles.weUpholdThe}>{weUpholdTheHighestStandar}</div>
        </div>
    );
};

export default FrameComponent1;