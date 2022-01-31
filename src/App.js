import './styles/App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Header from './components/Header/Header';
import MemoryGame from './components/MemoryGame/MemoryGame';
import Footer from './components/Footer/Footer';
import sns from './social-networking-services.json';

export default function App() {
  return (
    <div className='App'>
      <Wrapper>
        <Header title='SNS Memory Game'/>
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
