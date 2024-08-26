import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

import Header from "../../components/header";
import Hero from "../../components/hero";
import Footer from "../../components/footer";

import "../../assets/styles/pages.scss";

function HomePage() {

  const [walletConnected, setWalletConnected] = useState(false);
  const [walletId, setWalletId] = useState('');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const referrerId = queryParams.get('referrerId');
  const referrerWalletAddress = queryParams.get('rAddress');

  if (referrerWalletAddress) {
    localStorage.setItem('rAddress', referrerWalletAddress);
  }

  const addWalletId = (id) => {
    setWalletId(id);
  }

  const toggleWalletConnection = (connected) => {
    setWalletConnected(connected)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    addWalletId('0xJf884432222dbf46edf9ee08XX33DDf0ddb80d22');
  }, [])

  return (
    <div className="home">
      <Header toggleWallet={toggleWalletConnection} walletConnected={walletConnected} walletId={walletId} />

      <Hero walletConnected={walletConnected} walletId={walletId}/>
      
      <Footer />
    </div>
  );
}
export default HomePage;
