import { FaWhatsapp, FaTwitter, FaEnvelope } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer-signature">
        <span className="brand">Ⓤ UltraCobra &copy; MMXXIII</span> | Designed by{' '}
        <a
          href="https://github.com/lucfreelance"
          alt="@lucfreelance en GitHub"
          title="lucfreelance en GitHub"
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
          alt="Oportunidades Ilimitadas | Directorio web y app de #InteligenciaArtificial"
          title="Oportunidades Ilimitadas Directorio web y app de Inteligencia Artificial"
          rel="noopener noreferrer"
          target="_blank"
          className="author-website"
        >
          oi-ia
        </a>{' | '}
        <a
          href="https://ultracobra.netlify.app/spaces"
          alt="ultracobra SPACES"
          title="ultracobra SPACES"
          className="author-website"
        >
          ultracobra SPACES
        </a>
      </section>
      <section className="footer-logos">
        <ul className="social-media-list">
          <li>
            <a
              href="https://wa.me/573166054533"
              target="_blank"
              rel="noopener noreferrer"
              alt="WhatsApp ultracobra"
              title="WhatsApp @ultracobra"
            >
              <FaWhatsapp className="footer-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/cobraultra"
              target="_blank"
              rel="noopener noreferrer"
              alt="Twitter ultracobra"
              title="Twitter @ultracobra"
            >
              <FaTwitter className="footer-icon" />
            </a>
          </li>
          <li>
            <a
              href="mailto:ultracobre@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              alt="Email ultracobra"
              title="Email ultracobra"
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
