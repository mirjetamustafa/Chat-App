import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import ChatRoom from './pages/ChatRoom'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ChatRoom />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
