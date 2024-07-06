import { FunctionComponent } from "react";
import styles from "./DetailingOptions.module.css";

export type DetailingOptionsType = {
  className?: string;
  rectangle5?: string;
  entryLevelDetail?: string;
  treatYourLuxuryCarToAThor?: string;
};

const DetailingOptions: FunctionComponent<DetailingOptionsType> = ({
  className = "",
  rectangle5,
  entryLevelDetail,
  treatYourLuxuryCarToAThor,
}) => {
  return (
    <div className={[styles.detailingOptions, className].join(" ")}>
      <img
        className={styles.detailingOptionsChild}
        loading="lazy"
        alt=""
        src={rectangle5}
      />
      <div className={styles.detailingOptionsTitles}>
        <h3 className={styles.entryLevelDetail}>{entryLevelDetail}</h3>
        <div className={styles.detailingOptionsDescriptions}>
          <div className={styles.treatYourLuxury}>
            {treatYourLuxuryCarToAThor}
          </div>
          <div className={styles.detailingOptionsButtons}>
            <div className={styles.learnMore}>Learn more</div>
            <div className={styles.arrowWrapper}>
              <img
                className={styles.arrowIcon}
                loading="lazy"
                alt=""
                src="/arrow.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailingOptions;
