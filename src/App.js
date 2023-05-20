import {useState} from 'react';
import './App.css';
import Page from './page/page';
import { LanguageContext } from './context/languageContext';

function App() {

  const [language, setLanguage] = useState(true)
  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      <Page />
    </LanguageContext.Provider>
  );
}

export default App;
