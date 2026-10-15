import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// public/404.html stashes the originally requested path before bouncing the
// browser to the SPA entry point. Restore it so the router mounts on the route
// that was actually asked for instead of always falling back to "/".
const stashedPath = sessionStorage.getItem('aether:path');
if (stashedPath) {
  sessionStorage.removeItem('aether:path');
  window.history.replaceState(null, '', stashedPath);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);