import Head from "next/head";
import Nav from "../components/nav";
import Script from "next/script";import React from 'react';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>Welcome to Our Website</h1>
      <p>Explore our amazing content and features.</p>
      <img
        src="https://example.com/your-image-url.jpg" // Replace with the URL of your image
        alt="Welcome Image"
        style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }}
      />
    </div>
  );
};

export default HomePage;
