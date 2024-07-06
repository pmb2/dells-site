import {useEffect} from "react";
import {
    Routes,
    Route,
    useNavigationType,
    useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
    const action = useNavigationType();
    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
        if (action !== "POP") {
            window.scrollTo(0, 0);
        }
    }, [action, pathname]);

    useEffect(() => {
        let title = "";
        let metaDescription = "";

        switch (pathname) {
            case "/":
                title = "Luxury Car Detailing";
                metaDescription = "Experience premium car detailing services for your luxury vehicle.";
                break;
            default:
                title = "Prompt Luxury Detailing";
                metaDescription = "Professional car detailing services for luxury vehicles.";
        }

        if (title) {
            document.title = title;
        }

        if (metaDescription) {
            const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
                'head > meta[name="description"]'
            );
            if (metaDescriptionTag) {
                metaDescriptionTag.content = metaDescription;
            }
        }
    }, [pathname]);

    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
        </Routes>
    );
}

export default App;