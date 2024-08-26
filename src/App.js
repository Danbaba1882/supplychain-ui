import { Web3Button } from '@web3modal/react'
import BaseRoot from "./routes/base-root";
import "./assets/styles/general.scss";
import './App.scss';
import { EthereumClient, w3mConnectors, w3mProvider, infuraProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import 'core-js/stable';
import 'regenerator-runtime/runtime';
//////
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { walletConnectProvider, EIP6963Connector } from '@web3modal/wagmi'

import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet, polygon, polygonMumbai, bsc, bscTestnet } from 'viem/chains'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

// const chains = [arbitrum, mainnet, polygon]
// const projectId = '0b39efac4687e50188707e0bcc6df699'

// const { publicClient, webSocketPublicClient} = configureChains(chains, [w3mProvider({ projectId }), alchemyProvider({ apiKey: 'UNmYU0zAvct_GRHxQqMsCUFYbThTkhUJ' }), publicProvider()])
// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors: w3mConnectors({ projectId, version: 1, chains }),
//   publicClient,
//   webSocketPublicClient
// })
// const ethereumClient = new EthereumClient(wagmiConfig, chains)

////////////////////////////////////////////////////////////////


// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '0b39efac4687e50188707e0bcc6df699'

// 2. Create wagmiConfig
const { chains, publicClient } = configureChains(
  [mainnet, bscTestnet, bsc, polygon, polygonMumbai],
  [walletConnectProvider({ projectId }), publicProvider()]
)

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({ chains, options: { projectId, showQrModal: true, metadata } }),
    new EIP6963Connector({ chains }),
    new InjectedConnector({ chains, options: { shimDisconnect: true } }),
    new CoinbaseWalletConnector({ chains, options: { appName: metadata.name } })
  ],
  publicClient
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

function App() {
  
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
      <BaseRoot />
      </WagmiConfig>
      {/* <Web3Modal projectId={projectId} ethereumClient={ethereumClient} /> */}
    </>
  )
}


export default App;
