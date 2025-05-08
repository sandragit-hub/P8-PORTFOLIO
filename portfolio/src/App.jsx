import './App.scss';
import BannerHomepage from './components/BannerHomepage';
import About from './components/About';
import Header from './components/Header';
import Skills from './components/Skills';
import Project from './components/Project';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { useState } from 'react';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleFinishLoading = () => {
    setIsLoading(false); // Quand la barre de progression atteint 100%, on change l'état
  };

  return (
    <div className="body-content">
      {isLoading ? (
        <Loader onFinish={handleFinishLoading} />
      ) : (
        <>
          <header>
            <Header />
          </header>
          <main>
            <BannerHomepage />
            <About />
            <Skills />
            <Project />
            <ContactForm />
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
