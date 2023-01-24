import summary1 from '../assets/img/summary-1.png';
import summary2 from '../assets/img/summary-2.png';

export const SummarySection = () => {
  return (
    <section className="summary-section">
      <p>
        cyberpunk: edgerunners tells a standalone, 10-episode story about a street kid trying to
        survive in a technology and body modification-obsessed city of the future.
      </p>
      <div className="summary-section__img-container">
        <div className="summary-section__img-container--img-left">
          <img src={summary1} alt="Lucy and David" />
        </div>
        <div className="summary-section__img-container--img-right">
          <img src={summary2} alt="Night City" />
        </div>
      </div>
      <p>
        having everything to lose, he chooses to stay alive by becoming an edgerunner-a mercenary
        outlaw also known as a cyberpunk
      </p>
    </section>
  );
};
