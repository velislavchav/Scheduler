import { useEffect, useState } from 'react';

// Libraries
import { Route, Routes } from 'react-router-dom';

// Components
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Activities from './Activities/Activities';
import { getSelectedLanguage, changeLanguage, checkIsLanguageValid } from '../utils/helpers';

function App() {
  const [language, setLanguage] = useState("BG");

  useEffect(() => {
    const languageFromLocalStorage = getSelectedLanguage();
    if (language !== languageFromLocalStorage) {
      setLanguage(languageFromLocalStorage);
    }
  }, [language])

  function handleChangeLanguage(ev) {
    const userLanguageSelection = ev.key || null;
    if (checkIsLanguageValid(userLanguageSelection) && userLanguageSelection !== getSelectedLanguage()) {
      changeLanguage(userLanguageSelection);
      setLanguage(userLanguageSelection);
    }
  }

  return (
    <>
      <Header language={language} setNewLanguage={handleChangeLanguage} />
      <Routes >
        <Route path="/" element={<Home language={language} />} />
        <Route path="/services/:category/:subcategory" element={<Activities language={language} />} />
      </Routes >
      <Footer />
    </>
  );
}

export default App;
