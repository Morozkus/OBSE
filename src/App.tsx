import { BrowserRouter } from 'react-router-dom'
import styles from './App.module.css'
import NavBar from './components/NavBar/NavBar'
import AppRouter from './components/AppRouter'

function App() {
  return (
    <BrowserRouter>
      <header className={styles.header}>
        <NavBar />
      </header>

      <main className={styles.main}>
        <AppRouter />
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </BrowserRouter>
  )
}

export default App
