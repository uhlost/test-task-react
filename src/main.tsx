import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import './app/styles/index.css'
import './shared/lib/zod.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </StrictMode>
)
