import { useEffect, useState } from 'react';

// Libraries
import { Route, Routes, Navigate } from 'react-router-dom';

import { getSelectedLanguage, changeLanguage, checkIsLanguageValid } from '../utils/helpers';
import GeneralRouteOnly from '../utils/route-blocking/GeneralRouteOnly';
import PrivateRouteOnly from '../utils/route-blocking/PrivateRouteOnly';

// Components
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Activities from './Activities/Activities';
import AddActivity from './Activities/AddActivity/AddActivity';
import Login from './User/Login/Login';

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
        {/* PrivateRouteOnly */}
        <Route element={<PrivateRouteOnly />} >
          <Route path="/services/add" element={<AddActivity language={language} />} />
        </Route>
        {/* GeneralRouteOnly */}
        <Route element={<GeneralRouteOnly />} >
          <Route path="/user/login" element={<Login language={language} />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes >
      <Footer />
    </>
  );
}

export default App;
