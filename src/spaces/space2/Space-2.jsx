import { useState } from 'react';
import { Helmet } from 'react-helmet';
import './custom.css';
import Blog1One from './blog-1-1.gif';
import Blog1Two from './blog-1-2.gif';
import Blog1Tree from './blog-1-3.gif';
import Blog1Four from './blog-1-4.gif';
import Blog1Five from './blog-1-5.gif';
import Blog1Six from './blog-1-6.gif';
import Blog1Seven from './blog-1-7.gif';
import Blog1Eight from './blog-1-8.gif';
import Blog1Nine from './blog-1-9.gif';
import Blog1Ten from './blog-1-10.webp';
import Blog1Eleven from './blog-1-11.webp';
import Blog1Twelve from './blog-1-12.webp';

const Space2 = () => {
  const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const getRandomTitle = () => {
    const titles = [
      'Welcome to the Wonderland!',
      'Discover a world of magic!',
      'Unleash your imagination!',
      'Journey into the unknown!',
      'Embrace the extraordinary!',
      'Where dreams come alive!',
      'Are you ready for outpost?',
      'You are spacial, important',
      'Do what it takes to better'
    ];
    const randomIndex = Math.floor(Math.random() * titles.length);
    return titles[randomIndex];
  };
  
  const getRandomImage = () => {
    const images = [
      Blog1One,
      Blog1Two,
      Blog1Tree,
      Blog1Four,
      Blog1Five,
      Blog1Six,
      Blog1Seven,
      Blog1Eight,
      Blog1Nine,
      Blog1Ten,
      Blog1Eleven,
      Blog1Twelve
    ];
  
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };
  

  const getLongParagraph = () => {<h5 className="card-title custom-card-title">{title}</h5>
    const paragraphs = [
'In the depths of our hearts lie the seeds of greatness, waiting to be nurtured and unleashed. Pursue your passion and purpose to discover the essence of your being. Each step creates ripples of change, transforming yourself and the world. Embrace the power within to guide you towards boundless opportunities.',

'Life is a magnificent canvas where we hold the brush that paints our existence. Each stroke shapes the masterpiece of our lives. Manifest your dreams with passion, leaving an indelible mark on the world. Believe in your unique voice, leading to a life of significance and inspiration.',

'Life is a journey of exploration, an adventure into the unknown. Embrace uncertainty to discover your true potential. Embrace curiosity and change, knowing each twist is an opportunity for growth. Embrace the thrill of the unknown, opening doors to endless possibilities.',

'Unleash your hidden potential and embrace boundless opportunities. Your unique talents hold the key to a fulfilling life. Each step allows positive change in your life and the world. Believe in yourself and make a difference with your light.',

'The path to success may be challenging, but it reveals our strength and resilience. Embrace obstacles as opportunities for growth. Let setbacks fuel determination to rise above limitations. Your character shines in moments of difficulty, leading to victory.',

'Life unfolds as a canvas, inviting us to be artisans. Each choice and action shapes our reality, leaving a mark. Believe in the power of your unique voice, resonating with purpose. Your story is worth telling; inspire others.',

'Life is a grand symphony; you hold the baton of your destiny. Embrace the rhythm, infuse passion into every note. Surround yourself with harmonious relationships, gratitude for the symphony unfolding. Purpose, passion, and perseverance create a resplendent masterpiece.',

'Within you lies untapped potential, waiting to be unleashed. Embrace the unknown, step outside your comfort zone. Moments of uncertainty reveal capabilities and hidden talents. Trust yourself; greatness awaits.',

'Embrace the journey of self-discovery and growth. Life is a constant process of learning and evolving. Explore new horizons, challenge beliefs, and embrace change. Every experience offers an opportunity for expansion. Embrace the unknown and discover beauty beyond your comfort zone.',

'The world unfolds as a tapestry woven from diverse stories and perspectives. Embrace the beauty arising from differences. Seek understanding and appreciation, celebrating inclusivity and diversity. We pave the way for a compassionate future.',

'Life is a symphony, and you are the conductor. Each choice composes a melody that reverberates. Embrace the rhythm, let passion guide your baton. Cultivate harmonious relationships, gratitude for every note. Create a masterpiece worth celebrating.',

'Find solace in the beauty of simplicity. Pause, breathe, and reconnect with what truly matters. Embrace stillness, be present in the moment. Find contentment in simple pleasures. Savor each experience and find joy.',

'Embrace the path to success, knowing it may not always be smooth. Challenges reveal our strength and resilience. Embrace obstacles as opportunities for growth. Let setbacks fuel determination and push boundaries. Perseverance turns adversity into triumph.',

'Tap into your inner reservoir of greatness, waiting to be unleashed upon the world. Nourish your potential and create a lasting impact. Embrace the power within you, shaping a future filled with purpose and fulfillment.',

'Experience the world as a tapestry of diverse stories and perspectives. Embrace the richness of human experiences, seeking understanding beyond your own. Let empathy guide your steps, celebrating inclusivity and diversity. We weave a brighter future.'
];
const randomIndex = Math.floor(Math.random() * paragraphs.length);
return paragraphs[randomIndex];
  };

  const [color, setColor] = useState(getRandomColor());
  const [title, setTitle] = useState(getRandomTitle());
  const [image, setImage] = useState(getRandomImage());
  const [paragraph, setParagraph] = useState(getLongParagraph());

  const handleChangeColor = () => {
    setColor(getRandomColor());
  };

  const handleChangeTitle = () => {
    setTitle(getRandomTitle());
  };

  const handleChangeImage = () => {
    setImage(getRandomImage());
  };

  const handleChangeParagraph = () => {
    setParagraph(getLongParagraph());
  };

  const cardStyle = {
    backgroundColor: color,
  };

  return (
    <div>
      <Helmet>  {/* Google tag (gtag.js) */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-7C52MLZWVM"></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7C52MLZWVM');
  `}
  </script>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ultracobra Ⓤ Blog 🐍</title>
        <meta
          name="description"
          content="This is the Blog component from @ultracobra"
        />
        <meta property="og:image" content="https://i.imgur.com/cCphed4.png" />
      </Helmet>
      <button onClick={handleChangeImage}>Change Image</button>
      <button onClick={handleChangeColor}>Change Color</button>
      <button onClick={handleChangeTitle}>Change Title</button>
      <button onClick={handleChangeParagraph}>Change Paragraph</button>
      <div>
        <div className="card-custom-card" style={cardStyle}>
          <img
            className="custom-card-image"
            src={image}
            alt="Embark on the Journey!"
            title="Embark on the Journey!"
          />
          <div className="card-body">
            <h5 className="card-title custom-card-title">{title}</h5>
            <p className="card-text custom-card-text">{paragraph}</p>
            <a href="#" className="btn btn-primary custom-card-button">
              Embark on the Journey!
            </a>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Space2;