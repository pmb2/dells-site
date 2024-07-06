import {FunctionComponent, useState} from "react";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import QuoteForm from "../components/QuoteForm";
import OverlayIframe from "../components/OverlayIframe";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
    const [showQuoteForm, setShowQuoteForm] = useState(false);

    const handleOpenQuoteForm = () => {
        setShowQuoteForm(true);
    };

    const handleCloseQuoteForm = () => {
        setShowQuoteForm(false);
    };

    return (

        <div className={styles.homepage}>
            <OverlayIframe isVisible={showQuoteForm} onClose={handleCloseQuoteForm}>
                <QuoteForm onClose={handleCloseQuoteForm}/>
            </OverlayIframe>
            <FrameComponent4 onOpenQuoteForm={handleOpenQuoteForm}/>
            <FrameComponent3 onOpenQuoteForm={handleOpenQuoteForm}/>
            <div className={styles.homepageChild}/>
            <FrameComponent2 onOpenQuoteForm={handleOpenQuoteForm}/>
            <section className={styles.homepageInner}>
                <div className={styles.rectangleParent}>
                    <img className={styles.frameChild} alt="" src="/rectangle-2@2x.png"/>
                    <div className={styles.frameWrapper}>
                        <img
                            className={styles.frameItem}
                            loading="lazy"
                            alt=""
                            src="/group-357.svg"
                        />
                    </div>
                    <div className={styles.playShowreel}>Play showreel</div>
                </div>
            </section>
            <FrameComponent onOpenQuoteForm={handleOpenQuoteForm}/>
            <div className={styles.frameDiv}>
                <div className={styles.frameParent}>
                    <div className={styles.bookYourLuxuryCarDetailingParent}>
                        <h1 className={styles.bookYourLuxuryContainer}>
                            <p className={styles.bookYourLuxury}>Book your luxury</p>
                            <p className={styles.carDetailingToday}>car detailing today</p>
                        </h1>
                        <div className={styles.clickTheLink}>
                            Click the link below. Fill out the details and we'll get back to
                            you in less than 24 hours.
                        </div>
                    </div>
                    <div className={styles.frameGroup} onClick={handleOpenQuoteForm}>
                        <div className={styles.getAQuoteNowWrapper}>
                            <div className={styles.getAQuote}>Get a quote now</div>
                        </div>
                        <img
                            className={styles.bookingButtonIcon}
                            alt=""
                            src="/vector-11.svg"
                        />
                    </div>
                </div>
            </div>
            <footer className={styles.frameFooter}>
                {/* Footer content */}
            </footer>
        </div>
    );
};

export default Homepage;