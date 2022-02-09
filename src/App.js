import { useState } from 'react';
import { sns } from './data/social-networking-services';
import { animals } from './data/animals';
import { randomInteger } from './utils';
import './styles/App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import HowToPlay from './components/HowToPlay/HowToPlay';
import ThemeSelector from './components/ThemeSelector/ThemeSelector';
import MemoryGame from './components/MemoryGame/MemoryGame';
import Footer from './components/Footer/Footer';

export default function App() {
  const [theme, setTheme] = useState([]);
  console.log('theme: ', theme);
  
  const themeInfo = [
    {
      id: 1,
      name: 'Social Networking Services (SNS)',
      count: sns.length,
      img: sns[randomInteger(0, sns.length-1)].src,
    },
    {
      id: 2,
      name: 'Animals',
      count: animals.length,
      img: animals[randomInteger(0, animals.length-1)].src,
    },
  ];

  const themeDataSetter = (id) => {
    if (id === 1) {
      setTheme([...sns]);
    } else if (id === 2){
      setTheme([...animals]);
    }
  };
  
  return (
    <div className='App'>
      {(theme.length === 0) &&
        <Header title='Memory Game'/>
      }
      <Main>
        {(theme.length === 0)
          ? <>
              <HowToPlay
                list={[
                  'Select any game theme.',
                  "Don't click any card twice.",
                ]}
              />
              <ThemeSelector 
                data={themeInfo} 
                onChildClick={themeDataSetter}
              />
            </>
          : <MemoryGame 
              data={theme} 
              backToHome={() => {setTheme([])}}
            />
        }
      </Main>
      {(theme.length === 0) &&
        <Footer
          builder='L4ck (mrjgamboa)'
          link='https://github.com/mrjgamboa'
        />
      }
    </div>
  );
};
