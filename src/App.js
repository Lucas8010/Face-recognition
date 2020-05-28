import React from 'react';
import './App.css';

import Navigation from './components/Navigation'
// import Logo from './components/images/pennywiseLogo'
import ImgLinkForm from './components/ImgLinkForm/ImgLinkForm'
import FaceRecog from './components/FaceRecog/FaceRecog'

function App() {
  return (
    <div className="App">
        {/* <Logo /> */}
        <Navigation />
        <ImgLinkForm />
        <FaceRecog />
    </div>
  );
}

export default App;
