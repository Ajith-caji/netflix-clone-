import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {Orginals,Action,Horror} from './constants/urls'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={Orginals} title="Netfix Orginals"/>
        <RowPost   url={Action}  title="Action" isSmall />
        <RowPost   url={Horror}  title="Horror" isSmall />
        
        <Footer/>
    </div>
  );
}

export default App;
