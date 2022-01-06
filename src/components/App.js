// Libraries
import { Route, Routes } from 'react-router-dom';

// Components
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Activities from './Activities/Activities';

function App() {
  return (
    <>
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
      </Routes >
      <Footer />
    </>
  );
}

export default App;
