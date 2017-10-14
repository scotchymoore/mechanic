import React, { Component } from 'react';
import mechanic from '../assets/mechanic.jpg'

const styles = {
  pageBackground: {
    backgroundImage: `url(${mechanic})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    maxWidth: '100%',
    minHeight: '100vh',
  },
  h1: {
    color: 'white',
    paddingTop: "10%",
    paddingLeft: "3%",
  },
  h3: {
    color: 'white',
    paddingLeft: "3%",
  },
  p: {
    color: "white",
    margin: '10% 10% 3%',
    fontWeight: 'bold',
    display: 'inline-block',
    backgroundColor: 'rgba(0,0,0,.4)',
  },
  CTA: {
    display: 'inline-block',
    backgroundColor: 'rgb(185,30,30)',
    textDecoration: 'none',
    padding: '5px',
    color: 'white',
  },
  flexDiv: {
    display: 'flex',
    justifyContent: 'center',
  },
}

class Home extends Component {
  render() {
    return(
      <div style={styles.pageBackground}>
        <h1 style={styles.h1}>React Coder Auto Repair</h1>
        <h3 style={styles.h3}>Easy to work with. Easy on the wallet.</h3>
        <p style={styles.p}> At React Coders, we strive to make your car repairs a stress-free experience. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis enim ac
          pharetra ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Duis quis erat ut odio vehicula mattis. Nam orci leo, pulvinar
          quis semper ut, aliquam at nisl. Integer at lacus finibus, egestas massa eu, consequat
          augue. Morbi tristique, erat eu aliquet fermentum, enim est pretium felis, vitae sodales
          enim ligula et eros. Nunc interdum metus at vulputate bibendum. Suspendisse potenti.
          </p>
          <div style={styles.flexDiv}>
          <p style={styles.CTA}>Your call to action button</p>
          </div>
      </div>
    );
  }
}

export default Home;
