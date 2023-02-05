import { HomeCover } from './components/HomeCover';
import { DateRelease } from './components/DateRelease';
import { SummarySection } from './components/SummarySection';
import { Gallery } from './components/Gallery';
import { Glossary } from './components/Glossary';
import { NewsLetter } from './components/NewsLetter';

function App() {
  return (
    <>
      <HomeCover />
      <DateRelease />
      <SummarySection />
      <Gallery />
      <Glossary />
      <NewsLetter />
    </>
  );
}

export default App;
