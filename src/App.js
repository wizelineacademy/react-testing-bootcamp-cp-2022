import './App.css';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { MainSection } from './components/main-section';

function App() {
  return (
    <div className='App'>
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
