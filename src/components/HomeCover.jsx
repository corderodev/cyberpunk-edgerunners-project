import { BtnPlay } from './BtnPlay';
import cdpred from '../assets/img/logo-cdpred.svg';
import trigger from '../assets/img/logo-trigger.svg';
import xMark from '../assets/img/x-mark.svg';
import logoEdgerunners from '../assets/img/logo-edgerunners.webp';
import fb from '../assets/img/facebook.svg';
import ig from '../assets/img/instagram.svg';
import tw from '../assets/img/twitter.svg';

const linkVideo = 'https://www.youtube.com/watch?v=OiR_lMNlJko';

export const HomeCover = () => {
  return (
    <section className="home">
      <div className="home__cover"></div>

      <div className="home__main-container">
        <div className="home__top-line-container">
          <p>(cyberpunk edgerunners) - c 9957.2451</p>
        </div>

        <div className="home__logos-container">
          <a href="https://cdprojektred.com" target="_blank">
            <img src={cdpred} alt="Logo of Cd Projekt Red" />
          </a>
          <img src={xMark} alt="x mark" />
          <a href="https://www.st-trigger.co.jp" target="_blank">
            <img src={trigger} alt="Logo of Trigger" />
          </a>
        </div>

        <div className="home__content-container">
          <BtnPlay link={linkVideo} />
          <img
            className="home__content-container--logo-edgerunners"
            src={logoEdgerunners}
            alt="Logo Edgerunners"
          />
        </div>

        <div className="home__social-container">
          <a href="https://www.facebook.com/edgerunners" target="_blank">
            <img src={fb} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/edgerunners" target="_blank">
            <img src={ig} alt="Instagram" />
          </a>
          <a href="https://twitter.com/edgerunners" target="_blank">
            <img src={tw} alt="Twitter" />
          </a>
        </div>
      </div>

      <div className="home__bottom-separator-container"></div>
    </section>
  );
};
