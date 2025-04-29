import React from 'react';

const LogoutSuccess = () => {
  const styles = {
    container: {
      height: '100vh',
      background: 'linear-gradient(to bottom right, #ffe6e6, #ffffff)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      backgroundColor: '#fff',
      border: '2px solid #b71c1c',
      padding: '40px 60px',
      borderRadius: '20px',
      boxShadow: '0 0 15px rgba(183, 28, 28, 0.2)',
      textAlign: 'center',
      maxWidth: '400px',
    },
    icon: {
      fontSize: '50px',
      marginBottom: '20px',
      color: '#b71c1c',
    },
    heading: {
      color: '#b71c1c',
      marginBottom: '10px',
    },
    paragraph: {
      color: '#444',
      fontSize: '16px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <div style={styles.icon}>💉</div>
        <h2 style={styles.heading}>You’ve been logged out!</h2>
        <p style={styles.paragraph}>
          Thank you for being part of the Blood Donation network.
        </p>
      </div>
    </div>
  );
};

export default LogoutSuccess;
