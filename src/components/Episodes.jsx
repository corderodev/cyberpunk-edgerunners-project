import { GlossaryArticle } from './GlossaryArticle';
import data from '../data/glossary.json';
import { useState } from 'react';

import animals from '../assets/img/animals.webp';
import arasaka from '../assets/img/arasaka.webp';
import braindance from '../assets/img/braindance.webp';
import corpo from '../assets/img/corpo.webp';
import cyberpsychosis from '../assets/img/cyberpsychosis.webp';
import cyberpunk from '../assets/img/cyberpunk.webp';
import cyberware from '../assets/img/cyberware.webp';
import fixer from '../assets/img/fixer.webp';
import ICE from '../assets/img/ICE.webp';
import maelstrom from '../assets/img/maelstrom.webp';
import maxtac from '../assets/img/maxtac.webp';
import militech from '../assets/img/militech.webp';
import NCPD from '../assets/img/NCPD.webp';
import netrunner from '../assets/img/netrunner.webp';
import nightCity from '../assets/img/night-city.webp';
import ripperDoc from '../assets/img/ripper-doc.webp';
import sandevistan from '../assets/img/sandevistan.webp';
import scavengers from '../assets/img/scavengers.webp';
import solo from '../assets/img/solo.webp';
import techie from '../assets/img/techie.webp';
import traumaTeam from '../assets/img/trauma-team.webp';
import tygerClaws from '../assets/img/tyger-claws.webp';

export const Episodes = () => {
  const imgFactions = [
    animals,
    arasaka,
    braindance,
    corpo,
    cyberpsychosis,
    cyberpunk,
    cyberware,
    fixer,
    ICE,
    maelstrom,
    maxtac,
    militech,
    NCPD,
    netrunner,
    nightCity,
    ripperDoc,
    sandevistan,
    scavengers,
    solo,
    techie,
    traumaTeam,
    tygerClaws
  ];

  const [episode, setEpisode] = useState(1);

  return (
    <section className="glossary__content-episodes">
      <aside className="glossary__content-episodes--aside-episodes">
        <div className="select-container">
          <select onChange={(e) => setEpisode(e.target.value)}>
            <option value={1}>Episode 1</option>
            <option value={2}>Episode 2</option>
            <option value={3}>Episode 3</option>
            <option value={4}>Episode 4</option>
            <option value={7}>Episode 7</option>
          </select>
        </div>
        <ul>
          <li onClick={() => setEpisode(1)} className={episode === 1 ? 'activeEpisode' : ''}>
            Episode 1
          </li>
          <li onClick={() => setEpisode(2)} className={episode === 2 ? 'activeEpisode' : ''}>
            Episode 2
          </li>
          <li onClick={() => setEpisode(3)} className={episode === 3 ? 'activeEpisode' : ''}>
            Episode 3
          </li>
          <li onClick={() => setEpisode(4)} className={episode === 4 ? 'activeEpisode' : ''}>
            Episode 4
          </li>
          <li onClick={() => setEpisode(7)} className={episode === 7 ? 'activeEpisode' : ''}>
            Episode 7
          </li>
        </ul>
      </aside>
      <section className="glossary__content-episodes--articles">
        {data.map((article, index) => {
          return article.episode == episode ? (
            <GlossaryArticle
              src={imgFactions[index]}
              title={article.title}
              body={article.body}
              key={article.id}
            />
          ) : (
            ''
          );
        })}
      </section>
    </section>
  );
};
