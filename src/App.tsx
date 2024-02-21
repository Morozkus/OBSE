import { BrowserRouter } from 'react-router-dom'
import styles from './App.module.css'
import NavBar from './components/NavBar/NavBar'
import AppRouter from './components/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
