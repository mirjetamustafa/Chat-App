import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import ChatRoom from './pages/ChatRoom'
import Login from './pages/Login'

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
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
