import React from 'react';
import './styles.css';
import Cubo from '../../assets/img/photo.JPG';
import Equipe from '../../assets/img/equipe.JPG';

function History() {
  return (
    
    <div className="container_u">
      <div className="container_box">
        <img src={Cubo} className="image"/>
        <p className="text">Cubo Magico</p>
      </div>
      <div className="container_box">
        <img src={Cubo} className="image"/>
        <p className="text">Como sobrevivi 5 anos sem internet.</p>
      </div>
    </div>  
        
  )};

export default History;

{/* <img src={Cubo}/> */}