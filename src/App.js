import './App.css';
import Settings from './Settings';
import SettingsContext from './SettingsContext';
import Timer from './Timer';
import { useState } from 'react';
import TodoList from './TodoList';
import { ThemeContext, createGlobalStyle } from 'styled-components';
import Toggler from './Toggler';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.darkMode ? '#2A4242' : '#B4BFBF'};
    color: ${props => props.darkMode ? '#eee' : '#333'};
  }
  .todo-list h2 {
    color: ${props => props.darkMode ? '#bbbbc0' : '#353635'};

  }
`;

function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className="App">
      <div className='container'>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <GlobalStyles darkMode={darkMode} />
          <div className='timer'>
            <SettingsContext.Provider value={{
              showSettings,
              setShowSettings,
              workMinutes,
              breakMinutes,
              setWorkMinutes,
              setBreakMinutes,
            }}>
              {showSettings ? <Settings /> : <Timer />}
            </SettingsContext.Provider>
          </div>
          <TodoList />
          <div className='toggler'>
            <Toggler />
          </div>
        </ThemeContext.Provider>
      </div>
    </main>
  );
}

export default App;