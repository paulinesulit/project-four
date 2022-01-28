import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <p>
        Created at <a href="https://junocollege.com/" target="blank" aria-label="Go to Juno College's website">Juno College</a> © 2022
      </p>
      <p>
        Pauline Sulit <a target="blank" rel="noreferrer" href="https://www.linkedin.com/in/paulinesulit/" aria-label="Go to Pauline Sulit's LinkedIn page">{<FontAwesomeIcon icon={faLinkedin} />}</a> | 
        Karen Evans <a target="blank" rel="noreferrer" href="https://www.linkedin.com/in/evanske2/" aria-label="Go to Karen Evans's LinkedIn page">{<FontAwesomeIcon icon={faLinkedin} />}</a> |
        Mark Duffy <a target="blank" rel="noreferrer" href="https://www.linkedin.com/in/markduffy-webdev/" aria-label="Go to Mark Duffy's LinkedIn page">{<FontAwesomeIcon icon={faLinkedin} />}</a> |
        Antoni Ibrahim <a target="blank" rel="noreferrer" href="https://www.linkedin.com/in/antoni-i-1b492b123/" aria-label="Go to Antoni Ibrahim's LinkedIn page">{<FontAwesomeIcon icon={faLinkedin} />}</a>
      </p>
    </footer>
  );
};

export default Footer;
