import './App.scss'
import BannerHomepage from './components/BannerHomepage'
import About from './components/About'
import Header from './components/Header'
import Skills from './components/Skills'
import Project from './components/Project'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import Loader from './components/Loader'


function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simule un délai de chargement
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='body-content'>
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
    </div>
  )
}

export default App
