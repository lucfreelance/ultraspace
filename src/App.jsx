import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import Header from './components/Header';
import Spaces from './spaces/Spaces';
import Pitch from './components/Pitch';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Space5 from '././spaces/space5/Space-5.jsx';
// import Space4 from '././spaces/space4/Space-4.jsx';
import Space3 from './spaces/space3/Space-3.jsx';
import Space2 from './spaces/space2/Space-2.jsx';
import Space1 from './spaces/space1/Space-1.jsx';

export const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('popstate', handlePopState); // Listen to the popstate event

    return () => {
      window.removeEventListener('popstate', handlePopState); // Clean up the event listener on component unmount
    };
  }, []);

  // Added the useEffect hook to listen for the popstate event, which is triggered when the URL changes without reloading the page. The handlePopState function will be called when this event occurs, allowing you to perform any additional logic you need.
  const handlePopState = () => {
    // Perform any additional logic when the URL changes without reloading the page
    console.log('URL changed without reloading');
  };

  return (
    <BrowserRouter>
      <div style={{ marginLeft: '0px' }}>
        <Helmet>
          {/* Google tag (gtag.js) */}
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
          <title>Digital love, life and joy in just one place with ultraspace Ⓤ 🐍</title>
          <meta name="description" content="Ultraspace website" />
          <meta property="og:image" content="https://i.imgur.com/cCphed4.png" />
        </Helmet>
        <Header />
        <main>
          <Routes>
            <Route path="/Pitch" element={<Pitch />} />
            <Route path="/spaces" element={<Spaces />} />
            <Route path="/spaces/space5" element={<Space5 />} />
            {/* <Route path="/spaces/space4" element={<Space4 />} /> */}
            <Route path="/spaces/blog3" element={<Space3 />} />
            <Route path="/spaces/blog2" element={<Space2 />} />
            <Route path="/spaces/blog1" element={<Space1 />} />
          </Routes>
        </main>
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
