import React, { Component } from 'react';
import engine from '../assets/engine.jpeg';


const styles={
  pageContainer: {
    backgroundImage: `url(${engine})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    maxWidth: '100%',
    minHeight: '100vh',
  },
  mainHeader:{
    color: 'white',
    textAlign: 'center',
    padding: '3%',
  },
}

class Services extends Component {
  render() {
    return(
      <div style={styles.pageContainer}>
        <h1 style={styles.mainHeader}>Services</h1>
      </div>

    )
  }
}

export default Services;
