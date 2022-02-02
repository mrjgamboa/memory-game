import './styles/App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MemoryGame from './components/MemoryGame/MemoryGame';
import Footer from './components/Footer/Footer';
import { sns } from './data/social-network-services';

export default function App() {
  return (
    <div className='App'>
      {/* <Header title='Memory Game'/> */}
      <Main>
        <MemoryGame data={sns} />
      </Main>
      {/* <Footer
        builder='L4ck (mrjgamboa)'
        link='https://github.com/mrjgamboa'
      /> */}
    </div>
  );
};
