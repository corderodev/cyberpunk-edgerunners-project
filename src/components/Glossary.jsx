import { useState } from 'react';
import { BtnSwitcher } from './BtnSwitcher';
import { Factions } from './Factions';
import { Episodes } from './Episodes';

export const Glossary = () => {
  const [page, setPage] = useState(1);

  const switchEpisodes = () => {
    page === 2 ? '' : setPage(2);
  };
  const switchAll = () => {
    page === 1 ? '' : setPage(1);
  };

  return (
    <section className="glossary">
      <header className="glossary__header">
        <h2 className="glossary__header--title">Glossary</h2>
        <BtnSwitcher
          currentlyPage={page}
          switch2={switchEpisodes}
          switch1={switchAll}
          textBtn2={'Episodes'}
          textBtn1={'All'}
        />
      </header>
      {page === 2 ? <Episodes /> : <Factions />}
    </section>
  );
};
