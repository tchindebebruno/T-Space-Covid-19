import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import {
  EntryPage,
} from './pages';
import { useLanguageData } from 'hooks'
import {
  Internationalisation,
} from './components';

const App: React.FC = () => {
  const { language } = useLanguageData()

  return (
    <Internationalisation locale={language}>
      <Router>
        <EntryPage />
      </Router>
    </Internationalisation>
  );
}

export default App;
