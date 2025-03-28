import './App.scss'
import BannerHomepage from './components/BannerHomepage'
import About from './components/About'
import Header from './components/Header'
import Skills from './components/Skills'


function App() {
  return (
    <div className='body-content'>
      <header>
        <Header />
      </header>
      <main>
        <BannerHomepage />
        <About />
        <Skills />
      </main>
      <footer></footer>
    </div>
  )
}

export default App
