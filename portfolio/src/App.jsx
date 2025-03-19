import './App.scss'
import BannerHomepage from './components/BannerHomepage'
import Header from './components/Header'


function App() {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline>
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
      <div className='body-content'>
        <header>
          <Header />
        </header>
        <main>
          <BannerHomepage />
        </main>
        <footer></footer>
      </div>
    </div>
  )
}

export default App
