import React from 'react';


function Testimoni(){
  return (
    <div className='contenidor-testimonis'>
      <img 
        className='imatge-testimoni' 
        src={require('../img/user.png')} 
        alt='imatge'
        />
        <div className='contenidor-text'>
          <p className='nom_testimoni'></p>
        </div>
    </div>
  );
}

export default Testimoni;