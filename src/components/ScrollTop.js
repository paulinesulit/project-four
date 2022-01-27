import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollTop = () => {
    const scrollTopFunction = () => {
        window.scrollTo({
            top: 0, 
            left: 0,
            behavior: 'smooth'
        });
    }
    
    return(
        <div>
            <button className="scrollTopBtn" onClick={scrollTopFunction}> <FontAwesomeIcon icon={faArrowAltCircleUp}/></button>
        </div>
    )
}

export default ScrollTop;