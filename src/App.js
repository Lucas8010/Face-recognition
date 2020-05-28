import React from 'react';
import './App.css';

import Navigation from './components/Navigation'
// import Logo from './components/images/pennywiseLogo'
import ImgLinkForm from './components/ImgLinkForm/ImgLinkForm'
import FaceRecog from './components/FaceRecog/FaceRecog'
import Logo from './components/Logo/logo'

function App() {
  return (
    <div className="App">
      <div className="appMainContainer">
          <Logo />
          <Navigation />
          <ImgLinkForm />
          <FaceRecog />
        </div>
    </div>
  );
}

export default App;
