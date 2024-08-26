import React, { useState, useEffect } from "react";
import { Web3Button } from '@web3modal/react'
import { Web3NetworkSwitch } from '@web3modal/react'
import { useConnect, useAccount } from 'wagmi'
import "../assets/styles/pages.scss";

import { useWeb3Modal } from '@web3modal/wagmi/react'

import "./../assets/styles/layout.scss";
import afrilogo from "../assets/images/afrilogo.jpeg";

function Header(props) {
  const { open } = useWeb3Modal()
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
  const { address, isConnecting, isDisconnected } = useAccount()

  const toggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const closeHeader = () => {
    setOpenMobileMenu(false);
  }

  useEffect(() => {});

  return (
    <>
      <div
        // className={
        //   openMobileMenu
        //     ? "header open-mobile-menu"
        //     : "header close-mobile-menu"
        // }
        className="header open-mobile-menu"
      >
        <div className='sub-layer'></div>
        <div className="case spread-info md-open relative">
          <div className="logo-mini" onClick={() => closeHeader()}>
              <h3>SUPPLYCHAIN</h3>
          </div>
          <div className="spread-info">
            <div className="mobile-menu pr-2 py-3">
              {/* <i className="fas fa-bars" onClick={toggleMobileMenu}></i> */}
            </div>
          </div>
        </div>
        <div className="w90 spread-nav-web relative">
          <div className="logo md-close-im" onClick={() => closeHeader()}>
          <h3>SUPPLYCHAIN</h3>
          </div>                    
          <div className="nav">
            
              {/* <li>
                <div className="text-center">
                  {
                    props.walletConnected &&
                    <button className="hollow-button-cream">{props.walletId}</button>
                  }
                </div>
              </li> */}
              <li>
                <div className="text-right" onClick={() => closeHeader()}>
                    
                    {/* <button className="solid-button-cream" onClick={() => props.toggleWallet(false)}>Disconnect Wallet</button> */}
                    {
                      !isDisconnected? <button onClick={() => open()} style={{color: "white", backgroundColor: "purple", height: "40px", width: "150px", borderRadius:"20px"}}>Disconnect Wallet</button>:<button onClick={() => open({ view: 'Networks' })} style={{color: "white", backgroundColor: "purple", height: "40px", width: "150px", borderRadius:"20px"}}>Connect Wallet</button>
                    }
                    {/* <button onClick={() => open()} style={{color: "white", backgroundColor: "purple", height: "40px", width: "150px", borderRadius:"20px"}}>Open Connect Modal</button>
                    <button onClick={() => open({ view: 'Networks' })} style={{color: "white", backgroundColor: "purple", height: "40px", width: "150px", borderRadius:"20px"}}>Open Network Modal</button> */}
                  
                                    {/* {
                    props.walletConnected ?
                    <Web3NetworkSwitch />:
                    <Web3Button />

                  } */}
                  {/* <span className="clickable" onClick={() => closeAndNavigate('partners')}>Partners</span> */}
                </div>
              </li>
            
          </div>
        </div>
      </div> 

      {/* <div className={scrolledHeader ? 'sub-layer' : 'trans-layer'}></div> */}
    </>
  );
}
export default Header;
