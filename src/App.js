import './styles/App.css';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import Footer from './components/Footer/Footer';
import sns from './social-networking-services.json';

export default function App() {
  return (
    <div className='App'>
      <Wrapper>
        <Header title='Memory Game'/>
        <main className='container'>
        </main>
        <Footer
          builder='L4ck (mrjgamboa)'
          link='https://github.com/mrjgamboa'
        />
      </Wrapper>
    </div>
  );
};

// make css reset snippet
