import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ColorModeProvider } from './theme/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
    <ColorModeProvider>
        <App/>
    </ColorModeProvider>
)
