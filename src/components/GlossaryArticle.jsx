import { CardImage } from './CardsGallery';

export const GlossaryArticle = ({ title, body, src }) => {
  return (
    <article className="glossary__content--article">
      <div className="img-container">
        <span className="corner-transparent"></span>
        <img src={src} alt="" />
      </div>
      <div className='info-container'>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </article>
  );
};
