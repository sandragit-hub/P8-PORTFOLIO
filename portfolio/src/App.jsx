import './App.scss'
import BannerHomepage from './components/BannerHomepage'
import Header from './components/Header'


function App() {
  return (
    <div className='body-content'>
      <header>
        <Header />
      </header>
      <main>
        <BannerHomepage />
      </main>
      <footer></footer>
    </div>
  )
}

export default App
