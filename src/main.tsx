import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import { config } from './antdConfig.ts'
import { CardProvider } from './contexts/CardContext.tsx'

import { worker } from './mocks/browser'

worker.start().then(() => {
  const container = document.getElementById('root')
  if (!container) throw new Error('Root container not found')

  createRoot(container).render(
    <StrictMode>
      <StyleProvider layer>
        <ConfigProvider theme={config}>
          <CardProvider>
            <App />
          </CardProvider>
        </ConfigProvider>
      </StyleProvider>
    </StrictMode>
  )
})
