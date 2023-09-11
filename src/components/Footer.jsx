import { FaWhatsapp, FaTwitter, FaEnvelope } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer-signature">
        <span className="brand">Ⓤ Ultraspace &copy; MMXXIII</span> | Designed by{' '}
        <a
          href="https://github.com/lucfreelance"
          alt="@lucfreelance GitHub"
          title="lucfreelance GitHub"
          rel="noopener noreferrer"
          target="_blank"
          className="designer"
        >
          @lucfreelance
        </a>
      </section>
      <section className="footer-signature">
        Relative to author websites:{' '}
        <a
          href="https://oportunidadesilimitadas.com/#table-board-top"
          alt="oi-ia | Directorio web y app de #InteligenciaArtificial"
          title="oi-ia Directorio web y app de Inteligencia Artificial"
          rel="noopener noreferrer"
          target="_blank"
          className="author-website"
        >
          oi-ia
        </a>{' | '}
        <a
          href="https://ultraspace.vercel.app/"
          alt="ultraspace"
          title="ultraspace"
          className="author-website"
        >
          ultraspaces
        </a>
      </section> <br />
      <section className="footer-logos">
        <ul className="social-media-list">
          <li>
            <a
              href="https://wa.me/573157742332"
              target="_blank"
              rel="noopener noreferrer"
              alt="WhatsApp ultraspace"
              title="WhatsApp @ultraspace"
            >
              <FaWhatsapp className="footer-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ultra__space"
              target="_blank"
              rel="noopener noreferrer"
              alt="Twitter ultraspace"
              title="Twitter @ultra__space"
            >
              <FaTwitter className="footer-icon" />
            </a>
          </li>
          <li>
            <a
              href="mailto:ultracobre@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              alt="Email ultraspace"
              title="Email ultraspace"
            >
              <FaEnvelope className="footer-icon" />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
<iframe width="560" height="315" src="https://www.youtube.com/embed/_XC8KYuPUiU?si=QoyaJFhXOhffHKbg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
