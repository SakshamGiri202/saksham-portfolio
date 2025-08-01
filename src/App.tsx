import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Snippets from './components/Snippets';
import Footer from './components/Footer';

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Blog />
          <Snippets />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
