import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/reset.less'
import App from './views/App'

// 在开发模式下，strict mode会导致useEffect默认执行两次，因此去掉strict mode
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
