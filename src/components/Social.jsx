import { Twitter, Instagram, Facebook, Discord } from './Icons';

export const Social = () => {
  return (
    <section className="social">
      <h2 className="social__title">
        Stay in sync with every fresh news-blast. More Updates hittin' the net soon:
      </h2>
      <div className="social__left-container">
        <p>CD Projekt Red</p>
        <a href="https://www.facebook.com/CyberpunkGame" target="_blank">
          <Facebook fill="#000" class="facebook" />
        </a>
        <a href="https://www.instagram.com/cyberpunkgame/" target="_blank">
          <Instagram fill="#000" class="instagram" />
        </a>
        <a href="https://twitter.com/cyberpunkgame">
          <Twitter fill="#000" class="twitter" />
        </a>
        <a href="https://discord.com/invite/cyberpunkgame" target="_blank">
          <Discord fill="#000" class="discord" />
        </a>
      </div>
      <div className="social__right-container">
        <p>Netflix</p>
        <a href="https://www.facebook.com/netflixgeeked" target="_blank">
          <Facebook fill="#000" class="facebook" />
        </a>
        <a href="https://www.instagram.com/netflixgeeked/" target="_blank">
          <Instagram fill="#000" class="instagram" />
        </a>
        <a href="https://twitter.com/NetflixAnime" target="_blank">
          <Twitter fill="#000" class="twitter" />
        </a>
      </div>
    </section>
  );
};
