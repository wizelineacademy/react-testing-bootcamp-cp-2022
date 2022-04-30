import './App.css';
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { NextUIProvider } from '@nextui-org/react'
import { Container } from '@nextui-org/react'

function App() {
  return (
    <div className="App">
      <NextUIProvider>
        <Layout>
          <Container>
            <Home />
          </Container>
        </Layout>
      </NextUIProvider>
    </div>
  );
}

export default App;
