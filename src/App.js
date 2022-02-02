import './styles/App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Header from './components/Header/Header';
import MemoryGame from './components/MemoryGame/MemoryGame';
import Footer from './components/Footer/Footer';
import { sns } from './data/social-network-services';

export default function App() {
  return (
    <div className='App'>
      <Wrapper column={true}>
        <Header title='Memory Game'/>
        <main className='container'>
          <MemoryGame data={sns} />
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
