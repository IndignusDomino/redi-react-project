import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TweetProvider } from './TweetContext'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TweetProvider> {/* Wrap your app with the context provider */}
      <App />
    </TweetProvider>
  </React.StrictMode>,
);