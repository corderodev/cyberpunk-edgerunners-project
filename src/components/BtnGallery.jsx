const BtnNext = ({ handler, text, page }) => {
  const classBtnNext = 'btn-gallery btn-gallery--next';
  const classDisabledNext = 'btn-gallery btn-gallery--disabled-next';

  return (
    <button onClick={handler} className={page === 2 ? `${classDisabledNext}` : `${classBtnNext}`}>
      {text}
    </button>
  );
};

const BtnPrevious = ({ handler, text, page }) => {
  const classBtnPrevious = 'btn-gallery btn-gallery--previous';
  const classDisabledPrevious = 'btn-gallery btn-gallery--disabled-previous';

  return (
    <button
      onClick={handler}
      className={page === 1 ? `${classDisabledPrevious}` : `${classBtnPrevious}`}>
      {text}
    </button>
  );
};

export { BtnNext, BtnPrevious };
