import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <Header title='Memory Game'/>
      <main>
        {/* resume here */}
      </main>
      <Footer
        builder='L4ck (mrjgamboa)'
        link='https://github.com/mrjgamboa'
      />
    </div>
  );
};
