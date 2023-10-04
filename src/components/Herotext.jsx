import React from 'react';

export default function Herotext(props) {

  const {bgImage } =props;

  const mystyle = {
    hero2: {
      backgroundImage: `url(${bgImage})`, 
      width: '100%',
      height: '70vh',
      backgroundSize: 'cover'
    },
    heroText2: {
      width: '100%',
      height: '70vh',
      padding: '0px 80px 0px 80px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    ht2: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    h1: {
      fontSize: '45px',
      fontFamily: "'Arimo', sans-serif",
      color: '#fff'
    },
    p: {
      padding: '5px 0 25px 0',
      fontSize: '16px',
      color: '#fff'
    },
  };

  return (
    <>
      <section className="hero2" style={mystyle.hero2}>
        <div className="hero-text2" style={mystyle.heroText2}>
          <div className="ht2" style={mystyle.ht2}>
            <h1 style={mystyle.h1}>{props.heading}</h1>
            <p style={mystyle.p}>{props.para}</p>
          </div>
        </div>
      </section>

    </>
  );
}
