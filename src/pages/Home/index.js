import React from 'react';
import './styles.css';

import NavBar from '../../components/NavBar';
import Presentation from '../../components/Presentation';
import Barcontact from '../../components/Barcontact';

import Footer from '../../components/Footer';

import Photo from '../../assets/img/myphoto.jpeg';

const Home = () => 

<div className="container">
  <NavBar />
  <div className="container-Presentation">
    <div className="align-presentation">
      <Presentation />
    </div>
  </div>
  <div className="block-container font">
    <h1>Alguns dos meus trabalhos em progresso</h1>
  </div>
  <div className="block-container">
    <div className="block-works"></div>
    <div className="block-works"></div>
    <div className="block-works"></div>
  </div> 
  <div className="about-container">
    <h1 className="color-h1 font">
        Sobre mim!
    </h1>
    <div className="my-img-container">
    <img className="my-img" src={Photo} />
    </div>
    <p className="font">
      Front-end Developer com conhecimentos em Html, Css e Javascript.
      Além disso, estou estudando React JS e React Native para aprimorar meus conhecimentos. Buscando sempre um MeetUp ou algum evento relacionado a Front-end para garimpar cada vez mais informações e poder estar junto com a comunidade. 
    </p>
  </div>
  <div className="barcontact-block">
   <Barcontact />
  </div>
  <Footer />

</div>

export default Home;