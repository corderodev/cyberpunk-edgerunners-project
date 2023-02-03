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

export const Factions = () => {
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

  const [faction, setFaction] = useState(data[0]);

  const viewFaction = (index) => {
    setFaction(data[index]);
  };

  return (
    <section className="glossary__content-factions">
      <aside className="glossary__content-factions--aside-factions">
        <div className="select-container">
          <select value={faction} onChange={(e) => setFaction(data[e.target.value])}>
            {data.map((item, index) => {
              return (
                <option value={index} key={item.id}>
                  {item.title}
                </option>
              );
            })}
          </select>
        </div>
        <ul>
          {data.map((item, index) => {
            return (
              <li
                onClick={() => viewFaction(index)}
                key={item.id}
                className={faction.id === item.id ? 'activeFaction' : ''}>
                {item.title}
              </li>
            );
          })}
        </ul>
      </aside>
      <GlossaryArticle
        src={imgFactions[faction.id]}
        title={faction.title}
        body={faction.body}
        key={faction.title}
      />
    </section>
  );
};
