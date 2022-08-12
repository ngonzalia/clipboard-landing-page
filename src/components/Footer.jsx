import Logo from '../assets/logo.svg'
import Facebook from '../assets/icon-facebook.svg'
import Twitter from '../assets/icon-twitter.svg'
import Instagram from '../assets/icon-instagram.svg'

const Footer = () => {

  let deadLink = '#';

  return (
    <footer className='footer'>
      <img
        className='footer__img'
        src={Logo}
        alt='Logo' />

      <div className='footer__list'>
        <a href={deadLink}>FAQs</a>
        <a href={deadLink}>Contact Us</a>
        <a href={deadLink}>Privacy Policy</a>
        <a href={deadLink}>Press Kit</a>
        <a href={deadLink}>Install Guide</a>
      </div>

      <div className='footer__social'>
        <img src={Facebook} alt='Facebook logo' />
        <img src={Twitter} alt='Twitter logo' />
        <img src={Instagram} alt='Instagram logo' />
      </div>
    </footer>
  );
};

export default Footer;