export const BtnSwitcher = ({ currentlyPage, switch1, switch2, textBtn1, textBtn2 }) => {
  const btnActive = `switch switch-btn-active`;
  const btnDisabled = 'switch switch-btn-disabled';

  return (
    <div className="glossary__header--switcher">
      <button onClick={switch2} className={currentlyPage === 1 ? btnDisabled : btnActive}>
        {textBtn2}
      </button>
      <button onClick={switch1} className={currentlyPage === 2 ? btnDisabled : btnActive}>
        {textBtn1}
      </button>
    </div>
  );
};
