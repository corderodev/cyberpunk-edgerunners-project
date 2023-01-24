import playicon from '../assets/img/play-icon.svg';

export const BtnPlay = ({link}) => {
  return (
    <a className="btn-play" href={link} target="_blank">
      <img src={playicon} alt="play icon" />
    </a>
  );
};
