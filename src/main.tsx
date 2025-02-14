import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import * as _assets from './assets.tsx'
import App from './App.tsx'
import { asset_registry } from './asset-registry.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

(window as any).__asset_cache = asset_registry;
(window as any).__assets_module = _assets;


