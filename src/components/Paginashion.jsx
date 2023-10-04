import React from 'react';

export default function Paginashion() {

  const mystyle = {
    paginashion1: {
      textAlign: 'center',
      height: '45vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    paginashionIteam1: {
    //   color: '#fff',
      padding: '20px',
      margin: '10px',
      textDecoration: 'none',
      fontSize: '25px',
      fontWeight: '700',
    },
    pagion: {
        color: '#fff',
        margin: '10px',
        padding: '20px',
        textDecoration: 'none',
          backgroundColor: '#0f5f0b',
    },
  };

  return (
    <>
      <section className="paginashion1" style={mystyle.paginashion1}>
        <div className="paginashionIteam1" style={mystyle.paginashionIteam1}>
          <a className="pagion" style={mystyle.pagion} href="">1</a>
          <a className="pagion" style={mystyle.pagion} href="">2</a>
          <a className="pagion" style={mystyle.pagion} href=""><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
        </div>
      </section>
    </>
  );
}
