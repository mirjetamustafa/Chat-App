import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="text-red-500 text-3xl font-bold">Chat App</h1>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
